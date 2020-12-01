const app = require("express")()

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

let date = new Date()

app.get("/", (req, res) => {
	res.send(`<h1>Hello World</h1>`)
})

app.get("/info", (req, res) => {
	res.send(`
	Phonebook has info for ${persons.length} people
	<br>${date.toLocaleString()}
	`)
})
app.get("/api/persons", (req, res) => {
	res.json(persons)
})

const PORT = 3001

app.listen(PORT, () => {
	console.log(`hello world on port ${PORT}`)
})
