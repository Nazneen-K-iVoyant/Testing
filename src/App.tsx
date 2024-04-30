import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './Components/Applications/Application';
import { Skills } from './Components/skills/Skills';
import Counter from './Components/counter/Counter';
import { AppProviders } from './providers/app-providers';
import { MuiMode } from './Components/mui/mui-mode';


function App() {
  const skillsData = ["HTML", "CSS", "JavaScript"];
  return (
   <>
{/* 
    <Skills skills={skillsData} /> */}
    {/* <Counter/> */}

    <AppProviders>
      <div className="App">
        <MuiMode/>
      </div>
    </AppProviders>
  
   </>
  );
}

export default App;
