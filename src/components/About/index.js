import React from 'react';
import mainPhoto from '../../assets/cover/mainPhoto.jpg';

function About() {
  
  return (
    <section className="my-5" >
      <h1 id="about">Who am I?</h1>
      <img src={ mainPhoto } className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          
      </p>
      </div>
    </section>
  )
}


export default About;