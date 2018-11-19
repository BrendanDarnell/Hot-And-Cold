import React from 'react';

// import cold from './cold.jpg';



export default function HotColdImage(props) {
	return (
		<div>
			<h2>{props.title}</h2>
			<img src={props.src} alt={props.alt}/>
		</div>
	);
}