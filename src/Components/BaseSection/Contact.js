import React, {Component} from 'react'
import {timeOfDay} from '../../App'

class Contact extends Component {

  render () {

    let headerColor = ''
    let background = ''
    let textColor = ''
    let descriptionText = ''
    if(timeOfDay() === 'morning') {
      background = 'whitesmoke'
      headerColor = '#333'
      textColor = '#333'
      descriptionText = '#777'
    }


    return (
      <div id='contactAutoActiveRespose' className='container'>
        <h2 id='contactId' style={{color : headerColor}}>Wanna Work With Me ?</h2>
        <div className='formContainer formGroup'>
          <form className="contactForm" action="mailto:irislensphotography­@gmail.com" method="post">
            <div className='block'>
              <input required style={{backgroundColor : background, color : textColor}} placeholder='First Name' type='text' name='firstName'></input>
            <input required style={{backgroundColor : background, color : textColor}} placeholder='Last Name' type='text' name='lastName'></input>
            </div>
            <div className=''>
              <input required style={{backgroundColor : background, color : textColor}} placeholder='Your Mail' type='email' name='Email'></input>
            <input required style={{backgroundColor : background, color : textColor}} placeholder='Subject' type='text' name='subject'></input>
            </div>
            <textarea required style={{backgroundColor : background, color : textColor}} placeholder='Your Message ...' name="name">
            </textarea>
            <button className='mainButton'>Send message</button>
          </form>
          <div className='addressContainer'>
            <div style={{backgroundColor : background}} className='addressBg'>
              <a title='Locate Me' href=''>
                <h3 style={{color : textColor}}><span className='icon-address icon'></span>Address</h3>
                <p style={{color : descriptionText}}>
                  123 Dead Man Street, Off Denu Estate, Sweet Coffee Plaza, United States USA 10015.
                </p>
              </a>
            </div>
            <div style={{backgroundColor : background}} className='addressBg'>
              <a title='Call Me' href='tel:+16823757862'>
                <h3 style={{color : textColor}}><span className='icon-phone icon'></span>Phone</h3>
                <p style={{color : descriptionText}}>
                  +1-682-375-7862
                </p>
              </a>
            </div>
            <div style={{backgroundColor : background}} className='addressBg'>
              <a title='Mail Me' href='mailto:irislensphotography­@gmail.com'>
                <h3 style={{color : textColor}}><span className='icon-mail icon'></span>Email Address</h3>
                <p style={{color : descriptionText}}>
                  irislensphotography­@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Contact
