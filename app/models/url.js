let mongoose  = require('mongoose')
,   Schema    = mongoose.Schema;

let UrlSchema = new Schema({
  name: String,
  short: String,
  clicks: Number
});

module.exports = mongoose.model('Url', UrlSchema);
