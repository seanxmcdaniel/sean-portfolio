import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';


function App() {

  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: 'front-end',
      description: 'A list of front end, back end, and full stack projects completed throughout my MSU coding bootcamp.'
    },
    {
      name: 'back-end',
      description: 'A list of back-end projects created throughout my MSU coding bootcamp.'
    },
    {
      name: 'full-stack',
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
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Projects currentCategory={currentCategory}></Projects>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
