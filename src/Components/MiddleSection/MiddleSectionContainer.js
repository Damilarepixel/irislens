import React, {Component} from 'react'
import AboutMeLeftSection from './AboutMeLeftSection'
import AboutMeRightSection from './AboutMeRightSection'
import MySkills from './MySkills'
import MyServices from './MyServices'
import VideoSetter from './VideoSetter'
import Gallery from './Gallery'
import Blogs from './Blogs'


class MiddleSectionContainer extends Component {

  render () {
    return (
      <div>
        <div className='aboutMeContainer container'>
          <div>
            <AboutMeLeftSection/>
          </div>
          <div>
            <AboutMeRightSection/>
          </div>
        </div>
        <MySkills/>
        <MyServices/>
      <VideoSetter />
        <div>
          <Gallery/>
        </div>
        <Blogs/>
      </div>
    )
  }
}

export default MiddleSectionContainer
