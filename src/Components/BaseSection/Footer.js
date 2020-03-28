import React,{Component} from 'react'
import {timeOfDay} from '../../App'
import {scroller} from '../TopSection/Navigation'

class Footer extends Component {


  render () {

    let headerColor = ''
    let textColor = ''
    if(timeOfDay() === 'morning') {
      headerColor = '#333'
      textColor = '#777'
    }

    return (
      <div>
        <footer className='container'>
          <div className='footerAbout'>
            <h1 style={{color : headerColor}}>About IrisLens</h1>
            <p style={{color : textColor}} className='footerTexts'>
              We're dedicated to helping you keep memories in the most perfect and splendiferous way. We care
              about people and their happiness, and we in every way possible give them the best of our services.
            </p>
            <div className='socialLinks'>
              <a href='https://web.facebook.com/davidolamide.oladeindemartins' className='icon-facebook icon'></a>
              <a href='https://www.instagram.com/irislens_photography/' className='icon-instagram2 icon'></a>
              <a href='#' className='icon-linkedin icon'></a>
              <a href='#' className='icon-twitter icon'></a>
            </div>
          </div>
          <div>
            <h1 style={{color : headerColor}}>Quick Links </h1>
            <div className='footerlinks'>
              <p><a style={{color : textColor}} onClick={()=> scroller('home')} className='footerTexts'>Home</a></p>
              <p><a style={{color : textColor}} onClick={()=> scroller('galleryId')} className='footerTexts'>Gallery</a></p>
              <p><a style={{color : textColor}} onClick={()=> scroller('blogId')} className='footerTexts'>Blogs</a></p>
              <p><a style={{color : textColor}} onClick={()=> scroller('contactId')} className='footerTexts'>Contact</a></p>
            </div>
          </div>
          <div>
            <h1 style={{color : headerColor}}>Recent Blogs</h1>
            <div>
              <div className='footerBlogContainer'>
                <div className='footerblogBg' style={{backgroundImage : `url(./irisLenseSource/app/images/gallery/6.jpg)`}}></div>
                <div>
                  <h4><a style={{color : headerColor}} href='#'>Light Effects And Shadows</a></h4>
                  <small style={{color : textColor}} >16 March, 2020</small>
                </div>
              </div>
              <div className='footerBlogContainer'>
                <div className='footerblogBg' style={{backgroundImage : `url(./irisLenseSource/app/images/gallery/4.jpg)`}}></div>
                <div>
                  <h4><a style={{color : headerColor}} href='#'>Don't Snap Your Grandma</a></h4>
                  <small style={{color : textColor}} >16 March, 2020</small>
                </div>
              </div>
              <div className='footerBlogContainer'>
                <div className='footerblogBg' style={{backgroundImage : `url(./irisLenseSource/app/images/gallery/3.jpg)`}}></div>
                <div>
                  <h4><a style={{color : headerColor}} href='#'>Who Killed My Dog ?</a></h4>
                  <small style={{color : textColor}} >16 March, 2020</small>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 style={{color : headerColor}}>Contact Info</h1>
            <p style={{color : textColor}} className='footerTexts'>123 Dead Man Street, Off Denu Estate, Sweet Coffee Plaza, United States USA 10015.</p>
          <p><span className='icon-phone icon'></span><a style={{color : headerColor}} href='tel:+16823757862'>+1-682-375-7862</a></p>
          <p><span className='icon-mail icon'></span><a style={{color : headerColor}} href='mailto:irislensphotography­@gmail.com'>irislensphotography­@gmail.com</a></p>
            <p><span className='icon-globe icon'></span><a style={{color : headerColor}} href='#'>www.coffeeplanet.com</a></p>
          </div>
        </footer>
        <center>
          <p style={{color : textColor}} className='descriptionText copyright'>Copyright &copy; {new Date().getFullYear()} All Rights Reserved |
            This Template Is Made With Love By <a href='#'>Emmanuel</a></p>
          </center>
      </div>
    )
  }
}

export default Footer
