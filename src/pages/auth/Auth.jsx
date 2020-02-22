import React,{ Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import Axios from "axios";
import { connect } from 'react-redux'

import { loginUser } from '../../redux/actions/userAction'
import { urlApi } from "../../helper/database";
class Auth extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      login:false,
      username: '',
      password: '',
      email:'',
      emailLogin: '',
      passwordLogin:'',
      confirmPass:''
    };
    
  }
  selectCountry (val) {
    this.setState({ country: val });
  }
 
  selectRegion (val) {
    this.setState({ region: val });
  }

  //FUNCTION REGISTER
 customerRegister = () => {
   if(!this.state.username) {
     alert('Input username')
   } else if(!this.state.email) {
     alert('Email salah')
   }else if(!this.state.password){
    alert('Isi Password !!!!')
   }else if(this.state.confirmPass!=this.state.password){
    alert('Password Tidak sama !!!!')
   }
   else{
   Axios.post(urlApi + 'customer/customerRegister', { //DATA YANG KITA KIRIM KE BACKEND
    nama: this.state.username,
    email : this.state.email,
    password : this.state.password,
    role: 1
   })
   .then(() => {
     alert('register sukses')
   })
   .catch((err) => {
     alert('register gagal!')
   })
   }
 }


 loginUser = () => {
   if(!this.state.emailLogin) {
     alert('Masukkan username!')
   } else if(!this.state.passwordLogin) {
     alert('Masukkan password')
   } else {
     this.props.loginUser(this.state.emailLogin)
   }
 }

render(){
  const { country, region } = this.state;
  return (
    <div style={{marginTop: '100px', left: '100px'}}>
      {
        this.state.login
        ?
        <>
        <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <MDBCard
              className='card-image'
              style={{
                backgroundImage:
                  'url(http://mentalhealth4muslims.com/wp-content/uploads/2017/04/shop.jpeg)',
                width: '28rem'
              }}
            >
              <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                <div className='text-center'>
                  <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                    <strong>SIGN</strong>
                    <a href='#!' className='green-text font-weight-bold'>
                      <strong> IN</strong>
                    </a>
                  </h3>
                </div>
                <MDBInput
                  label='Email'
                  group
                  type='text'
                  validate 
                  labelClass='white-text'
                  onChange = {(e) => this.setState({ emailLogin: e.target.value })}
                />
                <MDBInput
                  label='Your password'
                  group
                  type='password'
                  validate
                  labelClass='white-text'
                  onChange = {(e) => this.setState({ passwordLogin: e.target.value })}
                />
                <div className='md-form pb-3'>
                  <MDBInput
                    label={
                      <>
                        Accept the&nbsp;
                        <a href='#!' className='green-text font-weight-bold'>
                          Terms and Conditions
                        </a>
                      </>
                    }
                    type='checkbox'
                    id='checkbox1'
                    labelClass='white-text'
                  />
                </div>
                <MDBRow className='d-flex align-items-center mb-4'>
                  <div className='text-center mb-3 col-md-12'>
                    <MDBBtn
                      color='success'
                      rounded
                      type='button'
                      className='btn-block z-depth-1'
                      onClick={this.loginUser}
                    >
                      Sign In
                    </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md='12'>
                  <p className='font-small white-text d-flex justify-content-end'>
                    Have an account?
                    <button onClick={() => this.setState({ login: false })}>Register</button>
                  </p>
                </MDBCol>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
        </>
      :
      <>
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <MDBCard
              className='card-image'
              style={{
                backgroundImage:
                  'url(http://mentalhealth4muslims.com/wp-content/uploads/2017/04/shop.jpeg)',
                width: '28rem'
              }}
            >
              <div className='text-white rgba-stylish-strong py-5 px-5 z-depth-4'>
                <div className='text-center'>
                  <h3 className='white-text mb-5 mt-4 font-weight-bold'>
                    <strong>SIGN</strong>
                    <a href='#!' className='green-text font-weight-bold'>
                      <strong> UP</strong>
                    </a>
                  </h3>
                </div>
                <MDBInput
                  label='Full Name'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                  onChange = {(e) => this.setState({ username: e.target.value })}
                />
                {/* <MDBInput
                  label='Address'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />   */}
                {/* <div>
                  Country :
                <CountryDropdown
                  value={country}
                  onChange={(val) => this.selectCountry(val)} />
                  City : <br/>
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => this.selectRegion(val)} />
                </div> */}
                        
                {/* <MDBInput
                  label='Phone Number'
                  group
                  type='Number'
                  validate
                  labelClass='white-text'
                /> */}
                <MDBInput
                  label='Your email'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                  onChange = {(e) => this.setState({ email: e.target.value })}
                />
                <MDBInput
                  label='Your password'
                  group
                  type='password'
                  validate
                  labelClass='white-text'
                  onChange = {(e) => this.setState({ password: e.target.value })}
                />
                 <MDBInput
                  label='Confirm Password'
                  group
                  type='password'
                  validate
                  labelClass='white-text'
                  onChange = {(e) => this.setState({ confirmPass: e.target.value })}
                />
                <div className='md-form pb-3'>
                  <MDBInput
                    label={
                      <>
                        Accept the&nbsp;
                        <a href='#!' className='green-text font-weight-bold'>
                          Terms and Conditions
                        </a>
                      </>
                    }
                    type='checkbox'
                    id='checkbox1'
                    labelClass='white-text'
                  />
                </div>
                <MDBRow className='d-flex align-items-center mb-4'>
                  <div className='text-center mb-3 col-md-12'>
                    <MDBBtn
                      color='success'
                      rounded
                      type='button'
                      className='btn-block z-depth-1'
                      onClick={this.customerRegister}
                    >
                      Sign Up
                    </MDBBtn>
                  </div>
                </MDBRow>
                <MDBCol md='12'>
                  <p className='font-small white-text d-flex justify-content-end'>
                    Have an account?
                    <button onClick={() => this.setState({ login: true})}>Log in</button>
                  </p>
                </MDBCol>
              </div>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
      }
    </div>
  );
}
};

export default connect(null, { loginUser })(Auth);