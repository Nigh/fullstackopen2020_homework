import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PhoneBookShow from './components/PhoneBookShow'
import Axios from 'axios';

const App = () => {
	const [persons, setPersons] = useState([])
	const [filted, setFilted] = useState(persons)

	useEffect(() => {
		Axios
			.get('http://localhost:3001/persons')
			.then(response => {
				setPersons(response.data)
				setFilted(response.data)
			})
	}, [])
	return (
		<div>
			<Filter persons={persons} setFilted={setFilted} />
			<h2>Phonebook</h2>
			<PersonForm persons={persons} setPersons={setPersons} />
			<h2>Numbers</h2>
			<PhoneBookShow phonebookToShow={filted} />
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App
