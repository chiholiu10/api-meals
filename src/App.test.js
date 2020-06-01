import React from 'react';
import { render } from '@testing-library/react';
import AppComponent from './App';
import { Provider } from 'react-redux';
import { store } from './Store';

test('App not crashing', () => {
  const appComponent = render(<Provider store={store}><AppComponent /></Provider>);
  const element = appComponent.getByTestId('test-app-component');
});