'use strict';

const jsonGraphqlExpress = require('json-graphql-server').default;
const jsonServer = require('json-server')
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const fetch = require('sync-fetch');

const data = fetch('https://github.com/cueblox/starter-netlify-blog/releases/download/blox/data.json').json();
const router = jsonServer.router(data, { foreignKeySuffix: '_id' })
app.use('/graphql', jsonGraphqlExpress(data));
app.use("/api", router);


module.exports = app;
module.exports.handler = serverless(app);
