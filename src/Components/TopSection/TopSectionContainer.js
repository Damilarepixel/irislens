import React,{Component} from 'react'
import Navigation from './Navigation'
import IntroText from './IntroText'


class TopSectionContainer extends Component {
  constructor(){
    super()
  }


  render() {
    return (
      <div id='home' className='homeBg'>
        <Navigation/>
        <IntroText/>
      </div>
    )
  }
}

export default TopSectionContainer
