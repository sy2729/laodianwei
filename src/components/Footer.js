import React, { Component } from 'react';
import styled from 'styled-components'
import { DeepBg } from '../styled-components/styles'
class Footer extends Component {
  constructor() {
    super();
    this.state = {
      address: {
        detail: '190 Bleecker St',
        city: 'New York',
        state: 'NY',
        postal: '10012'
      },
      phone: '(646)8959908',
    }
  }
  render(){
    return (
      <FooterDOM>
         <div className="flex">
          <div className="address flex align-start">
              <h2>Address</h2>
              <div>
                <a href="http://maps.google.com/maps?daddr=190 Bleecker St, New York, NY, 10012" target="_blank"  rel="noopener noreferrer">
                  <span>{this.state.address.detail}, </span>
                  <span>{`${this.state.address.city}, ${this.state.address.state}, ${this.state.address.postal}`}</span>
                </a>
                <p><a href={`tel:${this.state.phone}`}>{this.state.phone}</a></p>
              </div>
          </div>
         </div>
         <div className='t-center'>
          <p className='copy'>老滇味&copy;2019</p>
         </div>
      </FooterDOM>
    )
  }
}

const FooterDOM = styled(DeepBg)`
  min-height: 100px;
  width: 100%;
  padding: 20px 40px;

  h2 {
    margin-top: 0;
    margin-right: 10px;
    padding-bottom: 4px;
    text-decoration: underline;
  }
  p {
    margin: 10px;
  }
  .address {
    text-align: left;
  }
  a {color: inherit; text-decoration: none;}

  .copy {
    color: #616372;
    padding: 0; margin: 0;
  }
`

export default Footer