import ReactDOM from 'react-dom';
import React, { useState } from 'react'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas' }
	])
	const [newName, setNewName] = useState('')
	const handleNewName = (event) => {
		console.log(event.target.value)
		setNewName(event.target.value)
	}
	return (
		<div>
			<h2>Phonebook</h2>
			<form>
				<div>
					name: <input value={newName} onChange={handleNewName} />
				</div>
				<div>
					<button type="submit" onClick={(event) => {
						event.preventDefault()
						// console.log({ name:  newName  });
						setPersons(persons.concat({ name: newName }))
					}}>add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{
				persons.map(
					({ name }) => <li key={name}>{name}</li>
				)
			}
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App
