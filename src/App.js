import React from 'react';
import RandomMeals from './components/randomMeals';
import ListRandomMeals from './components/listRandomMeals';
import SearchBar from './components/searchBar';
import SearchResult from './components/searchResult';
import './App.scss';

function App() {
  return (
    <div className="App">
      <RandomMeals/>
      <SearchBar/>
      <SearchResult/>
      <ListRandomMeals/>
    </div>
  );
}

export default App;
