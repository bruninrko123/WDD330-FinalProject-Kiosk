const mongoose = require('mongoose');

const lockerSchema = new mongoose.Schema({
  lockerNumber: Number,
  size: String,
  isFree: Boolean,
});

module.exports = mongoose.model("Locker", lockerSchema);


