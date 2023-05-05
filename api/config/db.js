const mongoose = require('mongoose');

const connectWithDB = () => {
	mongoose
		.connect('mongodb://0.0.0.0:27017/AirBnb', {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB connected successfully`))
		.catch((err) => {
			console.log(`DB connection failed`);
			console.log(err);
			process.exit(1);
		});
};

module.exports = connectWithDB;
