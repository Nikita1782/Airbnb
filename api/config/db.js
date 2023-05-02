const mongoose = require('mongoose');

const connectWithDB = () => {
	mongoose
		.connect('mongodb://127.0.0.1:27017/airnb-db', {
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
