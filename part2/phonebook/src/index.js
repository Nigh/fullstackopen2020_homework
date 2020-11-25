import ReactDOM from "react-dom"
import React, { useState, useEffect } from "react"
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import PhoneBookShow from "./components/PhoneBookShow"
import PhoneBookService from "./services/phonebook"
import Notify from "./components/Notify"
import "./index.css"

const App = () => {
	const [persons, setPersons] = useState([])
	const [filted, setFilted] = useState(persons)
	const [notice, setNotice] = useState({ msg: null, type: "error" })

	useEffect(() => {
		PhoneBookService.getAll().then((persons) => {
			setPersons(persons)
			setFilted(persons)
		})
	}, [])
	const CreateNotice = ({ msg, type }) => {
		setNotice({ msg, type })
		setTimeout(() => {
			setNotice({ msg: null, type: null })
		}, 5000)
	}
	return (
		<div>
			<Notify msg={notice.msg} type={notice.type} />
			<Filter persons={persons} setFilted={setFilted} />
			<h2>Phonebook</h2>
			<PersonForm
				filted={filted}
				setFilted={setFilted}
				persons={persons}
				setPersons={setPersons}
				createNotice={CreateNotice}
			/>
			<h2>Numbers</h2>
			<PhoneBookShow
				filted={filted}
				setFilted={setFilted}
				persons={persons}
				setPersons={setPersons}
				createNotice={CreateNotice}
			/>
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById("root"))
export default App
