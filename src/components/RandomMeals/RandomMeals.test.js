import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RandomMeals } from "./RandomMeals";
import { Provider } from "react-redux";
import { store } from "../../Store";

const setup = () => {
	const utils = render(<Provider store={store}><RandomMeals/></Provider>);
	const input = utils.getByLabelText("random-meals-button");
	return {
		input,
		...utils
	};
};

test("It should check if input value is same as output", () => {
	const { input, utils } = setup();
	fireEvent.click(utils, {value: "Get Random" });
	expect(input).toBe("random-meals-button-test");
});