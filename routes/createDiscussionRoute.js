var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var discussions = require('../models/discussions');


var createDiscussionRoute = express.Router();
createDiscussionRoute.use(bodyParser.json());

createDiscussionRoute.route('/')
    .post(function (req, res, next) {
        console.log('post loop of /');
        var jsonData = JSON.parse(req.body.mydata);
        console.log(jsonData);
        discussions.create(jsonData, function (err, d) {
            if (err) {console.log(err)};
            res.send('success');
        });
    });

module.exports = createDiscussionRoute;