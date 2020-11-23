import ReactDOM from 'react-dom';
import React, { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', num: '040-123456' },
		{ name: 'Ada Lovelace', num: '39-44-5323523' },
		{ name: 'Dan Abramov', num: '12-43-234345' },
		{ name: 'Mary Poppendieck', num: '39-23-6423122' }
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const [filter, setFilter] = useState('')

	const phonebookToShow = filter === ''
		? persons
		: persons.filter(person => person.name.search(filter) != -1)

	const handleFilter = (event) => {
		setFilter(event.target.value)
	}
	const handleNewName = (event) => {
		setNewName(event.target.value)
	}
	const handleNewNumber = (event) => {
		setNewNumber(event.target.value)
	}
	const dupAlert = `${newName} is existed.`
	return (
		<div>
			<h2>Filter (Regexpress support)</h2>
			<div>
				Filter: <input value={filter} onChange={handleFilter} />
			</div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input value={newName} onChange={handleNewName} />
				</div>
				<div>
					Number: <input value={newNumber} onChange={handleNewNumber} />
				</div>
				<div>
					<button type="submit" onClick={(event) => {
						event.preventDefault()
						if (persons.find(person => person.name === newName)) {
							alert(dupAlert)
						} else if (newName === "") {
							alert("Empty Input")
						} else {
							// console.log({ name:  newName  });
							setPersons(persons.concat({ name: newName, num: newNumber }))
						}
					}}>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			<ul>
				{
					phonebookToShow.map(
						({ name, num }) => <li key={name}>
							<tr><td>{name}</td>:<td>{num}</td></tr>
						</li>
					)
				}
			</ul>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App
