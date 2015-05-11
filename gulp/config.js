var dest = './build';
var src = './src';

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    module: {
      loaders: [{
        test:  /\.js$/, loader: 'jsx-loader'
      }]
    },
    resolve: {
      extensions: ['', '.js']
    }
  },

  copy: {
    src: [
      src + '/www/index.html'
    ],
    dest: dest
  }
}