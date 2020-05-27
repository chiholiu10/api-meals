import { types } from '../actions/index';

const initialState = {
    randomMeals: [],
};

export const getMealsData = (state = initialState, action) => {
    switch (action.type) {
        case "RANDOM_MEALS_DATA":
            return {
                ...state
            };
        default:
            return state;
    }
}

export default getMealsData;
