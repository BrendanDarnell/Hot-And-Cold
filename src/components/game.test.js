import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game'


describe('<Game/>', () => {

	it('Should render without crashing', () => {
		shallow(<Game/>);
	});

	it('Should change state when guesses are made', () => {
		const wrapper = mount(<Game/>);
		const instance = wrapper.instance();
		const initState = {
			prevGuess: 75,
			currGuess: 55,
			answer: 45,
			guessedCorrect: false
		}
		instance.setState(initState);
		
		wrapper.find('input#guess-input').simulate('keypress', {key: 'Enter', target: {value: 40}});
		console.log(wrapper.state('currGuess'));
		expect(wrapper.state('currGuess')).toEqual(40);
		expect(wrapper.state('prevGuess')).toEqual(55);
		expect(wrapper.state('guessedCorrect')).toEqual(false);
		expect(wrapper.state('answer')).toEqual(45);

		wrapper.find('input#guess-input').simulate('keypress', {key: 'Enter', target: {value: 45}});
		console.log(wrapper.state('currGuess'));
		expect(wrapper.state('currGuess')).toEqual(45);
		expect(wrapper.state('prevGuess')).toEqual(40);
		expect(wrapper.state('guessedCorrect')).toEqual(true);
		expect(wrapper.state('answer')).toEqual(45);
	})

});
