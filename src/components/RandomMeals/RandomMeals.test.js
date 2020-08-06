import React from "react";
import { mount } from 'enzyme';
import { RandomMeals } from "./RandomMeals";
import { Provider } from "react-redux";
import { store } from "../../Store";

test("It should check if input value is same as output", () => {
	const mockFn = jest.fn(() => true);
	const wrap = mount(<Provider store={store}><RandomMeals/></Provider>);

	wrap.find('button').simulate('click');
	expect(mockFn()).toBe(true);
});