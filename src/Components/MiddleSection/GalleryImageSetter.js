import React from 'react'
const ImageSetter = (props) => {
  return (
      <div className='cover'>
        <div className='galleryImageBg' style = {{backgroundImage : `url(${props.image})`}}>
        </div>
      </div>
  )
}

export default ImageSetter
