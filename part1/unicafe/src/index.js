import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ name, handler }) => (
	<button onClick={handler}>{name}</button>
)

const Stat = ({ name, number }) => (
	<li key={name}>{name}:{number}</li>
)

const App = () => {
	// save clicks of each button to own state
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	const counter = ({ v, func }) => () => func(v + 1)

	return (
		<div>
			<h2>FEED BACK</h2>
			<Button name='good' handler={counter({ v: good, func: setGood })} />
			<Button name='neutral' handler={counter({ v: neutral, func: setNeutral })} />
			<Button name='bad' handler={counter({ v: bad, func: setBad })} />
			<h2>Statitics</h2>
			<Stat name='good' number={good} />
			<Stat name='neutral' number={neutral} />
			<Stat name='bad' number={bad} />
		</div>
	)
}

ReactDOM.render(<App />,
	document.getElementById('root')
)
