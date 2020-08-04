import React from "react";
import { shallow } from 'enzyme';
import { SearchBar } from "./SearchBar";
import { Provider } from "react-redux";
import { store } from "../../Store";


test("It should check if input value is same as output", () => {
	const wrap = shallow(<Provider store={store}><SearchBar/></Provider>);
	wrap.find('input').simulate('change', {
		target: { value: 'search-bar-test' }
	})
	expect(input.value).toBe('search-bar-test');
});