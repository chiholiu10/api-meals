import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { generateSearchButtons } from '../actions/index';

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
            SearchBar
            <input aria-label="search-bar" type="text" onChange={(e) => getSearchValue(e)}/>
        </div>
    )
}

export const setup = () => {
    const utils = render(<SearchBar/>);
    const input = utils.getByLabelText('search-bar');
    return {
        input,
        ...utils
    }
}

test('It should keep a $ in front of the input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: '23' } })
    expect(input.value).toBe('$23')
})