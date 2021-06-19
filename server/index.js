const express = require('express');
const app = express();
const port = 3000;

const { connection } = require('./db/connection');
const { registration, login } = require('./controllers/user-controller');
const { getAddress, addAddress, deleteAddress } = require('./controllers/address-controller');
app.use(express.json());
connection();
// Registration Api
app.post('/api/server/registration', registration);

// Login Api
app.post('/api/server/login', login);

// get address
app.get('/api/server/address', getAddress);

// post address
app.post('/api/server/address', addAddress);

// delete address
app.delete('/api/server/address/:id', deleteAddress);

app.listen(port, () => {
	console.log('app is listen Port http://localhost:' + port);
});
