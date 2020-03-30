import React from 'react'


class Videos extends React.Component {
  constructor() {
    super()


  }




  render () {
    return (
        <div>
          <iframe src={this.props.video}></iframe>
        </div>
    )
  }
}

export default Videos
