const express = require('express')
const { getSeats, createSeat, getSeatsByFloor, updateSeat, deleteSeat, getSeat } = require('../controllers/seat')
const router = express.Router()
const { protect, authorize } = require('../middleware/auth')

router.route('/').get(getSeats).post(protect, authorize('admin'), createSeat)
router
	.route('/:id')
	.get(getSeat)
	.put(protect, authorize('admin'), updateSeat)
	.delete(protect, authorize('admin'), deleteSeat)
router.route('/floor/:floor').get(getSeatsByFloor)

module.exports = router
