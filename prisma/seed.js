// npx prisma db seed
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const seatData = [
	{
		floor: '1',
		top: 282,
		left: 927
	},
	{
		floor: '1',
		top: 303,
		left: 927
	},
	{
		floor: '1',
		top: 316,
		left: 927
	},
	{
		floor: '1',
		top: 339,
		left: 927
	},
	{
		floor: '1',
		top: 352,
		left: 927
	},
	{
		floor: '1',
		top: 374,
		left: 927
	},
	{
		floor: '1',
		top: 387,
		left: 927
	},
	{
		floor: '1',
		top: 408,
		left: 927
	}
]

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
