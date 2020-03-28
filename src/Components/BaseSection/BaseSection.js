import React, {Component} from 'react'
import Contact from './Contact'
import Instagram from './Instagram'
import Footer from './Footer'

class BaseSection extends Component {


  render () {
    return (
      <div>
        <Contact />
        <Instagram/>
        <Footer/>
      </div>
    )
  }
}


export default BaseSection
