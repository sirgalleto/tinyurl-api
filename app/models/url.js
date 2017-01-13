let mongoose  = require('mongoose')
,   Schema    = mongoose.Schema;

var UrlSchema = new Schema({
  name: String,
  short: String,
  clicks: Number
});

module.exports = mongoose.model('Url', UrlSchema);
