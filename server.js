const express = require('express')
const seat = require('./routes/seat')
const app = express()

app.use(express.json())
app.use('/', seat)

const server = app.listen(3001, () =>
	console.log(`
🚀 Server ready at: http://localhost:3001
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
)
