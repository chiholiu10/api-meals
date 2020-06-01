import React from "react";
import { render } from "@testing-library/react";
import SearchResult from "./SearchResult";
import { Provider } from "react-redux";
import { store } from "./../Store";

const id = "search-result-buttons";

const setup = () => {
  const utils = render(
    <Provider store={store}>
      <SearchResult />
    </Provider>
  );
  const buttons = utils.getByTestId(id);
  return {
    buttons,
    ...utils,
  };
};

test("It should check whether the element exist", () => {
  const { buttons } = setup();
  expect(buttons.getAttribute("data-testid")).toBe(id);
});
