import React, {Component} from 'react'
import {timeOfDay} from '../../App'

class MyServices extends Component {

  render () {

    let cardColor = ''
    let headerColor = ''
    let textColor = ''
    if(timeOfDay() === 'morning') {
      cardColor = 'whitesmoke'
      headerColor = '#333'
      textColor = '#777'
    }

    return (
      <div id='servicesAutoActiveRespose'>
        <div id='servicesId' className='servicesHeader'>
          <center><h2 style={{color : headerColor}}>My Services</h2></center>
        </div>
        <div className='servicesContainer container'>

          <div style={{backgroundColor : cardColor}} className='animate cardContainer'>
            <h3 className='fadeText'><span className='icon-camera3'></span>PHOTOGRAPHY</h3>
            <p style={{color : textColor}} className='descriptionText2'>
              Some commone things that you wish to tell your customers
              about what you can do for them. Get it ?
            </p>
          </div>

          <div style={{backgroundColor : cardColor}} className='animate cardContainer'>
            <h3 className='fadeText'><span className='icon-video2'></span>VIDEOGRAPHY</h3>
            <p style={{color : textColor}} className='descriptionText2'>
              Some commone things that you wish to tell your customers
              about what you can do for them. Get it ?
            </p>
          </div>

          <div style={{backgroundColor : cardColor}} className='animate cardContainer'>
            <h3 className='fadeText'><span className='icon-picture'></span>PHOTO EDITING</h3>
            <p style={{color : textColor}} className='descriptionText2'>
              Some commone things that you wish to tell your customers
              about what you can do for them. Get it ?
            </p>
          </div>

          <div style={{backgroundColor : cardColor}} className='animate cardContainer'>
            <h3 className='fadeText'><span className='icon-film'></span>VIDEO EDITING</h3>
            <p style={{color : textColor}} className='descriptionText2'>
              Some commone things that you wish to tell your customers
              about what you can do for them. Get it ?
            </p>
          </div>

        </div>
      </div>
    )
  }
}


export default MyServices
