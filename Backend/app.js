const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();

const config = require('./config');
const swaggerDoc = YAML.load('./apidocs/swagger.yaml');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/', require('./routes'));

app.set('jwt-secret', config.secret);

app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(404).json(err.message);
});

app.listen(8000, () => {
    console.log('server on');
});

mongoose.connect(config.mongodbUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error);
db.once('open', () => {
    console.log('db connected');
});