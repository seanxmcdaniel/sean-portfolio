import React from 'react';
import mainPhoto from '../../assets/cover/mainPhoto.jpg';

function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={ mainPhoto } className='my-2' style= {{ width: "100%" }} alt='main photo' /> 
    </section>
  );
}

export default About;