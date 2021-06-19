const mongoose = require('mongoose');
const { Schema } = mongoose;


const UserSchema = new Schema(
	{
		name: {
			type: 'String'
		},
		email: {
			type: 'String'
		},
		password: {
			type: 'String'
		},
		address: {
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

const User = mongoose.model('user', UserSchema);

module.exports = { User };
