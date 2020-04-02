import React, {Component} from 'react'
import {timeOfDay} from '../../App'


class Blogs extends Component {


  render () {

    let blogBgColor = ''
    let blogTitleColor = ''
    let descTextColor = ''

    if(timeOfDay() === 'morning') {
      blogBgColor = 'whitesmoke'
      blogTitleColor = '#333'
      descTextColor = '#777'
    }

const blogImages = {
  img1 : '../../images/gallery/1.jpg',
  img2 : '../../images/gallery/8.jpg',
  img3 : '../../images/gallery/19.jpg'
}
    return (
      <div>
        <div id='blogsAutoActiveRespose'><center><h1 style={{color : blogTitleColor}} id='blogId'>My Blogs</h1></center></div>

        <div className='blogContainer container'>
          <div style={{backgroundColor : blogBgColor}} className='blogs'>
            <div style={{backgroundImage : `url(${'/gallery/1.jpg'})`}} className='blogsBg'></div>
            <div className='blogTextContainer'>
            <h2><a style={{color : blogTitleColor}} href='#'>Why Photography Is Good For Business</a></h2>
            <div className='timeAuthorTextContainer'>
              <small><span className='icon-calendar3 icon'></span>May 16, 2020</small>
            <small><span className='icon-profile-male icon'></span>Author - Sweet Coffee</small>
            </div>
            <p style={{color : descTextColor}} className='blogText'>
              Lorem ipsom dolor and some really shitty stuffs i don't care about
              Lorem ipsom dolor and some really shitty stuffs i don't care about
            </p>
            <p><a className='readMore' href='#'>Read More</a></p>
            </div>
          </div>
          <div style={{backgroundColor : blogBgColor}} className='blogs'>
            <div style={{backgroundImage : `url(${'/gallery/8.jpg'})`}} className='blogsBg'></div>
            <div className='blogTextContainer'>
            <h2><a style={{color : blogTitleColor}} href='#'>How To Die Young Smoking Weed And Coke</a></h2>
            <div className='timeAuthorTextContainer'>
              <small><span className='icon-calendar3 icon'></span>May 16, 2020</small>
              <small><span className='icon-profile-male icon'></span>Author - Sweet Coffee</small>
            </div>
            <p style={{color : descTextColor}} className='blogText'>
              Lorem ipsom dolor and some really shitty stuffs i don't care about
              Lorem ipsom dolor and some really shitty stuffs i don't care about
            </p>
            <p><a className='readMore' href='#'>Read More</a></p>
            </div>
          </div>
          <div style={{backgroundColor : blogBgColor}} className='blogs'>
            <div style={{backgroundImage : `url(${'/gallery/19.jpg'})`}} className='blogsBg'></div>
            <div className='blogTextContainer'>
            <h2><a style={{color : blogTitleColor}} href='#'>The Mastry Of Light Effects And Shadows</a></h2>
            <div className='timeAuthorTextContainer'>
              <small><span className='icon-calendar3 icon'></span>May 16, 2020</small>
              <small><span className='icon-profile-male icon'></span>Author - Sweet Coffee</small>
            </div>
            <p style={{color : descTextColor}} className='blogText'>
              Lorem ipsom dolor and some really shitty stuffs i don't care about
              Lorem ipsom dolor and some really shitty stuffs i don't care about
            </p>
            <p><a className='readMore' href='#'>Read More</a></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Blogs
