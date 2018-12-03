import {hotColdReducer} from './index';

import {setGuess} from '../actions';

describe('hotColdReducer', () => {
	
	const currState = {
			currGuess: 40,
			prevGuess: 20,
			answer: 29,
			guessedCorrect: false
		}

	it('Should set state to initial state when nothing is passed in', () => {
		const state = hotColdReducer(undefined, {type: '_UNKNOWN'});
		console.log(state);
		expect(state.currGuess).toEqual(' ');
		expect(state.prevGuess).toEqual(' ');
		expect(state.answer).toBeGreaterThanOrEqual(1);
		expect(state.answer).toBeLessThanOrEqual(100);
		expect(state.guessedCorrect).toEqual(false);
	});

	it('Should return the current state if guess does not change', () => {
		const updateState = hotColdReducer(currState, setGuess(40));
		expect(updateState).toEqual(currState);
	});

	it('Should update prevGuess and currGuess on new guess', () => {
		const updateState = hotColdReducer(currState, setGuess(25));
		expect(updateState.currGuess).toEqual(25);
		expect(updateState.prevGuess).toEqual(40);
		expect(updateState.answer).toEqual(29);
		expect(updateState.guessedCorrect).toEqual(false);	
	});

	it('Should update guessedCorrect when the answer is guessed', () => {
		const updateState = hotColdReducer(currState, setGuess(29));		
		expect(updateState.currGuess).toEqual(29);
		expect(updateState.prevGuess).toEqual(40);
		expect(updateState.answer).toEqual(29);
		expect(updateState.guessedCorrect).toEqual(true);
	});
});