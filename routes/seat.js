const express = require('express')
const { getSeats, createSeat, getSeatsByFloor } = require('../controllers/seat')
const router = express.Router()

router.route('/').get(getSeats).post(createSeat)
router.route('/floor/:floor').get(getSeatsByFloor)

module.exports = router
