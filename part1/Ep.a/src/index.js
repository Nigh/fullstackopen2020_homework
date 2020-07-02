import React from 'react'
import ReactDOM from 'react-dom'

const Header = (p) => (
	<h1>{p.course}</h1>
)

const Part = (p) => (
	<p>{p.name}:{p.num}</p>
)

const course = 'Half Stack application development'
const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Content = (p) => (
	<div>
		<Part name={part1} num={exercises1} />
		<Part name={part2} num={exercises2} />
		<Part name={part3} num={exercises3} />
	</div>
)

const Total = (p) => (
	<p>Number of exercises {p.total}</p>
)

const App = () => {
	return (
		<>
			<Header course={course} />
			<Content/>
			<Total total={exercises1 + exercises2 + exercises3} />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))