import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({ course }) => {
	const { name } = course
	return (
		<h2>{name}</h2>
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

const Total = ({ course }) => {
	const { parts } = course
	const reducer = (acc, value) => {
		let add = acc.exercises + value.exercises
		return (
			{ exercises: add }
		)
	}
	return (
		<p>Total of {parts.reduce(reducer).exercises} exercises</p>
	)
}

const Course = ({ course }) => {
	console.log(course)
	return (
		<>
			<Header course={course} />
			<Content course={course} />
			<Total course={course} />
		</>
	)
}

const App = () => {
	const courses = [
		{
			name: 'Half Stack application development',
			id: 1,
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
				},
				{
					name: 'Redux',
					exercises: 11,
					id: 4
				}
			]
		},
		{
			name: 'Node.js',
			id: 2,
			parts: [
				{
					name: 'Routing',
					exercises: 3,
					id: 1
				},
				{
					name: 'Middlewares',
					exercises: 7,
					id: 2
				}
			]
		}
	]
	return (
		<>
			<h1>Web development curriculum</h1>
			{
				courses.map((course) =>
					<Course key={course.id} course={course} />
				)
			}
		</>
	)
}
ReactDOM.render(<App />, document.getElementById('root'))
