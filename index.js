const express = require('express');
const cors = require('cors');
const indexRoutes = require('./routes/index.routes.js')
const timelineRoutes = require('./routes/timeline.routes')
const eventRoutes = require('./routes/event.routes')

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(cors());
app.use(express.json())

//routes
app.use(indexRoutes);
app.use(timelineRoutes);
app.use(eventRoutes);

//startup
app.listen(app.get('port'), () => {
    console.log(`Listening on port ${app.get('port')}`);
});

