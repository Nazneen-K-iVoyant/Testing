import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './Components/Applications/Application';
import { Skills } from './Components/skills/Skills';
import Counter from './Components/counter/Counter';
import { AppProviders } from './providers/app-providers';
import { MuiMode } from './Components/mui/mui-mode';
import { CounterTwo } from './Components/counter-two/counter-two';


function App() {
  const skillsData = ["HTML", "CSS", "JavaScript"];
  return (
   <>
{/* 
    <Skills skills={skillsData} /> */}
    {/* <Counter/> */}

    <AppProviders>
      <div className="App">
        {/* <MuiMode/> */}
        <CounterTwo count={0} />
      </div>
    </AppProviders>
  
   </>
  );
}

export default App;
