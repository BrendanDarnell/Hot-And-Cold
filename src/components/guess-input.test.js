import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessInput from './guess-input'


describe('<GuessInput/>', () => {

	it('Should renders without crashing', () => {
		shallow(<GuessInput/>);
	});

	it('Should render with the correct props', () => {
		const callback = jest.fn();
		const wrapper = shallow(<GuessInput id="guess-input" label="Guess:" name="guess" min={1} max={100} onKeyPress={callback}/>);
		console.log(wrapper.props())
		expect(wrapper.contains(<label htmlFor="guess-input">Guess:</label>)).toEqual(true);
		expect(wrapper.contains(<input id="guess-input" type="number" name="guess" min={1} max={100} onKeyPress={callback}/>)).toEqual(true);
	});

	it('Should run callback function on keypress', () => {
		const callback = jest.fn();
		const wrapper = shallow(<GuessInput onKeyPress={callback}/>);
		wrapper.find('input').simulate('keypress');
		expect(callback).toHaveBeenCalled();
			
	})
});