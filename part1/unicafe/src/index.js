import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ name, handler }) => (
	<button onClick={handler}>{name}</button>
)

const Statistics = ({ name, number }) => (
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
			<Statistics name='good' number={good} />
			<Statistics name='neutral' number={neutral} />
			<Statistics name='bad' number={bad} />
			<Statistics name='All' number={good + neutral + bad} />
			<Statistics name='Average' number={(good + bad) / (good + neutral + bad)} />
			<Statistics name='Positive' number={good / (good + neutral + bad) * 100 + '%'} />
		</div>
	)
}

ReactDOM.render(<App />,
	document.getElementById('root')
)
