import React, { Component } from 'react'
import { Link } from 'react-router-dom';

// import Photo1 from '../../photo/logo.jpg'
// import Photo2 from '../../photo/img1.jpg'

export default class Home extends Component {
    
// state = {
//     images : [
//       {url: Photo1},
//       {url: Photo2}
//     ]
//   }
    render() {
        return (
            <div>
                <h1>HOME</h1>
                <Link to='/signup'>
                    <button className='btn btn-light'>Sign Up</button>
                </Link>
            </div>
        )
    }
}

