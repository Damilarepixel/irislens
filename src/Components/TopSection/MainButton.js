import React, {Component} from 'react'

class MainButton extends Component {
  constructor() {
    super()
  }


  scrollToView(element){
    document.getElementById(element).scrollIntoView({
    behavior: 'smooth'
  });
  }

  render () {
    return (
      <div>
        <button onClick={()=> this.scrollToView('contactId')} className='mainButton'>Contact Me</button>
      </div>
    )
  }
}

export default MainButton
