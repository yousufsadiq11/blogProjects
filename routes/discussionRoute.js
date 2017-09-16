var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var discussions = require('../models/discussions');


var discussionRoute = express.Router();
discussionRoute.use(bodyParser.json());


discussionRoute.route('/')
    .get(function (req, res, next) {
        discussions.find({},function (err, discussion) {
            if (err) throw next(err);
            res.json(discussion);
        });
    });


discussionRoute.route('/:id')
    .get(function (req, res, next) {
        discussions.findById(req.params.id, function (err, d) {
            if (err) throw next(err);
            res.json(d);
        });
    })

    .post(function (req, res, next) {
        discussions.findById(req.params.id, function (err, d) {
            if (err) throw next(err);
            var jsonData = JSON.parse(req.body.mydata);
            var convertedJsonData={postedBy:jsonData.postedBy,commentDescription:jsonData.commentDescription};
            d.comments.push(convertedJsonData);
            d.save(function (err, d1) {
                if (err){console.log(err);}
                res.json(d1);
            });
        });
    });

module.exports = discussionRoute;