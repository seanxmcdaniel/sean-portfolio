import React, {useEffect} from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers'

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
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
            <span onClick={() => {setContactSelected(false); setCurrentCategory(false)}}>
              About Me
            </span>
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
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false);
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