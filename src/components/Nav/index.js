import React, {useState} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav() {

    const [categories] = useState([
        {
            name: 'Projects',
            description: 'List of front end, back end, and full stack projects completed throughout my MSU coding bootcamp.'
        },
        {
            name: 'Back-End Projects',
            description: 'List of back-end projects created throughout my MSU coding bootcamp.'
        }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
      <header className="flex-row px-1">
        <h2>
            Sean McDaniel
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a
                href="#about"
              >
                About me
              </a>
            </li>
            <li>
              <span>Contact</span>
            </li>
            {categories.map((category) => (
              <li className={`mx-1 ${
                  currentCategory.name === category.name && 'navActive'
                  }`} key={category.name}>
                <span
                  onClick={() => {
                    setCurrentCategory(category)
                  }}
                >
                  {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Nav;