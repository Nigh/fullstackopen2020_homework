import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ name, handler }) => (
	<button onClick={handler}>{name}</button>
)

const App = (props) => {
	const [selected, setSelected] = useState(0)
	const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))
	const [mostVotes, setMostVotes] = useState(0)
	return (
		<div>
			<h1>Anecdote of the day</h1>
			{props.anecdotes[selected]}
			<p>Has {votes[selected]} vote(s)</p>
			<Button name='vote' handler={
				() => {
					let newVotes = [...votes]
					newVotes[selected] += 1
					if (newVotes[selected] > newVotes[mostVotes]) {
						setMostVotes(selected)
					}
					setVotes(newVotes)
				}
			} />
			<br />
			<Button name='Random' handler={() => setSelected(Math.floor(Math.random() * props.anecdotes.length))} />
			<h1>Anecdote with most votes</h1>
			{props.anecdotes[mostVotes]}
			<p>Has {votes[mostVotes]} vote(s)</p>
		</div>
	)
}

const anecdotes = [
	'If it hurts, do it more often',
	'Adding manpower to a late software project makes it later!',
	'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
	'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
	'Premature optimization is the root of all evil.',
	'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
	<App anecdotes={anecdotes} />,
	document.getElementById('root')
)
