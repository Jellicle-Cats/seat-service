const express = require('express')
const seat = require('./routes/seat')
const app = express()
const cors = require('cors')
const morgan = require('morgan')

app.use(cors({ origin: true, credentials: true }))
app.use(express.json())
app.use(morgan('dev'))
app.use('/', seat)

const server = app.listen(3001, () =>
	console.log(`
🚀 Server ready at: http://localhost:3001
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
)
