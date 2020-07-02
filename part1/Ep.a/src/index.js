import React from 'react'
import ReactDOM from 'react-dom'

const Header = (p) => (
	<h1>{p.course.name}</h1>
)

const Part = (p) => (
	<p>{p.name}:{p.num}</p>
)

const Content = (p) => {
	const parts = p.parts.map(x =>
		<Part name={x.name} num={x.exercises} />
	)
	return (
		<div>
			{parts}
		</div>
	)
}

const Total = (p) => {
	let total = 0
	p.parts.forEach(part => {
		total += part.exercises
	});
	return (
		<p>Number of exercises {total}</p>
	)
}

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10
			},
			{
				name: 'Using props to pass data',
				exercises: 7
			},
			{
				name: 'State of a component',
				exercises: 14
			}
		]
	}

	return (
		<>
			<Header course={course} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
