import ReactDOM from "react-dom"
import React, { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import PhoneBookShow from "./components/PhoneBookShow"
import PhoneBookService from "./services/phonebook"

const App = () => {
	const [persons, setPersons] = useState([])
	const [filted, setFilted] = useState(persons)

	useEffect(() => {
		PhoneBookService.getAll().then((persons) => {
			setPersons(persons)
			setFilted(persons)
		})
	}, [])
	return (
		<div>
			<Filter persons={persons} setFilted={setFilted} />
			<h2>Phonebook</h2>
			<PersonForm
				filted={filted}
				setFilted={setFilted}
				persons={persons}
				setPersons={setPersons}
			/>
			<h2>Numbers</h2>
			<PhoneBookShow
				filted={filted}
				setFilted={setFilted}
				persons={persons}
				setPersons={setPersons}
			/>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById("root"))
export default App
