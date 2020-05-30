import React from 'react'
import { render, fireEvent } from '@testing-library/react';
import { SearchBar } from './SearchBar';
import { Provider } from 'react-redux';
import { store } from './Store';

const setup = () => {
    const utils = render(<Provider store={store}><SearchBar/></Provider>);
    const input = utils.getByLabelText('search-bar');
    return {
        input,
        ...utils
    }
}

test('It should keep a $ in front of the input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'search-bar-test' } })
    expect(input.value).toBe('search-bar-test')
})