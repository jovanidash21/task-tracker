var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var timestamps = require('mongoose-timestamp');

var usersDataSchema = new Schema
(
    {
        firstName: {type:String, default: ''},
        lastName: {type:String, default: ''},
        tasks: {
            type: Array,
            default: []
        },
        email: {type:String, default: ''},
        socialLinks: [{
            website: {type: String, default: ''},
            facebook: {type: String, default: ''},
            instagram: {type: String, default: ''},
            googleplus: {type: String, default: ''},
            youtube: {type: String, default: ''},
            github: {type: String, default: ''},
            codepen: {type: String, default: ''}
        }]

    },
    {
        collection: 'usersData'
    }
);

usersDataSchema.plugin(passportLocalMongoose);
usersDataSchema.plugin(timestamps);

usersData = mongoose.model('usersData', usersDataSchema);