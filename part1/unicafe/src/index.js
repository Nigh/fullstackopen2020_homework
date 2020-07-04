import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ name, handler }) => (
	<button onClick={handler}>{name}</button>
)

const Statistic = ({ name, value }) => (
	<li key={name}>{name}:{value}</li>
)

const Statistics = ({ good, neutral, bad }) => {
	if (good + neutral + bad <= 0) {
		return (
			<div>No feedback given</div>
		)
	}
	return (<div>
		<Statistic name='good' value={good} />
		<Statistic name='neutral' value={neutral} />
		<Statistic name='bad' value={bad} />
		<Statistic name='All' value={good + neutral + bad} />
		<Statistic name='Average' value={(good + bad) / (good + neutral + bad)} />
		<Statistic name='Positive' value={good / (good + neutral + bad) * 100 + '%'} />
	</div>)
}

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
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	)
}

ReactDOM.render(<App />,
	document.getElementById('root')
)
