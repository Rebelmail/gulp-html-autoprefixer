# gulp-html-autoprefixer

![gulp-html-autoprefixer](../master/gulp-html-autoprefixer.png?raw=true)

[Gulp](http://gulpjs.com/) plugin to Autoprefix all CSS inside an html page - CSS inside style tags and inside style attributes. Uses [html-autoprefixer](http://github.com/rebelmail/html-autoprefixer) under the hood.

[![NPM version](https://badge.fury.io/js/gulp-html-autoprefixer.png)](http://badge.fury.io/js/gulp-html-autoprefixer)

```javascript
var gulp = require( "gulp" );
var htmlAutoprefixer = require( "gulp-html-autoprefixer" );

gulp.task( "html-autoprefix", function( ) {
  return gulp.src( "./path/to/index-or-other.html" )
    .pipe( htmlAutoprefixer( ) )
    .pipe( gulp.dest( "dist" ) );
} );
```

## Installation

```
npm install gulp-html-autoprefixer --save-dev
```

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Added some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

