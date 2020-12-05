import React from "react"
import PhoneBookService from "../services/phonebook"
import Person from "./person"

const PhoneBookShow = ({
	filted,
	setFilted,
	persons,
	setPersons,
	createNotice,
}) => {
	const removeID = (id) => {
		console.log(`trying to delete ${id}`)
		let name = persons.find((person) => person.id === id).name
		if (window.confirm(`Really delete ${name}?`)) {
			PhoneBookService.remove(id)
				.then(() => {
					setFilted(filted.filter((person) => person.id !== id))
					setPersons(persons.filter((person) => person.id !== id))
					createNotice({ msg: "Success deleted", type: "success" })
				})
				.catch((reason) => {
					console.log(reason)
					createNotice({
						msg: "Delete Failed. Refresh the page may fix it.",
						type: "error",
					})
				})
		}
	}
	return (
		<>
			{filted.map(({ name, number, id }) => (
				<>
					<Person
						name={name}
						number={number}
						id={id}
						removeFunc={() => removeID(id)}
					/>
				</>
			))}
		</>
	)
}

export default PhoneBookShow
