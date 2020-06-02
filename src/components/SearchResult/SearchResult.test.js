
import React from 'react'
import { render } from '@testing-library/react';
import { SearchResult } from './SearchResult';
import { Provider } from 'react-redux';
import { store } from './../Store';
import { screen } from "@testing-library/dom";
import { fixedApi } from "../mock/mockAPI";
import { emptyApi } from '../mock/emptyMockApi';

test("It should check whether the button(s) exist", () => {
    render(
        <Provider store={store}>
            <SearchResult ingredientButtons={fixedApi}/>
        </Provider>
    )
    const resultBtn = screen.getAllByTestId("search-result-buttons");
    expect(resultBtn).toHaveLength(1);
});

test("It should check if there is no buttons", () => {
    render(
        <Provider store={store}>
            <SearchResult ingredientButtons={emptyApi}/>
        </Provider>
    )
    const resultBtnEmpty = screen.getAllByTestId("search-result-buttons-empty");
    expect(resultBtnEmpty).toHaveLength(1);
});