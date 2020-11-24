import React from 'react'

const person = ({name,number,id,removeFunc}) => {
	return (
		<tr key={id}>
			<td>{name}</td>
			<td>{number}</td>
			<td>
				<button type="submit" onClick={removeFunc}>
					delete
				</button>
			</td>
		</tr>
	)
}

export default person
