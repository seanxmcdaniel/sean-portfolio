import React from 'react';

function Nav() {

    const categories = [
        {
            name: 'Projects',
            description: 'List of front end, back end, and full stack projects completed throughout my MSU coding bootcamp.'
        }
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return (
        <header className='flex-row'>
            <h2>
                <a href='/'>
                    Sean McDaniel
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about">
                            About Me
                        </a>
                    </li>
                    <li>
                        <span>
                            Contact
                        </span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className='mx-1'
                            key={category.name}
                        >
                            <span onClick={() => categorySelected(category.name)} >
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;