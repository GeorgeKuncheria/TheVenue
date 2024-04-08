import React,{useEffect, useState} from 'react'
import {Fade, Slide} from 'react-awesome-reveal';


import MyButton from './../utils/MyButton.jsx';

const Discount = () => {
  const end=30;
  const [start,setStart]=useState(0);

  const percentage =() => {
    if (start < end){
      setStart((prevStart) => prevStart + 1);  
      }
  }

  useEffect(() => {
    if (start > 0 && start < end){
      setTimeout(()=>{
        setStart((prevStart) => prevStart +1)
      },30)
    }
    
  },[start]);

  return (
    <div className='center_wrapper'>
      <div className='discount_wrapper'>

        <Fade onVisibilityChange={(inView)=>{
          if (inView){
            percentage();

          }
        }}>
          <div className='discount_percentage'>
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>

        <Slide right={true} triggerOnce>
          <div className='discount_description'>
            
            <h3>Purchase ticket before the 20th of April</h3>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam felis in ligula sodales, 
            vitae gravida mauris dignissim. Ut eget fermentum velit. Proin quis mi elementum, congue ante in, ultrices
             massa. Sed ex metus, sodales ac ligula sed, ultrices scelerisque erat. Curabitur imperdiet sit amet dui vel
              sodales. Vestibulum commodo aliquet ligula, vel dictum justo rutrum et. Curabitur nec tempus mauris.

              Vestibulum eget diam malesuada, luctus nisi sit amet, commodo nisi. Maecenas eu 
              metus libero. Proin sem quam, placerat sit amet diam eget, cursus facilisis arcu. 
              In hac habitasse platea dictumst. Aliquam euismod massa ornare, egestas odio efficitur, 
              elementum metus.</p>

              <MyButton
                text='Purchase Tickets'
                link="https://google.com"
                size='large'
                style={{
                  background:'#ffa800',
                  color:'#ffffff'
                    }}
                iconTicket={true}
              />
          </div>

        </Slide>
      </div>
    </div>
  )
}

export default Discount