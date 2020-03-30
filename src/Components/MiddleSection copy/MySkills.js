import React, {Component} from 'react'
import {timeOfDay} from '../../App'
class MySkills extends Component {


  scrollToView(element){
    document.getElementById(element).scrollIntoView({
    behavior: 'smooth'
  });
  }

  render () {
    let skillColor = ''
    if(timeOfDay() === 'morning') {
      skillColor = '#333'
    }

    return (
      <div className="container">
        <div className='skillSectionDivider'>
          <div className="mySkills">
            <div className="skillHeader">
              <h1 style={{color : skillColor}}>My <span className="highlight">Skills</span></h1>
            </div>
            <div className="skillRange">
              <div>
                <label style={{color : skillColor}} >Photography 85%</label>
                <progress value="85" max="100"></progress>
              </div>
              <div>
                <label style={{color : skillColor}} >Videography 75%</label>
                <progress value="75" max="100"></progress>
              </div>
              <div>
                <label style={{color : skillColor}} >Photo Manipulation 65%</label>
                <progress value="65" max="100"></progress>
              </div>
              <div>
                <label style={{color : skillColor}} >Video Editing 70%</label>
                <progress value="70" max="100"></progress>
              </div>
              <div>
                <label style={{color : skillColor}} >Animations 55%</label>
                <progress value="55" max="100"></progress>
              </div>
              <div>
                <button onClick={()=> this.scrollToView('contactId')} className="mainButton">Hire Me</button>
              </div>
            </div>
          </div>

          <div className='authorImage'></div>
        </div>
      </div>
    )
  }
}

export default MySkills
