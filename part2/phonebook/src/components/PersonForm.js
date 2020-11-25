import React, { useState } from "react"
import PhoneBookService from "../services/phonebook"

const PersonForm = ({
	filted,
	setFilted,
	persons,
	setPersons,
	createNotice,
}) => {
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
		let samePerson = persons.find(
			(person) => person.name === newPerson.name
		)
		if (samePerson) {
			if (
				window.confirm(
					`${newPerson.name} already exist. Replace old number with new one?`
				)
			) {
				PhoneBookService.update(samePerson.id, newPerson)
					.then((resp) => {
						setPersons(
							persons.map((person) =>
								person.id !== samePerson.id ? person : resp
							)
						)
						setFilted(
							filted.map((person) =>
								person.id !== samePerson.id ? person : resp
							)
						)
						createNotice({
							msg: "Success updated",
							type: "success",
						})
					})
					.catch(() => {
						createNotice({
							msg: "Update failed. Refresh the page may fix it.",
							type: "error",
						})
					})
			}
		} else if (newPerson.name === "") {
			createNotice({ msg: "Name can not be empty.", type: "notice" })
		} else {
			PhoneBookService.append(newPerson)
				.then((newOne) => {
					setPersons(persons.concat(newOne))
					setFilted(filted.concat(newOne))
					createNotice({ msg: "Success added", type: "success" })
				})
				.catch(() =>
					createNotice({
						msg: "Add person failed. Refresh the page may fix it.",
						type: "error",
					})
				)
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
