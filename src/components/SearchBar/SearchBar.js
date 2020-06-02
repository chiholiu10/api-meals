import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { generateSearchButtons } from "../../actions/index";
import styled from "styled-components";

const Input = styled.input`
    border: 1px solid black;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 16px;
    text-indent: 10px;
    text-transform: capitalize;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const SearchBar = () => {
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
            < Input className = "search-input-field"
            aria-label = "search-bar"
            type = "text"
            onChange = {
                (e) => getSearchValue(e)
            }
            placeholder = "Search Meal" />
        </div>
    )
}
