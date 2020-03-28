import React, {Component} from 'react'
import MainButton from './MainButton'


class IntroText extends Component {
    constructor() {
      super()

      this.state = {
        name : 'David Aderogba',
        description : `A Passionate Photo And VideoGrapher, Freelancer And A Lover Of Chill Step. I Love To Capture Moments Of Beauty, And Beauty I believe, Is Art, At Its Finest.`
      }

  }


    render () {
      return (
        <div className='introTextContainer'>
          <div>
            <h1>I'm {this.state.name}</h1>
          </div>
          <div>
            <p className='fadeText'>Photographer <span>|</span> Freelancer</p>
          </div>
          <div>
            <p className='descriptionText' style={{color : 'whitesmoke'}}>
              {this.state.description}
            </p>
          </div>
          <div>
            <MainButton/>
          </div>
        </div>
      )
  }

}

export default IntroText
