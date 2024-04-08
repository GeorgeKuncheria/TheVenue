import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slide_1_david_bowie from '../../resources/images/slide-1_david_bowie.jpg';  
import slide_2_david_bowie from '../../resources/images/slide-2_david_bowie.jpg';  
import slide_3_david_bowie from '../../resources/images/slide-3_david_bowie.jpg';  

const Carrousel = () => {

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500
      };
      
    
    
    return (
        <div className='carrousel_wrapper'
            style={{
            height: `${window.innerHeight}px`
        }}>

            <Slider {...settings}>
                <div>
                    <div className='carrousel_image'
                    style={{
                        background:`url(${slide_1_david_bowie})`,
                        height:`${window.innerHeight}px`}}>
                    </div>
                </div>

                <div>
                    <div className='carrousel_image'
                    style={{
                        background:`url(${slide_2_david_bowie})`,
                        height:`${window.innerHeight}px`}}>
                    </div>
                </div>

                <div>
                    <div className='carrousel_image'
                    style={{
                        background:`url(${slide_3_david_bowie})`,
                        height:`${window.innerHeight}px`}}>
                    </div>
                </div>


            </Slider>

        </div>
  )
}

export default Carrousel