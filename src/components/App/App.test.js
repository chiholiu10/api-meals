import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { AppComponent } from "../App/App";
import { Provider } from "react-redux";
import { store } from "../../Store";
import { screen } from "@testing-library/dom";

test("It should check components exist", () => {
	render(
		<Provider store={store}>
			<AppComponent/>
		</Provider>
	);

	expect(screen.queryByTestId("app-component-test")).toBeTruthy();
});