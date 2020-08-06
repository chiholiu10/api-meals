import React from "react";
import { mount } from 'enzyme';
import { SearchBar } from "./SearchBar";
import { Provider } from "react-redux";
import { store } from "../../Store";

test("It should check if input value is same as output", () => {
	const onSearchMock = jest.fn(() => true);
	const event = 'search-bar-test';
	const wrap = mount(<Provider store={store}><SearchBar onChange={onSearchMock}/></Provider>);
	wrap.find('input').simulate('change', event);
	expect(onSearchMock()).toBe(true);
});
