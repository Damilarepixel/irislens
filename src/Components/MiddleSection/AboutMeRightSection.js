import React from 'react'
import {timeOfDay} from '../../App'

class AboutMeRightSection extends React.Component {

  render () {
    const image1 = `url(${'../../images/aboutRight1.jpg'})`
    const image2 = `url(${'../../images/aboutRight2.jpg'})`
    let headerColor = ''
    let descriptionTextColor = ''
    if(timeOfDay() === 'morning') {
      headerColor = '#333'
      descriptionTextColor = '#777'
    }else {

    }


    return (
      <div id='aboutAutoActiveRespose' className='aboutMeRight'>
        <div>
          <h3 style={{color : headerColor}}>IRISLENS IS A CREATIVE DIRECTION PHOTOGRAPHY AGENCY</h3>
        </div>
        <div>
          <p style={{color : descriptionTextColor}} className='descriptionText2'>
            We're dedicated to helping you keep memories in the most perfect and splendiferous way. We care
            about people and their happiness, and we in every way possible give them the best of our services.
          </p>
        </div>
        <div>
          <small>EVERY PROJECT WITH PASSION</small>
        </div>
        <div className='aboutRightImages'>
          <div style={{backgroundImage : image1}} className='aboutRightBg1'></div>
          <div style={{backgroundImage : image2}} className='aboutRightBg2'></div>
        </div>
      </div>
    )
  }
}

export default AboutMeRightSection
