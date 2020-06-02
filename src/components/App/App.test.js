import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppComponent } from "../App/App";
import { Provider } from "react-redux";
import { store } from "../../Store";
import { screen } from "@testing-library/dom";
import { RandomMeals } from '../RandomMeals/RandomMeals';

test("It should check components exist", () => {
    render(
        <Provider store={store}>
          <AppComponent/>
        </Provider>
    );

    const component = screen.getAllByTestId("app-component-test");
    console.log(component);
    expect(component.contains(<RandomMeals/>)).toBe(true);
});