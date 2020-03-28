import React from 'react'
import instaData from '../../Data/instagramData'
import InstaPostSetter from './InstaPostSetter'
import {timeOfDay} from '../../App'

class Instagram extends React.Component {

  render () {
    let headerColor = ''
    if(timeOfDay() === 'morning') {
      headerColor = '#333'
    }

    const instaPost = instaData.map(post => {
      return (
        <InstaPostSetter
          image = {post.post}
          key = {post.post}
        />
      )
    })
    return (
      <div>
        <center>
          <a href='https://www.instagram.com/irislens_photography/'>
            <h1 style={{color : headerColor}}><span className='icon-instagram2 icon'></span>Follow Instagram</h1>
          </a>
        </center>
        <div>
          <div className='instaPosts'>
            {instaPost}
          </div>
        </div>
      </div>
    )
  }
}

export default Instagram
