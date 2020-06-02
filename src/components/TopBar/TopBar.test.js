
import React from "react";
import { render } from "@testing-library/react";
import { TopBar } from "./TopBar";
import { Provider } from "react-redux";
import { store } from "../../Store";
import { screen } from "@testing-library/dom";
import "@testing-library/jest-dom/extend-expect";

test("It should check if content matches", () => {
    render(
        <Provider store={store}>
            <TopBar/>
        </Provider>
    )
    const checkContent = screen.getByTestId("title-content");
    expect(checkContent).toHaveTextContent("Dashboard Menu");
});