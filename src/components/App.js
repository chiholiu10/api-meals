import React from 'react'
import { RandomMeals } from './RandomMeals/RandomMeals';
import ListRandomMeals from './ListRandomMeals/ListRandomMeals';
import { SearchBar } from './SearchBar/SearchBar';
import SearchResult from './SearchResult/SearchResult';

export const AppComponent = () => (
  <div className="app-container">
    <div className="app-mobile app-desktop-left">
      <RandomMeals/>
      <SearchBar/>
      <SearchResult/>
    </div>
    <div className="app-mobile app-desktop-right">
      <ListRandomMeals/>
    </div>
  </div>
)
