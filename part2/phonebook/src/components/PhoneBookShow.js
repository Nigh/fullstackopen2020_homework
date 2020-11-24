import React from "react"
import PhoneBookService from "../services/phonebook"
import Person from "./person"

const PhoneBookShow = ({ filted, setFilted, persons, setPersons }) => {
	const removeID = (id) => {
		console.log(`trying to delete ${id}`)
		let name = persons.find((person) => person.id === id).name
		if (window.confirm(`Really delete ${name}`)) {
			PhoneBookService.remove(id).then(() => {
				setFilted(filted.filter((person) => person.id !== id))
				setPersons(persons.filter((person) => person.id !== id))
			})
		}
	}
	return (
		<table border="1">
			<thead>
				<tr>
					<th>name</th>
					<th>number</th>
				</tr>
			</thead>
			<tbody>
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
			</tbody>
		</table>
	)
}

export default PhoneBookShow
