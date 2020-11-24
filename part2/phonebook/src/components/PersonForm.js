import React, { useState } from "react"
import PhoneBookService from "../services/phonebook"

const PersonForm = ({ filted, setFilted, persons, setPersons }) => {
	const [newName, setNewName] = useState("")
	const [newNumber, setNewNumber] = useState("")

	const handleNewName = (event) => {
		setNewName(event.target.value)
	}
	const handleNewNumber = (event) => {
		setNewNumber(event.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		let newPerson = { name: newName, number: newNumber }
		if (persons.find((person) => person.name === newPerson.name)) {
			alert(`${newPerson.name} is existed.`)
		} else if (newPerson.name === "") {
			alert("Empty Input")
		} else {
			PhoneBookService.append(newPerson).then((newOne) => {
				setPersons(persons.concat(newOne))
				setFilted(filted.concat(newOne))
			})
		}
	}

	return (
		<form>
			<div>
				name: <input value={newName} onChange={handleNewName} />
			</div>
			<div>
				Number: <input value={newNumber} onChange={handleNewNumber} />
			</div>
			<div>
				<button type="submit" onClick={submitHandler}>
					add
				</button>
			</div>
		</form>
	)
}

export default PersonForm
