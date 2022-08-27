import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';


function App() {

  const [categories] = useState([
    {
      name: 'Front-End Projects',
      description: 'A list of front end, back end, and full stack projects completed throughout my MSU coding bootcamp.'
    },
    {
      name: 'Back-End Projects',
      description: 'A list of back-end projects created throughout my MSU coding bootcamp.'
    },
    {
      name: 'Full Stack Projects',
      description: 'A list of full stack projects I created throughout my MSU coding bootcamp. '
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      >
      </Nav>
      <main>
        <Projects currentCategory={currentCategory}></Projects>
        <About></About>
      </main>
    </div>
  );
}

export default App;
