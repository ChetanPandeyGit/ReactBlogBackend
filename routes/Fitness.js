const express = require('express');
const fitnessapi = require('../controller/Fitness');

const fitness = express.Router();
fitness.route('/fitness').get(fitnessapi.apiController);

module.exports = fitness;