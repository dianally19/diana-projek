import React,{ Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
class Auth extends Component {
  constructor (props) {
    super(props);
    this.state = { 
      country: '', 
      region: '' ,
      login:false
    };
    
  }
  selectCountry (val) {
    this.setState({ country: val });
  }
 
  selectRegion (val) {
    this.setState({ region: val });
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
                  label='Username'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />
                <MDBInput
                  label='Your password'
                  group
                  type='password'
                  validate
                  labelClass='white-text'
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
                />
                <MDBInput
                  label='Address'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />  
                <div>
                  Country :
                <CountryDropdown
                  value={country}
                  onChange={(val) => this.selectCountry(val)} />
                  City : <br/>
                <RegionDropdown
                  country={country}
                  value={region}
                  onChange={(val) => this.selectRegion(val)} />
                </div>
                        
                <MDBInput
                  label='Phone Number'
                  group
                  type='Number'
                  validate
                  labelClass='white-text'
                />
                <MDBInput
                  label='Your email'
                  group
                  type='text'
                  validate
                  labelClass='white-text'
                />
                <MDBInput
                  label='Your password'
                  group
                  type='password'
                  validate
                  labelClass='white-text'
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

export default Auth;