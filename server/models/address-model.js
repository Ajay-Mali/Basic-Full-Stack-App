const mongoose = require('mongoose');
const { Schema } = mongoose;


const addAddressSchema = new Schema(
	{
		UserId: {
			type: mongoose.Types.ObjectId,
			ref: 'users',
			required: true
		},
		Address: {
			type: 'String'
		}
	},
	{
		timestamps: {
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	}
);

const Add_Address = mongoose.model('addressuser', addAddressSchema);

module.exports = { Add_Address };
