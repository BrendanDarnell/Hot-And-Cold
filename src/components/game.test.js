import React from 'react';
import {shallow, mount} from 'enzyme';

import {Game} from './game';

// import {hotColdReducer} from '../reducers';
// import {setGuess} from '../actions';


describe('<Game/>', () => {

	it('Should render without crashing', () => {
		shallow(<Game/>);
	});

	it('Should dispatch setGuess when enter is pressed.', () => {
		const dispatch = jest.fn();
		const wrapper = mount(
			<Game currGuess={55} prevGuess={75} answer={45} guessedCorrect={false} dispatch={dispatch}/>
			);
		// const instance = wrapper.instance();
		// const initState = {
		// 	prevGuess: 75,
		// 	currGuess: 55,
		// 	answer: 45,
		// 	guessedCorrect: false
		// }
		// const state = hotColdReducer(initState,{type: '_UNKNOWN'});
		// console.log(JSON.stringify(wrapper));
		// wrapper.find('input#guess-input').simulate('keypress', {key: 'Enter', target: {value: 40}});
		// console.log(wrapper.prop('currGuess'));
		// expect(wrapper.prop('currGuess')).toEqual(40);
		// expect(wrapper.prop('prevGuess')).toEqual(55);
		// expect(wrapper.prop('guessedCorrect')).toEqual(false);
		// expect(wrapper.prop('answer')).toEqual(45);

		// wrapper.find('input#guess-input').simulate('keypress', {key: 'Enter', target: {value: 45}});
		// console.log(wrapper.prop('currGuess'));
		// expect(wrapper.prop('currGuess')).toEqual(45);
		// expect(wrapper.prop('prevGuess')).toEqual(40);
		// expect(wrapper.prop('guessedCorrect')).toEqual(true);
		// expect(wrapper.prop('answer')).toEqual(45);
		wrapper.find('input').simulate('keypress', {key: 'Enter', target: {value: 40}});
		expect(dispatch).toHaveBeenCalled();
	})

});
