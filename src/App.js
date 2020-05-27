import React from 'react';
import RandomMeals from './components/randomMeals';
import ListRandomMeals from './components/listRandomMeals';
import './App.scss';

function App() {
  return (
    <div className="App">
      <RandomMeals/>
      <ListRandomMeals/>
    </div>
  );
}

export default App;
