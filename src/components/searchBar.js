import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { generateSearchButtons } from '../actions/index';
import { connect } from 'react-redux';

const SearchBar = () => {
    const dispatch = useDispatch();

    const getSearchValue = (e) => {
        const searchResult = e.target.value;
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchResult}`)
        .then((res) => {
            dispatch(generateSearchButtons(res.data.meals));
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