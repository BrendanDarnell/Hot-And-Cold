import React from 'react';

import GuessInput from './guess-input';
import HotColdImage from './hot-cold-image';

import cold from './cold.jpg';
import hot from './hot.jpg';


export default class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			prevGuess: ' ',
			currGuess: ' ',
			answer: Math.floor(Math.random()*101+1),
			guessedCorrect: false,
		}
	}

	setGuess(event) {
		console.log('keypress');
		if(event.key === 'Enter') {
			let guess = event.target.value;
			console.log(guess);
			this.setState({prevGuess: this.state.currGuess, currGuess: guess});
			if(guess==this.state.answer){
				this.setState({guessedCorrect: true})
			}
		}
	}



	render() {
		console.log(this.state);
		if(this.state.guessedCorrect) {
			console.log(this.state.currGuess==this.state.answer);
			return(
				<div>
					<h1>Hot or Cold?</h1>
					<h2>You win! {this.state.currGuess} is the number.</h2>
				</div>	
			);	
		}
		else if(this.state.prevGuess===' ') {
			return(
				<div>
					<h1>Hot or Cold?</h1>
					<p>Guess a number between 1 and 100 and press ENTER.  I'll tell you if you're hot or cold...</p>
					<GuessInput id="guess-input" label="Guess:" name="guess" min={1} max={100} onKeyPress={(e)=>{this.setGuess(e)}}/>
				</div>
			)			
		}
		else if(Math.abs(this.state.currGuess-this.state.answer)>Math.abs(this.state.prevGuess-this.state.answer)) {
			return(
				<div>
					<h1>Hot or Cold?</h1>
					<p>Guess a number between 1 and 100 and press ENTER.  I'll tell you if you're hot or cold...</p>
					<GuessInput id="guess-input" label="Guess:" name="guess" min={1} max={100} onKeyPress={(e)=>{this.setGuess(e)}}/>
					<HotColdImage src={cold} alt="cold" title="Getting Colder!"/>
				</div>
			);
		}
		else if(Math.abs(this.state.currGuess-this.state.answer)<Math.abs(this.state.prevGuess-this.state.answer)) {
			return(
				<div>
					<h1>Hot or Cold?</h1>
					<p>Guess a number between 1 and 100 and press ENTER.  I'll tell you if you're hot or cold...</p>
					<GuessInput id="guess-input" label="Guess:" name="guess" min={1} max={100} onKeyPress={(e)=>{this.setGuess(e)}}/>
					<HotColdImage src={hot} alt="hot" title="Getting Hotter!"/>
				</div>
			)
		}
		else {
			return(
				<p>Sorry, Error in Game</p>
					
			)
		}

	}
}