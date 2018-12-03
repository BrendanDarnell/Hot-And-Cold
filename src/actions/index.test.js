import {setGuess, SET_GUESS} from './index';

describe('setGuess', () => {
	it('Should return the action', () => {
		const guess = 5;
		const action = setGuess(guess);
		expect(action.type).toEqual(SET_GUESS);
		expect(action.guess).toEqual(5);
	})
});