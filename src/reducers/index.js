import * as actions from '../actions';

const answer = Math.floor(Math.random()*101+1);

const initialState = {
	prevGuess: ' ',
	currGuess: ' ',
	answer: answer,
	guessedCorrect: false,
}

export const hotColdReducer = (state = initialState, action) => {

	if (action.type === actions.SET_GUESS) {
		if (action.guess === state.currGuess) {
			return state;
		}

		else if (action.guess == state.answer) {
			return {
				prevGuess: state.currGuess,
				currGuess: action.guess,
				answer: state.answer,
				guessedCorrect: true
			}
		}
		

		else {
			return {
				prevGuess: state.currGuess,
				currGuess: action.guess,
				answer: state.answer,
				guessedCorrect: false
			}
		}
	}
	return state;	
}