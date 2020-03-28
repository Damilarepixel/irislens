import React from 'react';
import './App.css';
import TopSectionContainer from './Components/TopSection/TopSectionContainer'
import MiddleSectionContainer from './Components/MiddleSection/MiddleSectionContainer'
import BaseSection from './Components/BaseSection/BaseSection'


function timeOfDay () {
  if(new Date().getHours() <= 11) {
    // day mode (Morning)
    return 'morning'
  }else if (new Date().getHours() >= 12 && new Date().getHours() <= 17){
    // Afternoon (day mode)
    return 'Afternoon'
  }else {
    // night mode
    return 'night'
  }
}



function App() {
  return (
    <div>
    <TopSectionContainer/>
    <MiddleSectionContainer/>
    <BaseSection />
  </div>
  );
}

export {App, timeOfDay};
