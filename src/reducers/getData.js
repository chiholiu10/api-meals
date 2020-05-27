import { types } from '../actions/index';

const initialState = {
    randomMeals: [],
};

export const getMealsData = (state = initialState, action) => {
    switch (action.type) {
        case "RANDOM_MEALS":
            console.log('click')
            return {
                ...state,
                randomMeals: action.getMeals
            };
        default:
            return state;
    }
}

export default getMealsData;
