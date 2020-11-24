import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import Filter from './components/Filter'
import Country from './components/Country'

const App = () => {
	const [countries, setCountries] = useState([])
	const [filted, setFilted] = useState(countries)

	useEffect(() => {
		Axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				setCountries(response.data)
				setFilted(response.data)
			})
	}, [])
	return (
		<div>
			<Filter inputs={countries} setFilted={setFilted} />
			<Country countries={filted} />
		</div>
	)
}
ReactDOM.render(<App />, document.getElementById('root'))
export default App
