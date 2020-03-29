import React from 'react'

class InstaPostSetter extends React.Component {
constructor (props) {
  super()
}
  render () {
    return (
      <div className='instaBg instaContainer' style={{backgroundImage : `url(${this.props.image})`}}>
            <div className='overlay'>
              <a href='https://www.instagram.com/irislens_photography/'>
                <h1 className='icon-instagram2'></h1>
              </a>
              <h4>IrisLense</h4>
          </div>
      </div>
    )
  }
}

export default InstaPostSetter
