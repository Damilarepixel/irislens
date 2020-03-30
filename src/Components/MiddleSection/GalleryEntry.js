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
            i present you.A small river named Duden flows by their place.
          </p>
        </div>
        <img src={'../../images/galleryEntryBg.jpg'} alt='Entry'></img>
      </div>
    )
  }
}

export default GalleryEntry
