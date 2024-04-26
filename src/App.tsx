import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './Components/Applications/Application';
import { Skills } from './Components/skills/Skills';


function App() {
  const skillsData = ["HTML", "CSS", "JavaScript"];
  return (
   <>

    <Skills skills={skillsData} />
  
   </>
  );
}

export default App;
