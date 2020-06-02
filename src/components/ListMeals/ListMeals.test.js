import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ListRandomMeals } from "../ListRandomMeals/ListRandomMeals";
import { fixedApi } from "../../mock/mockAPI";
import { emptyApi } from "../../mock/emptyMockApi";
import { Provider } from "react-redux";
import { store } from "../../Store";
import { screen } from "@testing-library/dom";

test("It should check if array is empty", () => {
    render(
        <Provider store={store}>
          <ListRandomMeals showResultMeal={emptyApi} />
        </Provider>
    );
    const ingredientList = screen.getAllByTestId('list-random-meals-empty');
    expect(ingredientList).toHaveLength(1);
});

test("It should check if array exists", () => {
    render(
        <Provider store={store}>
          <ListRandomMeals showResultMeal={fixedApi} />
        </Provider>
    );
    const ingredientList = screen.getAllByTestId('list-random-meals');
    expect(ingredientList).toHaveLength(1)
});
