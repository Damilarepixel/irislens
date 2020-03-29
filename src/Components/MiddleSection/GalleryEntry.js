import React, {Component} from 'react'

class GalleryEntry extends Component {

  render () {
    return (
      <div id='galleryId' className='galleryBg'>
        <div className='entryHeading'>
          <h1>Gallery</h1>
          <p className='descriptionText'>
            see some of my latest and greatest works beyound
            the very coffee nature of my abilities and potencials
            i present you.A small river named Duden flows by their place
            and supplies it with the necessary regelialia.
            It is a paradisematic country, in which roasted parts of
            sentences fly into your mouth.Far far away, behind the word mountains.
          </p>
        </div>
        <img src={'/images/galleryEntryBg.jpg'} alt='Entry'></img>
      </div>
    )
  }
}

export default GalleryEntry
