import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';


function App() {

  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false)

  const [categories] = useState([
    {
      name: 'front-end',
      description: 'Here are some of the front-end applications I developed throughout my coding bootcamp. To visit the deployed application for any of these projects, click anywhere on the photo. To view the GitHub repositories, click "GitHub Repository".'
    },
    {
      name: 'back-end',
      description: 'Here are some of the front-end applications I developed throughout my coding bootcamp. To view the GitHub repositories, click "GitHub Repository".'
    },
    {
      name: 'full-stack',
      description: 'Here are some of the full-stack applications I developed throughout my coding bootcamp. To visit the deployed application for any of these projects, click anywhere on the photo. To view the GitHub repositories, click "GitHub Repository".'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>

        { contactSelected ? (
          <>
          <ContactForm></ContactForm>
          </>
        ) : currentCategory ? (
          <>
          <Projects currentCategory = {currentCategory}></Projects>
          </>
        ) : resumeSelected ? (
          <>
          <Resume></Resume>
          </>
        ) : (
          <>
          <About></About>
          </>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
