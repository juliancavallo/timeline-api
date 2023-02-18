const express = require('express');
const routes = express.Router();
const controller = require('../controllers/security.controller')

routes.post('/login', controller.login);

module.exports = routes;