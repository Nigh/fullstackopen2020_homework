import React from 'react'

const PhoneBookShow = ({ phonebookToShow }) => {
	return (
		<table border='1'>
			<thead><tr><th>name</th><th>number</th></tr></thead>
			<tbody>
				{
					phonebookToShow.map(({ name, num }) =>
						<tr key={name}><td>{name}</td><td>{num}</td></tr>
					)
				}
			</tbody>
		</table>
	)
}

export default PhoneBookShow
