var mongoose = require('mongoose');


var Schema = mongoose.Schema;

var commentSchema = new Schema({
    postedBy:  {
        type: String,
        required: false
    },
    commentDescription:  {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

var discussionsSchema = new Schema({
    topic: {
        type: String,
        required: true,
    },
    createdBy: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: true
    },
    active: {
        type: String,
        default: false
    },
    comments: [commentSchema]
}, {
    timestamps: true
});

var discussions = mongoose.model('Discussion', discussionsSchema);

module.exports = discussions;
