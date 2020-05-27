import React from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { getRandomMeal } from '../actions/index';
import { connect } from 'react-redux';

const RandomMeals = ({ allRandomMeals }) => {
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

const mapStateToProps = (state) => {
    return {
       allRandomMeals: state.getData.randomMeals
    }
}

export default connect(mapStateToProps, null)(RandomMeals);