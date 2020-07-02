import React from 'react'
import ReactDOM from 'react-dom'

const Header = (p) => (
	<h1>{p.course}</h1>
)

const Part = (p) => (
	<p>{p.name}:{p.num}</p>
)

const Content = (p) => (
	<div>
		<Part name={p.p1.name} num={p.p1.exercises} />
		<Part name={p.p2.name} num={p.p2.exercises} />
		<Part name={p.p3.name} num={p.p3.exercises} />
	</div>
)

const Total = (p) => (
	<p>Number of exercises {p.total}</p>
)

const App = () => {
	const course = 'Half Stack application development'
	const part1 = {
		name: 'Fundamentals of React',
		exercises: 10
	}
	const part2 = {
		name: 'Using props to pass data',
		exercises: 7
	}
	const part3 = {
		name: 'State of a component',
		exercises: 14
	}

	return (
		<>
			<Header course={course} />
			<Content p1={part1} p2={part2} p3={part3} />
			<Total total={part1.exercises + part2.exercises + part3.exercises} />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
