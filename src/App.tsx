import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './Components/Applications/Application';
import { Skills } from './Components/skills/Skills';
import Counter from './Components/counter/Counter';


function App() {
  const skillsData = ["HTML", "CSS", "JavaScript"];
  return (
   <>
{/* 
    <Skills skills={skillsData} /> */}
    <Counter/>
  
   </>
  );
}

export default App;
