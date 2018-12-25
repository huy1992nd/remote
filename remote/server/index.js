require('events').EventEmitter.defaultMaxListeners = 100000;
var express = require('express');
var app = express();
//api
var apiController = require('./controller/api/api.controller');
startService = function() {
    apiController.Init();
}

startService();
