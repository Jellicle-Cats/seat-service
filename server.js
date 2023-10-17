const { PrismaClient } = require('@prisma/client')
const express = require("express");

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

const server = app.listen(3001, () =>
	console.log(`
🚀 Server ready at: http://localhost:3001
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
)
