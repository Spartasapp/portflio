import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills';
import MyWorks from './components/MyWorks/MyWorks';
import Freelance from './components/Freelance/Freelance';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';


const particlesOpt = {
  particles: {
    number: {
      value:130,
      density: {
        enable: false,
        value_area: 1000
      }
    }
  }
}
const App = () => {
  return (
    <div className="App">
      <Particles className='particles' 
      params={particlesOpt} />
      <div className='relative'>
      
      <Header />
      
      <AboutMe />
      <Skills />
      <MyWorks />
      {/* <Freelance /> */}
      
      <Contacts />
      <Footer />
     
    
      </div>
    </div>
  );
}

export default App;
