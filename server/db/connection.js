const mongoose = require('mongoose');

function connection() {
	mongoose
		.connect('mongodb://localhost:27017/useraddress', {
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		.then(() => {
			console.log('connected...');
		})
		.catch((err) => {
			console.log(err);
		});
}

module.exports = { connection };
