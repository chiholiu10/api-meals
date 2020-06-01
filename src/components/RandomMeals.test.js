import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RandomMeals } from "./RandomMeals";
import { Provider } from "react-redux";
import { store } from "./../Store";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <RandomMeals />
    </Provider>
  );
  const input = utils.getByLabelText("random-meals-button");
  return {
    input,
    ...utils,
  };
};

test("It should check if the inputvalue is same as output", () => {
  const { input } = setup();
  fireEvent.change(input, { target: { value: "random-meals-button-test" } });
  expect(input.value).toBe("random-meals-button-test");
});
