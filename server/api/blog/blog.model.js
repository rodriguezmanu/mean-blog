'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogSchema = new Schema({
  title: String,
  description: String,
  image: String,
  tag:  [String],
  active: Boolean
});

module.exports = mongoose.model('Blog', BlogSchema);