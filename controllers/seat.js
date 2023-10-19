const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//@desc     GET all seats
//@route    GET /
exports.getSeats = async (req, res, next) => {
	try {
		const seats = await prisma.seat.findMany()
		res.status(200).json(seats)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}

//@desc     GET seats by floor
//@route    GET /floor/:floor
exports.getSeatsByFloor = async (req, res, next) => {
	const { floor } = req.params
	try {
		const seats = await prisma.seat.findMany({
			where: {
				floor: Number(floor)
			}
		})
		res.status(200).json(seats)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}

//@desc     Create seat
//@route    POST /
exports.createSeat = async (req, res, next) => {
	const { isOpen, floor, posX, posY } = req.body
	try {
		const seat = await prisma.seat.create({
			data: {
				isOpen,
				floor,
				posX,
				posY
			}
		})
		res.status(201).json(seat)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}
