import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';

var checker = 0;


window.onload = ()=> {

  const nav = document.getElementById('navigation')
  const phoneMenu = document.getElementById('phoneMenu')
  const phoneLogo = document.getElementById('phoneLogo')
  const closeNav = document.getElementById('closeNav')
  const navIcon = document.getElementById('navIcon')
  const logo = document.getElementById('logo')
  // const navCloseButton = document.getElementById('closeNav')
  phoneLogo.style.display = 'none'
  closeNav.style.display = 'none'
  navIcon.style.display = 'none'
  phoneMenu.style.display = 'none'
  /*call the function first, having no idea what screen size your page will be
  loaded with on startup
  */
 function respondToScreenSize() {
  if(window.innerWidth <= 800) {
/*Remove any initial class of the element as we never want to have both
the phoneSize Navigation style and the Desktop style navigation style
at the same time*/
  nav.classList.remove('navLinks')
  nav.classList.add('sideMenu')
  /*show the menu icon and sideMenu-cancel button on phone sizes*/
  phoneMenu.style.display = 'block';phoneMenu.style.padding = '20px'
  closeNav.style.display = 'block'
  navIcon.style.display = 'block'
  phoneLogo.style.display = 'block'
  logo.style.display = 'none'
  console.log('phone size')
}else{
  nav.classList.remove('sideMenu')
  nav.classList.add('navLinks');
  /*Hide all the menu icon and sideMenu-cancel buttons for phone sizes */
  closeNav.style.display = "none";
  navIcon.style.display = "none";
  phoneLogo.style.display = 'none'
  phoneMenu.style.display = 'none';phoneMenu.style.padding = '0px'
  logo.style.display = 'block'
  console.log('desktop size')
  }

}

  respondToScreenSize()

window.addEventListener('resize', ()=> {
  respondToScreenSize()
})

  if(window.pageYOffset > 800) {
    navIcon.style.display === 'none' ?
    nav.classList.add('navScroll') : phoneMenu.classList.add('navScroll')

  }
  window.addEventListener('scroll', event => {

    const offset = window.pageYOffset
    if(window.pageYOffset > 800) {
      // scrolling down
      navIcon.style.display === 'none' ?
      nav.classList.add('navScroll') : phoneMenu.classList.add('navScroll')

    }if(offset < checker){
      // scrolling up
      navIcon.style.display === 'none' ?
      nav.classList.remove('navScroll') : phoneMenu.classList.remove('navScroll')
    }
    // console.log(window.pageYOffset)
checker = window.pageYOffset
  })

// responsive navigation snippet
function timeOfDay () {
  if(new Date().getHours() <= 11) {
    // day mode (Morning)
    document.getElementById('theme').style.backgroundColor = 'white'
  }else if (new Date().getHours() >= 12 && new Date().getHours() <= 17){
    // Afternoon (day mode)
  }else {
    // night mode
  }
}

timeOfDay()
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
