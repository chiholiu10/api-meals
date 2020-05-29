import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { generateSearchButtons } from '../actions/index';
import { connect } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        fetchSearchResults()
    })
    
    const getSearchValue = (e) => {
        const searchResult = e.target.value.toLowerCase();
        fetchSearchResults(searchResult);
    }

    const fetchSearchResults = (query) => {
        if(query == null) {
            query = "";
        }
        const searchUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;

        axios.get(searchUrl)
        .then((res) => {
            dispatch(generateSearchButtons(res.data.meals))
        }).catch((err) => {
            console.log(err);
        })
    }
    
    return (
        <div>
            SearchBar
            <input type="text" onChange={(e) => getSearchValue(e)}/>
        </div>
    )
}

export default connect()(SearchBar);