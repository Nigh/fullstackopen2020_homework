import axios from "axios"

const baseUrl = "/api/persons"

const getAll = () => {
	const request = axios.get(baseUrl)
	return request.then((resp) => resp.data)
}

const append = (newPerson) => {
	const request = axios.post(baseUrl, newPerson)
	return request.then((resp) => resp.data)
}

const remove = (id) => {
	const request = axios.delete(`${baseUrl}/${id}`)
	return request.then((resp) => resp.data)
}

const update = (id, newPerson) => {
	const request = axios.put(`${baseUrl}/${id}`, newPerson)
	return request.then((resp) => resp.data)
}

export default {
	append,
	getAll,
	remove,
	update,
}
