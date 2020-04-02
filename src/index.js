import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import * as serviceWorker from './serviceWorker';

var checker = 0;


window.onload = ()=> {

  const phoneMenu = document.getElementById('phoneMenu')
  const phoneLogo = document.getElementById('phoneLogo')
  const navIcon = document.getElementById('navIcon')

  const nav = document.getElementById('nav')
  const logo = document.getElementById('logo')
  const closeNav = document.getElementById('closeNav')
  
  phoneMenu.style.display = 'none';phoneMenu.style.padding = '0px'
  phoneLogo.style.display = 'none'
  navIcon.style.display = 'none'
  closeNav.style.display = 'none'

  /*call the function first, because we have no idea what screen size your page will be
  loaded with on startup
  */
 function respondToScreenSize() {

  if(window.innerWidth <= 800) {
    // this code runs anytime we're in phone sized screen

/*Remove the initial desktop type class of the element as we never want to have both
the phoneSize Navigation style and the Desktop style navigation style
at the same time*/

  nav.classList.remove('navLinks')
  nav.classList.add('sideMenu')
  /*show the menu icon and sideMenu-cancel button on phone sizes*/
  phoneMenu.style.display = 'block';phoneMenu.style.padding = '20px'
  phoneLogo.style.display = 'block'
  navIcon.style.display = 'block'
  closeNav.style.display = 'block'  
  logo.style.display = 'none'

  console.log('phone size')
}else{
  /* Remove any phone like styles 
  and add desktop type styles, so eveyone is happy :)   */
  nav.classList.remove('sideMenu')
  nav.classList.add('navLinks');
  /*Hide all the phone menu icon and sideMenu-cancel buttons for phone sizes */
  phoneMenu.style.display = 'none';phoneMenu.style.padding = '0px'
  phoneLogo.style.display = 'none'
  navIcon.style.display = "none";
  logo.style.display = 'block'
  closeNav.style.display = "none";

  console.log('desktop size')
  }

}
// responsive navigation snippet

  respondToScreenSize()

window.addEventListener('resize', ()=> {
  respondToScreenSize()
})

  if(window.pageYOffset > 800) {
    /* if we ever scroll too far down the page, make the menu accessible */
    /*Are we currently in phone mode ? if so add style to phone style if not
    then add style to desktop style*/
    navIcon.style.display === 'none' ?
    nav.classList.add('navScroll') : phoneMenu.classList.add('navScroll')

  }

  window.addEventListener('scroll', event => {

    const offset = window.pageYOffset
    if(window.pageYOffset > 800) {

          /* if we ever scroll too far down the page, make the menu accessible */
    /*Are we currently in phone mode ? if so add style to phone style if not
    then add style to desktop style*/

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

  // this code takes good care of the themes :)
function timeOfDay () {
  if(new Date().getHours() <= 11) {
    // day mode (Morning)
    document.getElementById('theme').style.backgroundColor = 'white'
  }else if (new Date().getHours() >= 12 && new Date().getHours() <= 17){
    // Afternoon ( still day mode)
  }else {
    // night mode, hahaha :) 
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
serviceWorker.unregister();
