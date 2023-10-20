const axios = require('axios')

exports.protect = async (req, res, next) => {
	let token
	if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
		token = req.headers.authorization.split(' ')[1]
	}
	if (!token || token === 'null') {
		return res.status(401).json({ success: false, message: 'Not authorize to access this route' })
	}
	try {
		const response = await axios.get(`${process.env.USER_SERVICE_ENDPOINT}/api/users/me`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
		req.user = response.data.data.user
		next()
	} catch (err) {
		console.log(err.stack)
		return res.status(401).json({ success: false, message: 'Not authorize to access this route' })
	}
}

exports.authorize = (...roles) => {
	return (req, res, next) => {
		if (!roles.includes(req.user.role)) {
			return res.status(403).json({
				success: false,
				message: `User role ${req.user.role} is not authorized to access this route`
			})
		}
		next()
	}
}
