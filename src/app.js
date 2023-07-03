const express = require('express');
const router = require('./router/index.router');
const cors = require('cors')
const app = express();
require('dotenv').config()

app.use(cors())
app.use(express.json());

app.use('/', require('./router/public.router'))

app.use(router)


module.exports = app