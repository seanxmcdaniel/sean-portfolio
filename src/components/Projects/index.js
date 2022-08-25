import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from ''

function Projects(props) {

    const currentCategory = {
        name: "Projects",
        description: "List of front end, back end, and full stack projects completed throughout my MSU coding bootcamp."
    }

    return(
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div>
                <img 
                src={photo}
                />
            </div>
        </section>
    );
}

export default Projects;