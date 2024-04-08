import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.
        6175411575823!2d-73.98823932397248!3d40.748440471388065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
        1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712556067321!5m2!1sen!2sus" 
        width="100%" 
        height="500px" 
        frameBorder="0"
        title='ggmaps'
        allowFullScreen
        >


        </iframe>

        <div className="location_tag">
                <div>
                    Location
                </div>
            </div>

    </div>
  )
}

export default Location