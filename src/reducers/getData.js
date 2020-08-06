import { types } from '../actions/index';

const initialState = {
	randomMeals: [],
	allSearchButtons: [],
	toggleResults: false
};

export const getMealsData = (state = initialState, action) => {
	switch (action.type) {
	case types.RANDOM_MEALS:
		return {
			...state,
			randomMeals: action.getMeals,
			toggleResults: false
		};
	case types.SEARCH_MEALS: 
		return {
			...state,
			allSearchButtons: action.searchButtons == null ? [] : action.searchButtons
		};
	case types.SHOW_INGREDIENT: 
		return {
			...state,
			toggleResults: true,
			currentIngredient: action.foldRecipe,
              
		};
	default:
		return state;
	}
};

export default getMealsData;
