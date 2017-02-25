var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var tasksDataSchema = new Schema
(
    {
        name: {type:String, default: 'My Task'},
        isComplete : {type : Boolean, default : false}
    },
    {
        collection: 'tasksData'
    }
);

tasksDataSchema.plugin(timestamps);

tasksData= mongoose.model('tasksData', tasksDataSchema);