import React, {Component} from 'react'
import GalleryEntry from './GalleryEntry'
import images from '../../Data/galleryImagesData'
import ImageSetter from './GalleryImageSetter'


class Gallery extends Component {
        constructor() {
          super()
          this.state = {

          }
        }

  render () {
const gallery = images.map(img => {
return  <ImageSetter
  image = {img.image}
  key = {img.image}/>
})
// console.log(gallery)

    return (
      <div id='galleryAutoActiveRespose'>
        <GalleryEntry/>
        <div className='galleryContainer'>
          {gallery}
        </div>
      </div>
    )
  }
}

export default Gallery
