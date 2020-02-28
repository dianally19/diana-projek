import React, { Component } from 'react'
import Axios from 'axios'
import { urlApi } from '../../helper/database'
import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";
import { Link ,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'


import detailsBarang from './detailsBarang'



class viewBarang extends Component {
    state={
        databarang:[],
        totalharga:0,
        jumlahBarang: 0,
        hargaBarang: 0
    }



    getDataBarang=()=>{
        Axios.get(urlApi + 'barang/getdatabarang')
        .then((res) => {
            this.setState({databarang: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    handleChangeHarga = (e) => {
        return this.setState({ totalharga: this.state.totalharga + e})
    }

    renderDataBarang = () => {

        return this.state.databarang.map((val) => {
            return (
                <Link to={`/detailsBarang/${val.id_barang}`}>
                    <MDBListGroupItem href="#">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">{val.nama_barang}</h5>
                            <small>Stok : {val.stok_barang}</small>
                        </div>
                        <p className="mb-1">{val.harga_barang}</p>
                       
                     
                    </MDBListGroupItem>
                </Link>
            )
        })
    }

    totalharga=(harga) =>{
        this.setState({ totalharga: this.state.totalharga + harga })
    }

    componentDidMount(){
        this.getDataBarang()
    }



    render() {
        if(!this.props.username){
            return <Redirect to='/'/>
        } 
        return (
            <div>
                <h1>Barang</h1>
                 <MDBContainer>
                <MDBListGroup style={{ width: "100%" }}>
                    {this.renderDataBarang()}
                </MDBListGroup>
     
                </MDBContainer>
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
  

  export default connect(mapStateToProps, { })(viewBarang);