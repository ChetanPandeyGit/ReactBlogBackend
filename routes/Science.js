const express = require('express');
const scienceapi = require('../controller/Science');

const science = express.Router();
science.route('/science').get(scienceapi.apiController);

module.exports = science;