const express = require('express');
const routes = express.Router();
const controller = require('../controllers/timeline.controller')

routes.get('/timelines', controller.getAll);
routes.post('/timelines', controller.save);
routes.put('/timelines/:id', controller.update);
routes.delete('/timelines/:id', controller.delete);

module.exports = routes;