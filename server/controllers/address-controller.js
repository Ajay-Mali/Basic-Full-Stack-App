const { Add_Address } = require('../models/address-model');
const jwt = require('jsonwebtoken');

function getTokenData(data) {
	// let data = req.headers.authorization;
	let token = null;
	let Payload = null;
	// console.log(data);
	if (Object.keys(data).length == 0 || data == '') {
		return res.status(400).json({
			error: 'Token is Required...'
		});
	} else {
		token = data.split(' ')[1];
		try {
			Payload = jwt.verify(token, '1998');
			return Payload.id;
		} catch (err) {
			console.log(err);
			return res.status(400).json({
				massage: 'invalid token'
			});
		}
	}
}
async function getAddress(req, res) {
	// console.log(req.headers.authorization);

	const id = getTokenData(req.headers.authorization);
	try {
		const address = await Add_Address.find({ UserId: id });
		// console.log(address);
		if (address == '') {
			return res.status(400).json({
				massage: 'Data Not Found'
			});
		} else {
			return res.status(200).json({
				massage: 'Data is found...',
				count: address.length,
				data: address
			});
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			massage: 'Server Error..'
		});
	}
}

function addAddress(req, res) {
	// console.log(req.headers.authorization);
	const id = getTokenData(req.headers.authorization);
	// console.log(id);
	const body = req.body.Address;
	// console.log(req.body.Address);
	if (Object.keys(body).length == '') {
		return res.status(400).json('Body Is Require ....');
	}

	const data = {
		UserId: id,
		Address: body
	};

	// console.log(data);
	try {
		Add_Address.create(data)
			.then((data) => {
				res.status(200).json({
					massage: 'Address Add Succss..',
					data: data
				});
			})
			.catch((err) => {
				console.log(err);
			});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			massage: 'Server Error..'
		});
	}
	// res.send('addAddress is working...');
}

async function deleteAddress(req, res) {
	// console.log(req.params.id);
	const id = req.params.id;

	try {
		const DeleteData = await Add_Address.deleteOne({ _id: id });
		if (DeleteData.deletedCount == 0) {
			return res.status(400).json({
				massage: 'Data Not Present'
			});
		} else {
			return res.status(200).json({
				massage: 'Delete Data Success....'
			});
		}
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			massage: 'Server Error..'
		});
	}
	// res.send('addAddress is working...');
}

module.exports = { getAddress, addAddress, deleteAddress };
