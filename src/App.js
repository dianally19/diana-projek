import React, { Component } from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import SimpleImageSlider from "react-simple-image-slider";

import Home from './pages/home/Home'
import Navbar from './pages/navbar/Navbar'
import Auth from './pages/auth/Auth'

class App extends Component {
  
  render() {
    return (
      <div>
        <Navbar />
        <Switch> 
          <Route path='/' component={Home} exact/>
          <Route path='/auth' component={Auth} exact/>
        </Switch>
      </div>
    )
  }
}


export default withRouter(App)