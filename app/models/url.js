let mongoose  = require('mongoose')
,   Schema    = mongoose.Schema;

function UrlModel () {

  let UrlSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    short: {
      type: String,
      unique: true,
      required: true
    },
    clicks: {
      type: Number,
      required: true
    }
  });

  UrlSchema.statics.list = function() {
    return this.find();
  }

  UrlSchema.statics.findById = function(id) {
    return this.findById(id);
  }

  UrlSchema.statics.insert = function(url) {
    return this.create(url);
  }

  UrlSchema.statics.update = function(id, newUrl) {
    return this.findOne({_id: id})
              .then((url) => {
                Object.assign(url, newUrl);

                return url.save();
              });
  }

  UrlSchema.statics.remove = function() {

  }

  return UrlSchema;
}

module.exports = mongoose.model('Url', new UrlModel());
