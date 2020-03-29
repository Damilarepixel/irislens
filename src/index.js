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
serviceWorker.register();
