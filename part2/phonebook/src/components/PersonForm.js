import React, { useState } from "react";

const PersonForm = ({ persons, setPersons }) => {

	const [newName, setNewName] = useState('')
	const [newNumber, setNewNumber] = useState('')

	const handleNewName = (event) => {
		setNewName(event.target.value)
	}
	const handleNewNumber = (event) => {
		setNewNumber(event.target.value)
	}
	const dupAlert = `${newName} is existed.`
	return (
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
						setPersons(persons.concat({ name: newName, num: newNumber }))
					}
				}}>add</button>
			</div>
		</form>
	)
}

export default PersonForm
