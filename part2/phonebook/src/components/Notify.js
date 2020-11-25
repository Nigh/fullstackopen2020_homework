import React from "react"

const Notify = ({ msg, type }) => {
	if (msg === null) {
		return null
	}
	return (
		<div className="notify">
			<p className={type}>{msg}</p>
		</div>
	)
}
export default Notify
