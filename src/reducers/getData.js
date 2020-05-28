import { types } from '../actions/index';

const initialState = {
    randomMeals: [],
    allSearchButtons: []
};

export const getMealsData = (state = initialState, action) => {
    switch (action.type) {
        case "RANDOM_MEALS":
            return {
                ...state,
                randomMeals: action.getMeals
            };
        case "SEARCH_MEALS": 
            const searchButtons = action.searchButtons == null ? [] : action.searchButtons;
            return {
                ...state,
                allSearchButtons: searchButtons
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
