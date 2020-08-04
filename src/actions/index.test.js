import * as actions from '../actions/index';
import { types } from '../actions/index';
import { fixedApi } from '../mock/mockAPI';

describe('actions', () => {
	it('should create an action to get a getRandomMeal', () => {
		const getMeals = fixedApi;
		const expectedAction = {
			type: types.RANDOM_MEALS,
			getMeals
		};
		expect(actions.getRandomMeal(getMeals)).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('should create an action to output buttons', () => {
		const searchButtons = fixedApi;
		const expectedAction = {
			type: types.SEARCH_MEALS,
			searchButtons
		};
		expect(actions.generateSearchButtons(searchButtons)).toEqual(expectedAction);
	});
});

describe('actions', () => {
	it('should create an action that output ingredients', () => {
		const foldRecipe = fixedApi;
		const expectedAction = {
			type: types.SHOW_INGREDIENT,
			foldRecipe
		};
		expect(actions.openIngredient(foldRecipe)).toEqual(expectedAction);
	});
});