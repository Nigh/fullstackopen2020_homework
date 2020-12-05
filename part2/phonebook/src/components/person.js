import React from "react"

const person = ({ name, number, id, removeFunc }) => {
	const styles = { float: "left", padding: "0 2px 0 0", margin: "0 10px 0 0" }
	return (
		<div id={id}>
			<div style={styles}>{name}</div>
			<div style={styles}>:</div>
			<div style={styles}>{number}</div>
			<button type="submit" onClick={removeFunc}>
				delete
			</button>
		</div>
	)
}

export default person
