var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');
var usersData = require('./users-data-schema');

var tasksDataSchema = new Schema
(
    {
        name: {type:String, default: 'My Task'},
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'usersData'
        },
        isComplete : {type : Boolean, default : false}
    },
    {
        collection: 'tasksData'
    }
);

tasksDataSchema.plugin(timestamps);

module.exports = mongoose.model('tasksData', tasksDataSchema);