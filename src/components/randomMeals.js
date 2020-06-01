import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getRandomMeal } from '../actions/index';
import styled, { css } from 'styled-components';

const Button = styled.button `
    width: 100%;
    height: 50px;
`

export const RandomMeals = () => {
    const dispatch = useDispatch();

    const getRandomMeals = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => {
            dispatch(getRandomMeal(res.data.meals));
        }).catch((err) => {
            console.log('error');
        })
    }
    return (
        <div>
            <Button className="button-background-color button-default" aria-label="random-meals-button" onClick={getRandomMeals}>Get Random</Button>
        </div>
    )
}

export default RandomMeals;