const Booking = require('../models/Booking');
const userFromToken = require('../utils/userFromToken');

exports.createBookings = async (req, res) => {
	try {
		const userData = userFromToken(req);
		const { place, checkIn, checkOut, numOfGuests, name, phone, price } =
			req.body.data;

		const bookingData = await Booking.find({
			place: place,
			$and: [{ checkIn: { $lt: checkOut } }, { checkOut: { $gt: checkIn } }],
		});

		if (bookingData.length > 0) {
			res.json({ message: 'No Booking Available on the specified date' });
			console.log(bookingData);
			return;
		}

		const booking = await Booking.create({
			user: userData.id,
			place,
			checkIn,
			checkOut,
			numOfGuests,
			name,
			phone,
			price,
		});
		res.status(200).json({
			Booking,
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).json({
			message: 'Internal Server Erro',
			error: err,
		});
	}
};

exports.getBookings = async (req, res) => {
	try {
		const userData = await userFromToken(req);
		// console.log(userData);
		if (!userData) {
			return res
				.status(401)
				.json({ error: 'You are not authorized to access this page!' });
		}
		const data = await Booking.find({ user: userData.id }).populate('place');
		// console.log(data);
		res
			.status(200)
			.json(await Booking.find({ user: userData.id }).populate('place'));
	} catch (err) {
		console.log(err);
		res.status(500).json({
			message: 'Internal server error',
			error: err,
		});
	}
};
