const express = require('express');
const router = require('./router/index.router');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());
app.use(router)

app.get('/', (_, res)=> res.send(require('./../package.json').version))


module.exports = app