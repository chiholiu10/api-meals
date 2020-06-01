import React from "react";
import { RandomMeals } from "./RandomMeals";
import ListRandomMeals from "./ListRandomMeals";
import { SearchBar } from "./SearchBar";
import SearchResult from "./SearchResult";

export const AppComponent = () => (
  <div className="app-container">
    <div className="app-mobile app-desktop-left">
      <RandomMeals />
      <SearchBar />
      <SearchResult />
    </div>
    <div className="app-mobile app-desktop-right">
      <ListRandomMeals />
    </div>
  </div>
);
