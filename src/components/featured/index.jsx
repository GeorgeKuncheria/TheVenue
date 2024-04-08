import React from 'react'
import Carrousel  from './Carrousel.jsx';
import TimeUntil from './TimeUntil.jsx';

import { Fade } from "react-awesome-reveal";

const Featured = () => {
  return (
    <div  className='featured_container'>
        <Carrousel/>
        

        <Fade delay={500} >
          <div className='artist_name'>
            <div className='font_righteous wrapper' style={{color: 'black'}}>
                DAVID BOWIE
            </div>
          </div>
        </Fade>

        <TimeUntil/>
    </div>
  )
}

export default Featured;