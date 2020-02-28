import React, { Component } from 'react'
import Axios from 'axios'
import { Link ,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { urlApi } from '../../helper/database'

class detailsBarang extends Component {
    state = {
        dataDetailsBarang: [],
        quantity: 0,
        stokBarang: 0,
        showTransaction : false,
        hargaBayar:0,
        kembalian: 0,
        totalharga:0,
        jumlahBeli:0,
    }

    getDetailsBarang = () => {
        Axios.get(urlApi + 'barang/getdetailsbarang/' + this.props.match.params.idBarang)
        .then((res) => {
            console.log(res.data)
            this.setState({ dataDetailsBarang: res.data, stokBarang: res.data[0].stok_barang })
        })
        .catch((err) => {
            console.log(err)
        })
    }
   
    beliBarang = () => {
       if(!this.state.hargaBayar){
        alert('Masukkan Uang Anda!!!!')
       }else if(this.state.hargaBayar< this.state.quantity * this.state.dataDetailsBarang[0].harga_barang){
           alert('Harga tidak memenuhi nominal!!')
       }else{
           this.setState({ kembalian:  this.state.hargaBayar- this.state.dataDetailsBarang[0].harga_barang})
           Axios.post(urlApi +  'barang/pembayaran', {
               id_barang:this.props.match.params.idBarang,
               jumlahBeli: this.state.quantity,
               totalHarga: this.state.quantity * this.state.dataDetailsBarang[0].harga_barang
           })
           .then((res) => {
               alert('Berhasil!!')
            })
            .catch((err) => {
                console.log(err)
                alert('gagal')
            })
       }
    }

    renderDetailsBarang = () => {
        return this.state.dataDetailsBarang.map((val) => {
            return (
                <div>
                    <h1>{val.nama_barang}</h1>
                    <p>{val.harga_barang}</p>
                    <p>Stok: {val.stok_barang}</p>

                    <button onClick={() => this.setState({ quantity: this.state.quantity + 1})}>+</button> 
                        {this.state.quantity} 
                    <button onClick={() => this.setState({ quantity : this.state.quantity - 1})}>-</button>
                    <br />
                    <button onClick={()=>this.setState({showTransaction : true})}>Beli {this.state.quantity * val.harga_barang}</button>
                    <button onClick={() => this.setState({showTransaction:false})}>cancel</button>
                </div>
            )
        })
    }

    componentDidMount() {
        this.getDetailsBarang()
    }

    render() {
        return (
            <div className='container' style={{marginTop: '100px'}}>
               {this.renderDetailsBarang()}

                {
                    this.state.showTransaction
                    ?

                    <div>
                    <h1>Detail Transaksi</h1>
                    <h2>Nama Barang :  {this.state.dataDetailsBarang[0].nama_barang} </h2>
                    <h2>Harga :{this.state.dataDetailsBarang[0].harga_barang}</h2>
                    <h2>Total Harga :{this.state.quantity * this.state.dataDetailsBarang[0].harga_barang}</h2>
                    <div>

                    <input type="number" className='form-control' placeholder='Masukkan Uang' min='0'  onChange={(e) => this.setState({hargaBayar: e.target.value}) }/>
                    <input type="button" className='btn btn-success' value='BAYAR' min='0'  onClick={this.beliBarang}/>
                    <h2>Kembalian : {this.state.kembalian} </h2>

                    </div>
                
            
                </div>
                :
                null
                }
              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      role : state.user.role,
      username: state.user.username
    }
  }
  

  export default connect(mapStateToProps, { })(detailsBarang);