import React from 'react'
const ImageSetter = (props) => {
  // const bg = {backgroundImage : `url(${require(props.image)})`}
  return (
      <div className='cover'>
        <div className='galleryImageBg' style = {{backgroundImage : `url(${props.image})`}}>
        </div>
      </div>
  )
}

export default ImageSetter