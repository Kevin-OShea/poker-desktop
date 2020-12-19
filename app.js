const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const testRoutes = require('./api/routes/test_routes');
const playerRoutes = require('./api/routes/player_routes');
const tableRoutes = require('./api/routes/table_routes');

mongoose.connect('mongodb+srv://admin:admin@poker.qv3bs.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/test', testRoutes);
// app.use('/players', playerRoutes);
// app.use('/tables', tableRoutes);

module.exports = app;