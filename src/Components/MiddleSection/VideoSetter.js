import React, {Component} from 'react'
import videoData from '../../Data/videoData'
import Videos from './videos'
import {timeOfDay} from '../../App'

class VideoSetter extends Component {

  render () {
    let vidHeaderColor = ''
    if(timeOfDay() === 'morning') {
      vidHeaderColor = '#333'
    }

    const videoFiles = videoData.map(vidFile => {
      return (
        <Videos
          video = {vidFile.video}
          poster = ''
          key = {vidFile.id}
        />
      )
    })
    return (
      <div>
        <center style={{marginBottom : '50px'}}><h1 style={{color : vidHeaderColor}}>My <span className='highlight'>Videos</span></h1></center>
        <div className='vidFiles container'>
          {videoFiles}
        </div>
      </div>
    )
  }
}

export default VideoSetter
