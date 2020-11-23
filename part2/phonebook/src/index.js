import ReactDOM from 'react-dom';
import React, { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', num: '12345678' }
	])
	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')
	const handleNewName = (event) => {
		// console.log(event.target.value)
		setNewName(event.target.value)
	}
	const handleNewNumber = (event) => {
		// console.log(event.target.value)
		setNewNumber(event.target.value)
	}
	const dupAlert = `${newName} is existed.`
	return (
		<div>
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
					persons.map(
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
