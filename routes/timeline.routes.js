const express = require('express');
const routes = express.Router();
const controller = require('../controllers/timeline.controller');
const auth = require("../middleware/auth");

routes.get('/timelines', controller.getAll);
routes.post('/timelines', auth, controller.save);
routes.put('/timelines/:id', auth, controller.update);
routes.delete('/timelines/:id', auth, controller.delete);

module.exports = routes;