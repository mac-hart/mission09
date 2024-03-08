import React from 'react';
import './App.css';
import data from './CollegeBasketballTeams.json';
import Heading from './Heading';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import _TeamCard from './TeamCard';
import TeamList from './TeamList';

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList teams={data.teams} />
    </div>
  );
}

export default App;
