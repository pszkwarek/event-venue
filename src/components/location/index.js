import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.784527359583!2d-123.12060779999997!3d49.28048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717fcc12880d%3A0x83008dc52b2da82c!2sCommodore+Ballroom!5e0!3m2!1sen!2sca!4v1549266453593" 
        width="100%" 
        height="500px" 
        frameBorder="0" 
        style="border:0" 
        allowFullScreen>
      </iframe>

      <div className="location_tag">
      <div>Location</div>
      </div>
    </div>
  );
};

export default Location;

