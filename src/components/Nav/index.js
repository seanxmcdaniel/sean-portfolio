import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  return (
    <header className="flex-row px-1">
      <h2 className='headername'>
        <a data-testid="link" href="/">
          Sean McDaniel
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About Me
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => setContactSelected(true)}>
              Contact
            </span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name
                }`}
              key={category.name}
            >
              <a href='#projects'>
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
  
  export default Nav;