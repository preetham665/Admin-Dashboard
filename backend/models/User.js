const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  fullName: { type: String },
  email: { type: String, required: true },
  phone: { type: String },
  address: { type: String },
  avatar: { type: String },
  jobTitle: { type: String },
  birthDate: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
