import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
	const { name } = course
	return (
		<h1>{name}</h1>
	)
}

const Part = (p) => (
	<p>{p.name}:{p.num}</p>
)

const Content = ({ course }) => {
	console.log(course)
	const { parts } = course
	const cparts = parts.map(x =>
		<Part key={x.id} name={x.name} num={x.exercises} />
	)
	return (
		<>
			{cparts}
		</>
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

const Course = ({ course }) => {
	console.log(course)
	return (
		<>
			<Header course={course} />
			<Content course={course} />
		</>
	)
}

const App = () => {
	const course = {
		id: 1,
		name: 'Half Stack application development',
		parts: [
			{
				name: 'Fundamentals of React',
				exercises: 10,
				id: 1
			},
			{
				name: 'Using props to pass data',
				exercises: 7,
				id: 2
			},
			{
				name: 'State of a component',
				exercises: 14,
				id: 3
			}
		]
	}
	return <Course course={course} />
}
ReactDOM.render(<App />, document.getElementById('root'))
