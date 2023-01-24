const express = require('express');
const routes = express.Router();
const controller = require('../controllers/event.controller')

routes.get('/events/:idTimeline', controller.getAll);
routes.post('/events', controller.save);
routes.post('/events/bulk', controller.saveBulk);
routes.put('/events/:id', controller.update);
routes.delete('/events/:id', controller.delete);

module.exports = routes;