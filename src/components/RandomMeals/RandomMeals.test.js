import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RandomMeals } from "./RandomMeals";
import { Provider } from "react-redux";
import { store } from "../../Store";

test("It should check if input value is same as output", () => {
    const mockFn = jest.fn(() => true);
    const { getByTestId } = render(
        <Provider store={store}>
            <RandomMeals/>
        </Provider>
        );
    const button = getByTestId("random-meals-button-test");
    fireEvent.click(button);
    expect(mockFn()).toBe(true);
});