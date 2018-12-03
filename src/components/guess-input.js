import React from 'react';



export default function GuessInput(props) {
	return (
		<div>
		 	<label htmlFor={props.id}>{props.label}</label>
		 	<input id={props.id} type="number" name={props.name} min={props.min} max={props.max} onKeyPress={props.onKeyPress}/>
		</div>
	 );
}