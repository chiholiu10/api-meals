import React from 'react';
import { render } from '@testing-library/react';
import AppComponent from './App';
import { Provider } from 'react-redux';
import { store } from './Store';
import { screen } from "@testing-library/dom";

test('App not crashing', () => {
  render(<Provider store={store}><AppComponent /></Provider>);
  const element = screen.getAllByTestId('app-component');
  expect(element).toHaveLength(1)
});