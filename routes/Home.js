const express = require('express');
const homeapi = require('../controller/Home');

const home = express.Router();
home.route('/').get(homeapi.apiController);

module.exports = home;