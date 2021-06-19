const { User } = require('../models/user-model.js');
// const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

function registration(req, res) {
	// console.log(req.body);
	const data = req.body;

	if (Object.keys(data).length == 0) {
		return res.status(400).json({
			error: 'Request Body is Required...'
		});
	}

	try {
		User.create(data).then((user) => {
			res.status(201).json({
				massage: 'User Created Success..'
			});
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			massage: 'Server Error..'
		});
	}
}

async function login(req, res) {
	let data = req.body;
	// console.log(data);
	if (Object.keys(data).length == 0) {
		return res.status(400).json({
			error: 'Request Body is Required...'
		});
	}
	let { email, password } = data;

	try {
		const user = await User.findOne({ email });

		if (user) {
			if (user.password == password) {
				let Payload = {
					id: user._id
				};
				const token = jwt.sign(Payload, '1998');
				return res.json({
					massage: 'login Success',
					Token: token
				});
			} else {
				return res.status(400).json({
					massage: 'Email Or Password Invlid'
				});
			}
		} else {
			return res.status(400).json({
				massage: 'Email Or Password Invlid'
			});
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			massage: 'Server Error..'
		});
	}
}

module.exports = { registration, login };
