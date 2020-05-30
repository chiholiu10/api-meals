import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getRandomMeal } from '../actions/index';

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
            <button onClick={getRandomMeals}>Get Random</button>
        </div>
    )
}

export default RandomMeals;