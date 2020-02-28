import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import SimpleImageSlider from "react-simple-image-slider";

import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import Auth from './pages/auth/Auth'
import Admin from './pages/admin/admin'
import barang from './pages/Barang/viewBarang'
import detailsBarang from './pages/Barang/detailsBarang'

class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <Switch> 
          <Route path='/' component={Home} exact/>
          <Route path='/auth' component={Auth} exact/>
          <Route path='/admin' component={Admin} exact/>
          <Route path='/barang' component={barang} exact/>
          <Route path='/detailsbarang/:idBarang' component={detailsBarang} exact/>
        </Switch>
      </div>
    )
  }
}


export default withRouter(App)