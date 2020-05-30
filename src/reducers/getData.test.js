import { types } from '../actions/index';
import getData from './getData';

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(getData(undefined, {})).toEqual(
          {
            randomMeals: [],
            allSearchButtons: [],
            toggleResults: false
          }
        )
    })
})