const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function() {
    var app = express();

    app.use(bodyParser.json());
    app.use(cors());

    consign({ cwd: 'app' })
    .then('controllers')
    .then('routes')
    .into(app)

    return app;
}