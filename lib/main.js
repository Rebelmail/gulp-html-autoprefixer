"use strict";

var
htmlAutoprefixer = require( "html-autoprefixer" ),
es = require( "event-stream" );

module.exports = function( ) {
  return es.map( function( file, done ) {
    var htmlString = file.contents.toString( );

    var res = htmlAutoprefixer.process( htmlString );
    file.contents = new Buffer( res.html );

    next( );

    function next( err ) {
      done(err, file);
    }

  } );
}
