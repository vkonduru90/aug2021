const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    nam : {type : String},
    lname : {type : String, required : true},
    rolnum : {type: Number},
    uname : {type : String, required : true, unique : false},
    password : {type : String, required : true},
    date : {type : Date, default : Date.now}

});

const UserInfo = mongoose.model('Users', userSchema, 'Users');

module.exports = UserInfo;