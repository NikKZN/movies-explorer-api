require('dotenv').config();

const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
// const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routes = require('./routes/index');
const errHandler = require('./middlewares/errHandler');
const { mongoAdress } = require('./utils/constants');
const limiter = require('./middlewares/rateLimiter');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect(mongoAdress, {
  useNewUrlParser: true,
});

// app.use(cors);
app.use(helmet());
app.use(requestLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(limiter);

app.use(routes);
app.use(errorLogger);
app.use(errors());
app.use(errHandler);

app.listen(PORT);
