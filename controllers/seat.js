const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

//@desc     GET all seats
//@route    GET /
//@access   Public
exports.getSeats = async (req, res, next) => {
	try {
		const seats = await prisma.seat.findMany()
		res.status(200).json(seats)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}

//@desc     GET seat
//@route    GET /:id
//@access   Public
exports.getSeat = async (req, res, next) => {
	try {
		const seats = await prisma.seat.findFirst({
			where: {
				id: Number(req.params.id)
			}
		})
		res.status(200).json(seats)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}

//@desc     GET seats by floor
//@route    GET /floor/:floor
//@access   Public
exports.getSeatsByFloor = async (req, res, next) => {
	const { floor } = req.params
	try {
		const seats = await prisma.seat.findMany({
			where: {
				floor
			}
		})
		res.status(200).json(seats)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}

//@desc     Create seat
//@route    POST /
//@access   Admin
exports.createSeat = async (req, res, next) => {
	const { isOpen, floor, top, left } = req.body
	try {
		const seat = await prisma.seat.create({
			data: {
				isOpen,
				floor,
				top,
				left
			}
		})
		res.status(201).json(seat)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}

//@desc     Update seat
//@route    PUT /:id
//@access   Admin
exports.updateSeat = async (req, res, next) => {
	try {
		const seat = await prisma.seat.update({
			where: {
				id: Number(req.params.id)
			},
			data: req.body
		})
		res.status(200).json(seat)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}

//@desc     Delete seat
//@route    DELETE /:id
//@access   Admin
exports.deleteSeat = async (req, res, next) => {
	try {
		const seat = await prisma.seat.delete({
			where: {
				id: Number(req.params.id)
			}
		})
		res.status(200).json(seat)
	} catch (err) {
		res.status(400).json({ message: err })
	}
}
