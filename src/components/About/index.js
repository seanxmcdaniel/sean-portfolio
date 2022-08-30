import React from 'react';
import mainPhoto from '../../assets/cover/mainPhoto.jpg';

function About() {
  
  return (
    <section className="my-5 container">
      <h1 id="about">Who am I?</h1>
      <div className='flex-shrink about-content'>
      <div className='about-text'>
        <p>
            I am a hard-working and self-motivated full-stack web developer certified through Michigan State
            University. Throughout my bootcamp journey I gained experience in front-end, back-end, and
            full-stack web development and I acquired skills in HTML, CSS, and Bulma, JavaScript, React, Node.js, 
            MySQL, Express.js, MongoDB and more. I am eager to expand my knowledge and grow as a developer 
            through creating and maintaining exceptional interactive web applications. 
        </p>
      </div>
      <img src={ mainPhoto } className='mainPhoto' alt="cover" />
      </div>
    </section>
  )
}


export default About;