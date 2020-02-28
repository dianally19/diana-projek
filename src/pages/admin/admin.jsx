import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import { Link ,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

class admin extends Component {
    state={
        namaBarang : '',
        stok : 0,
        harga :0
    }

    inputBarang = () =>{
        if(!this.state.namaBarang){
            alert('Input Nama Barang !!!!!!')
        }
        else if(!this.state.stok){
            alert('Input Stok !!!!!!')
        }
        else if(!this.state.harga){
            alert('Input Harga !!!!!!')
        }else{
            Axios.post(urlApi + 'barang/inputbarang',{
                nama_barang : this.state.namaBarang,
                harga_barang: this.state.harga,
                stok_barang : this.state.stok
            })
            .then(() => {
                alert('Input barang berhasil !')
            })
            .catch((err => {
                console.log(err)
            }))
        }
    } 
    
    render() {
        
        if(!this.props.username){
            return <Redirect to='/'/>
        } 
        return (
            <div>
                <h1>Administrator</h1>
                <div className="container" style={{marginTop: '5%'}}>
                    <input type="text" className='form-control' placeholder='Nama Barang' onChange={(e) => this.setState({namaBarang: e.target.value})}/>
                    <input type="number" className='form-control' placeholder='Harga Barang' onChange={(e) => this.setState({harga: e.target.value})}/>
                    <input type="number" className='form-control' placeholder='Stok Barang' onChange={(e) => this.setState({stok: e.target.value})}/>

                    <button className='btn btn-warning btn-block' onClick={this.inputBarang}>Input Barang</button>
                </div>
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
  

  export default connect(mapStateToProps, { })(admin);
