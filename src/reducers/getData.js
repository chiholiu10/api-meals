import { types } from '../actions/index';

const initialState = {
    randomMeals: [],
    allSearchButtons: [],
    toggleResults: false
};

export const getMealsData = (state = initialState, action) => {
    switch (action.type) {
        case "RANDOM_MEALS":
            return {
                ...state,
                toggleResults: false,
                randomMeals: action.getMeals,
            }
        case "SEARCH_MEALS": 
            const searchButtons = action.searchButtons == null ? [] : action.searchButtons;
            return {
                ...state,
                allSearchButtons: searchButtons
            }
        case "SHOW_INGREDIENT": 
            return {
                ...state,
                toggleResults: true,
                currentIngredient: action.foldRecipe,
              
            }
        default:
            return state;
    }
}

export default getMealsData;
