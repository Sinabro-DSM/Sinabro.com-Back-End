const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

const config = require('./config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', require('./routes'));

app.set('jwt-secret', config.secret);

app.use((err, req, res, next) => {
    res.status(404).json(err);
});


app.listen(3000, () => {
    console.log('server on');
});

mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log('db connected');
});