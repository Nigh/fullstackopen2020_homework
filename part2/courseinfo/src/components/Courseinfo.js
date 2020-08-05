import React from 'react'

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

export default Course
