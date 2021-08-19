const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String },
  lastName: { type: String, required: true },
  rollnum: { type: Number },
  uname: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  date: { type: Date, default: Date.now },
});

const UserInfo = mongoose.model('Users', userSchema, 'Users');

module.exports = UserInfo;
