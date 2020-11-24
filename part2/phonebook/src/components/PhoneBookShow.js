import React from 'react'

const PhoneBookShow = ({ phonebookToShow }) => {
	return (
		<table border='1'>
			<thead><tr><th>name</th><th>number</th></tr></thead>
			<tbody>
				{
					phonebookToShow.map(({ name, number }) =>
						<tr key={name}><td>{name}</td><td>{number}</td></tr>
					)
				}
			</tbody>
		</table>
	)
}

export default PhoneBookShow
