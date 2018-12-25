var http = require('http');
var fileSystem = require('fs');
var login = require('./controller/login');
async function start(params) {
	await login.init();
}

start();
