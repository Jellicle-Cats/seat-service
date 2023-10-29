// npx prisma db seed
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const seatData = require('./seatData')

async function main() {
	console.log(`Start seeding ...`)
	await prisma.seat.deleteMany({})
	console.log(`Deleted all seats`)
	for (const s of seatData) {
		const seat = await prisma.seat.create({
			data: s
		})
		console.log(`Created seat with id: ${seat.id}`)
	}
	console.log(`Seeding finished.`)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async (e) => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
