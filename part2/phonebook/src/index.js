import ReactDOM from 'react-dom';
import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PhoneBookShow from './components/PhoneBookShow'

const App = () => {
	const [persons, setPersons] = useState([
		{ name: 'Arto Hellas', num: '040-123456' },
		{ name: 'Ada Lovelace', num: '39-44-5323523' },
		{ name: 'Dan Abramov', num: '12-43-234345' },
		{ name: 'Mary Poppendieck', num: '39-23-6423122' }
	])
	const [filted, setFilted] = useState(persons)

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
