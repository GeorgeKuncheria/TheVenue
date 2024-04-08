import React from 'react'
import './resources/styles.css';

import Header from './components/header_footer/Header.jsx';
import Footer from './components/header_footer/Footer.jsx';
import Featured from './components/featured/index.jsx';
import VenueInfo from './components/venue_info/index.jsx';
import Highlights from './components/highlights/index.jsx';
import Pricing from './components/pricing/index.jsx';
import Location from './components/location/index.jsx';



const App = () => {
  return (
    <div className="App">
        <>
          <Header/>
        </>

        <>
          <Featured />
        </>

        <>
          <VenueInfo/>
        </>

        <>
          <Highlights/>
        </>

        <>
          <Pricing/>
        </>

        <>
          <Location/>
        </>
        
        <>
          <Footer/>
        </>

    </div>
  )
}


export default App;