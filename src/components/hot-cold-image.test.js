import React from 'react';
import {shallow, mount} from 'enzyme';

import HotColdImage from './hot-cold-image'


describe('<HotColdImage/>', () => {

	it('Renders without crashing', () => {
		shallow(<HotColdImage/>);
	});

	it('Renders with the correct props', () => {
		const props = {title: 'Hotter', src: 'hot', alt: 'hotImage' };
		
		const wrapper = shallow(<HotColdImage src={props.src} alt={props.alt} title={props.title}/>);
		console.log(wrapper.instance());
		
		expect(wrapper.contains(<h2>{props.title}</h2>)).toEqual(true);
		expect(wrapper.contains(<img src={props.src} alt={props.alt}/>)).toEqual(true);
		
	});

});