const express = require('express');
const routes = express.Router();
const controller = require('../controllers/event.controller');
const auth = require("../middleware/auth");

routes.get('/events/:idTimeline', controller.getAll);
routes.post('/events', auth, controller.save);
routes.post('/events/bulk', auth, controller.saveBulk);
routes.put('/events/:id', auth, controller.update);
routes.delete('/events/:id', auth, controller.delete);

module.exports = routes;