let mongoose    = require('mongoose')
,   mongooseUrl = require('mongoose-type-url')
,   errors      = require('../constants/errors')
,   Promise     = require('bluebird')
,   Schema      = mongoose.Schema;

function UrlModel () {

  let UrlSchema = new Schema({
    name: {
      type: mongoose.SchemaTypes.Url,
      required: true,
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
    return this.findOne({_id: id}).then(url => {
      if(!url) return Promise.reject(errors.NOT_FOUND);

      return url;
    });
  }

  UrlSchema.statics.insert = function(url) {
    return this.create(url);
  }

  UrlSchema.statics.update = function(id, newUrl) {
    return this.findOne({_id: id})
    .then((url) => {
      if(!url) return Promise.reject(errors.NOT_FOUND);

      Object.assign(url, newUrl);

      return url.save();
    });
  }

  UrlSchema.statics.remove = function(id) {
    return this.findOneAndRemove({_id: id})
    .then(() => {
      return false;
    });
  }

  UrlSchema.statics.findByName = function(name) {
    return this.findOne({name: name}).then(url => {
      if(!url) return Promise.reject(errors.NOT_FOUND);

      return url;
    });
  }

  UrlSchema.statics.findByShort = function(short) {
    return this.findOne({short: short})
    .then((url) => {
      if(!url) return Promise.reject(errors.NOT_FOUND);

      url.clicks++;
      return url.save();
    });
  }

  return UrlSchema;
}

module.exports = mongoose.model('Url', new UrlModel());
