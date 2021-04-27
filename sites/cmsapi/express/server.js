'use strict';

const jsonGraphqlExpress = require('json-graphql-server').default;
const jsonServer = require('json-server')
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const fetch = require('sync-fetch');

const data = fetch('https://github.com/cueblox/starter-azure-blog/releases/download/blox/data.json').json();
const router = jsonServer.router(data, { foreignKeySuffix: '_id' })
app.use('/.netlify/functions/server/graphql', jsonGraphqlExpress(data));
app.use("/.netlify/functions/server", router);


module.exports = app;
module.exports.handler = serverless(app);
