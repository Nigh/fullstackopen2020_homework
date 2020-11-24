import React, { useState } from 'react'

const Filter = ({ inputs, setFilted }) => {
	const [filter, setFilter] = useState('')

	const handleFilter = (event) => {
		let reg = event.target.value
		try {
			let rege = new RegExp(reg, 'i')
			setFilted(inputs.filter(v => v.name.search(rege) !== -1))
		} catch (error) {

		} finally {
			setFilter(reg)
		}
	}
	return (
		<>
			<h2>Filter (Regexpression support)</h2>
			<div>
				Filter: <input value={filter} onChange={handleFilter} />
			</div>
		</>
	)
}

export default Filter
