const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllApi
} = require('./APIs/api')

app.get('/api', getAllApi;
exports.api = functions.https.onRequest(app);