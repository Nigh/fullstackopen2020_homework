import React from 'react'

const Country = ({ countries }) => {
	if (countries.length > 10) {
		return (
			<p>Too many matches</p>
		)
	} else if (countries.length === 0) {
		return (
			<p>No matches</p>
		)
	} else if (countries.length > 1) {
		return (
			<div>
				{
					countries.map(
						({ numericCode, name }) =>
							<li key={numericCode}>{name}</li>
					)
				}
			</div>
		)
	}
	let c = countries[0]
	const flagStyle = {
		width: '30%'
	}
	return (<div>
		<h2>{c.name}</h2>
		<img src={c.flag} style={flagStyle} />
		<p>Capital:{c.capital}</p>
		<p>Population:{c.population}</p>
		<h3>Language</h3>
		{
			c.languages.map(
				({ name, iso639_2 }) =>
					<li key={iso639_2}>{name}</li>
			)
		}
	</div>)
}

export default Country
