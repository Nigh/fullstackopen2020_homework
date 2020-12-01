const express = require("express")
const app = express()
var morgan = require("morgan")

let persons = [
	{
		name: "Arto Hellas",
		number: "040-123456",
		id: 1,
	},
	{
		name: "Ada Lovelace",
		number: "39-44-5323523",
		id: 2,
	},
	{
		name: "Dan Abramov",
		number: "12-43-234345",
		id: 3,
	},
	{
		name: "Mary Poppendieck",
		number: "39-23-6423122",
		id: 4,
	},
]

morgan.token("json-content", function (req, res) {
	return JSON.stringify(req.body)
})
let date = new Date()
app.use(express.json())
app.use(
	morgan(
		":method :url :status :res[content-length] - :response-time ms - :json-content"
	)
)

app.get("/", (req, res) => {
	res.send(`<h1>Hello World</h1>`)
})

app.get("/info", (req, res) => {
	res.send(`
	Phonebook has info for ${persons.length} people
	<br>${date.toLocaleString()}
	`)
})

app.get("/api/persons/:id", (req, res) => {
	const ret = persons.filter(
		(person) => person.id.toString() === req.params.id
	)
	if (ret.length > 0) {
		res.json(ret)
	} else {
		res.status(404).end()
	}
})

app.get("/api/persons", (req, res) => {
	res.json(persons)
})

app.delete("/api/persons/:id", (req, res) => {
	const found = persons.filter(
		(person) => person.id.toString() === req.params.id
	)
	if (found.length > 0) {
		id = req.params.id
		persons = persons.filter((p) => p.id.toString() !== id)
		res.status(204).end()
	} else {
		res.status(404).end()
	}
})

app.post("/api/persons", (req, res) => {
	const body = req.body
	if (!body.name || !body.number) {
		return res.status(400).json({
			error: "name or number missing",
		})
	}

	if (persons.find((p) => p.name === body.name)) {
		return res.status(400).json({
			error: "name duplicate",
		})
	}

	const newPerson = {
		name: body.name,
		number: body.number,
		id: Math.random() * 100000000000,
	}
	persons = persons.concat(newPerson)

	res.json(persons)
})

const PORT = 3001

app.listen(PORT, () => {
	console.log(`hello world on port ${PORT}`)
})
