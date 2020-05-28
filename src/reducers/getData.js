import { types } from '../actions/index';

const initialState = {
    randomMeals: [],
    allSearchButtons: []
};

export const getMealsData = (state = initialState, action) => {
    switch (action.type) {
        case "RANDOM_MEALS":
            console.log('click')
            return {
                ...state,
                randomMeals: action.getMeals
            };
        case "SEARCH_MEALS": 
            return {
                ...state,
                allSearchButtons: action.searchButtons
            }
        case "SHOW_INGREDIENT": 
            return {
                ...state,
                currentIngredient: action.foldRecipe
            }
        default:
            return state;
    }
}

export default getMealsData;
