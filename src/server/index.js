const express = require('express');
const cors = require('cors');
const path = require('path');

class Server {
	constructor() {
		this.app = express();
		this.PORT = process.env.PORT || 3000;
		this.route = '/api/';

		//Middlewares
		this.middlewares();

		//Routes
		this.routes();
	}

	middlewares() {
		//CORS
		this.app.use(cors());

		//Read and parse JSON
		this.app.use(express.json());

		// //Public directory
		this.app.use(express.static(path.resolve(__dirname, '../public')));
	}

	routes() {
		this.app.use(this.route, require('../routes/routes'));
	}

	listen() {
		this.app.listen(this.PORT, () => {
			console.log(`Server running in port: ${this.PORT}`);
		});
	}
}

module.exports = Server;
