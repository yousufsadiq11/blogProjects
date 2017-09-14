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
    })

    .post(function (req, res, next) {
        discussions.create(req.body, function (err, leader) {
            if (err) throw next(err);
            console.log('post loop');
            var id = discussions._id;

            res.writeHead(200, {
                'Content-Type': 'text/plain'
            });
            res.send('Added the discussion with id' + id);
        });
    })

/*discussionRoute.route('/:id')
    .get(function (req, res, next) {
        discussions.findById(req.params.id)
            .exec(function (err, discussions) {
                if (err) throw next(err);
                res.json(discussions);
            });
    });


discussionRoute.route('/:id/comments')
    .get(function (req, res, next) {
        discussions.findById(req.params.id)
            .exec(function (err, discussions) {
                if (err) throw next(err);
                res.json(discussions.comments);
            });
    })

    .post(function (req, res, next) {
        discussions.findById(req.params.id, function (err, discussions) {
            if (err) throw next(err);
            //req.body.postedBy = req.decoded._id;
            discussions.comments.push(req.body);
            discussions.save(function (err, discussions) {
                if (err) throw next(err);
                console.log('Updated Comments');
                res.json(discussions);
            });
        });
    });*/



module.exports = discussionRoute;