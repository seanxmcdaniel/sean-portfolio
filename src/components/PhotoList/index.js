import React, { useState } from 'react';

const PhotoList = ({ category }) => {

    const [photos] = useState([
        {
            name: 'Budget Tracker',
            category: 'fullstack',
            description: 'A budget tracker application that allows for offline access and functionality.'
        },
        {
            name: 'Coding Quiz',
            category: 'frontend',
            description: 'A front-end coding quiz game built with HTML, CSS, and JavaScript. ',
            tech: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Game Time MLB',
            category: 'frontend',
            description: 'A front-end application that uses web APIs and local storage to show you stats and schedules for your favorite MLB teams.',
            tech: 'HTML, CSS, JavaScript'
        },
        {
            name: 'Happening Place',
            category: 'fullstack',
            description: 'A full-stack web application that allows a user to sign up, log in, and post upcoming events to an event blog.',
            tech: 'HTML, CSS, JavaScript, MySQL, Express.js, Node.js, Handlebars'
        },
        {
            name: 'Note Taker',
            catefory: 'fullstack',
            description: 'A full-stack applciation that allows a use to post, update, and delete notes.',
            tech: 'HTML, CSS, JavaScript, Node.js, Express.js'
        },
        {
            name: 'Workday App',
            category: 'frontend',
            description: 'A front-end application that allows an employee to keep up with their work schedule.',
            tech: 'HTML, CSS, JavaScript, JQuery, Bootstrap'
        }

    ])

    const currentPhotos = photos.filter((photo) => photo.category === category)

    return (
        <div>
            <div className='flex-row'>
                {photos.map((image, i) => (
                    <img
                    src={require(`../../assets/projects/${category}/${i}.jpg`).default}
                    alt={image.name}
                    className='img-thumbnail mx-1'
                    key={image.name}
                    />                    
                ))}
            </div>
        </div>
    )
};

export default PhotoList;