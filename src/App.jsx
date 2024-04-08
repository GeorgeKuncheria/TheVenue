import React from 'react'
import './resources/styles.css';

import Header from './components/header_footer/Header.jsx';
import Footer from './components/header_footer/Footer.jsx';
import Featured from './components/featured/index.jsx';
import VenueInfo from './components/venue_info/index.jsx';
import Highlights from './components/highlights/index.jsx';
import Pricing from './components/pricing/index.jsx';
import Location from './components/location/index.jsx';

import {Element} from 'react-scroll';



const App = () => {
  return (
    <div className="App">
        <>
          <Header/>
        </>

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venueInfo">
          <VenueInfo/>
        </Element>

        <Element name="highlights">
          <Highlights/>
        </Element>

        <Element name="pricing">
          <Pricing/>
        </Element>

        <Element name="location">
          <Location/>
        </Element>
        
        <>
          <Footer/>
        </>

    </div>
  )
}


export default App;