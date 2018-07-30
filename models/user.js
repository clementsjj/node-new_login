var mongoose = require('mongoose');
var moment = require('moment');

var userSchema = new mongoose.Schema({
    name: {type: String, unique: true, lowercase: true, defaul: ''},
    password: {type: String, default: ''},
    createTimeStamp: {type: String, default: () => moment().format("dddd, MMM Do YYYY, h:mm:ss a")}
});


module.exports = mongoose.model('userSchema', userSchema);