import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import { urlApi } from '../../helper/database'
import JumboTron from './jumboTron'


// import Photo1 from '../../photo/logo.jpg'
// import Photo2 from '../../photo/img1.jpg'

export default class Home extends Component {
    
    getData = () => {
        Axios.get(urlApi + 'customer/getTest')
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    componentDidMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                <JumboTron/>
              
            </div>
        )
    }
}

