import React from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { getRandomMeal } from "../../actions/index";

export const RandomMeals = () => {
    const dispatch = useDispatch();

    const getRandomMeals = () => {
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((res) => {
            dispatch(getRandomMeal(res.data.meals));
        }).catch((err) => {
            console.log("error");
        })
    }
    return (
        <div>
            <div className="button-background-color button-default button-random" data-testid="random-meals-button-test" onClick={getRandomMeals}>Get Random</div>
        </div>
    )
}
