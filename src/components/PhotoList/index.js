import React, { useState } from 'react';

const PhotoList = ({ category }) => {
  const [photos] = useState([
    {
      name: 'Budget Tracker',
      category: 'full-stack',
      description: 'A budget tracker application that allows for offline access and functionality.',
      tech: 'JavaScript, Node.js, Express.js, MongoDB, Mongoose',
      link: 'https://github.com/seanxmcdaniel/budget-tracker'
    },
    {
      name: 'Coding Quiz',
      category: 'front-end',
      description: 'A front-end coding quiz game built with HTML, CSS, and JavaScript. ',
      tech: 'HTML, CSS, JavaScript',
      link: 'https://seanxmcdaniel.github.io/coding-quiz/'
    },
    {
      name: 'Game Time MLB',
      category: 'front-end',
      description: 'A front-end application that uses web APIs and local storage to show you stats and schedules for your favorite MLB teams.',
      tech: 'HTML, CSS, JavaScript',
      link: 'https://seanxmcdaniel.github.io/game-time-mlb/'
    },
    {
      name: 'Happening Place',
      category: 'full-stack',
      description: 'A full-stack web application that allows a user to sign up, log in, and post upcoming events to an event blog.',
      tech: 'HTML, CSS, JavaScript, MySQL, Express.js, Node.js, Handlebars',
      link: 'https://salty-lowlands-78543.herokuapp.com/'
    },
    {
      name: 'Note Taker',
      category: 'full-stack',
      description: 'A full-stack application that allows a user to post, update, and delete notes.',
      tech: 'HTML, CSS, JavaScript, Node.js, Express.js',
      link: 'https://github.com/seanxmcdaniel/Note-Taker'
    },
    {
      name: 'Workday App',
      category: 'front-end',
      description: 'A front-end application that allows an employee to keep up with their work schedule.',
      tech: 'HTML, CSS, JavaScript, JQuery, Bootstrap',
      link: 'https://seanxmcdaniel.github.io/workday-app/'
    }

  ])

  const currentPhotos = photos.filter(photo => photo.category === category);

  return (
      <div className="flex-row proj-image">
        {currentPhotos.map((image, i) => (
          <div className='ol-container'>
            <img
              src={require(`../../assets/projects/${category}/${i}.png`)}
              alt={image.name}
              className="img-thumbnail"
              key={image.name}
            />
            <a href={image.link} target="blank">
              <div className='overlay'>
                <div className='ol-text'>
                  <h1>{image.name}</h1>
                  <p>{image.description}</p>
                  <p>{image.tech}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
  );
};

export default PhotoList;