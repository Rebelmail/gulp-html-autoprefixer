'use strict';

var htmlAutoprefixer = require('html-autoprefixer');
var es = require('event-stream');

module.exports = function(autoprefixerConfig) {
  return es.map(function(file, done) {
    var htmlString = file.contents.toString();

    var prefixed = htmlAutoprefixer(autoprefixerConfig).process(htmlString);
    file.contents = new Buffer(prefixed);

    next();

    function next(err) {
      done(err, file);
    }
  });
}
