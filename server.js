
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
// loading env variables
require('dotenv').config();

const indexRouter = require('./routes/index');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));

//mongodb connection
mongoose.connect(process.env.ATLAS_URI, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('connected to mongoose'));

// routes
app.use('/', indexRouter);


app.listen(process.env.PORT || 3000);
