import React from 'react'
import { RandomMeals } from './RandomMeals';
import {ListRandomMeals } from './ListRandomMeals';
import { SearchBar } from './SearchBar';
import SearchResult from './SearchResult';

export const AppComponent = () => (
  <div>
    <RandomMeals/>
    <SearchBar/>
    <SearchResult/>
    <ListRandomMeals/>
  </div>
)
