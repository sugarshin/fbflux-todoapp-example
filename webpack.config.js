const path = require('path');
const stylintConfig = require('./config/stylint.config');

const production = process.env.NODE_ENV === 'production';
const cssModules = 'modules&importLoaders=1&localIdentName=[path][name]__[local]___[hash:base64:8]';
const cssLoader = production ?
  `css-loader?minimize&${cssModules}` : `css-loader?${cssModules}`;

module.exports = {
  entry: [
    './src/index',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: production ? 'app-[hash].js' : 'app.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    preLoaders: [
      {
        test: /\.styl$/,
        loader: 'stylint',
        query: stylintConfig,
        exclude: /node_modules/,
      },
      {
        test: /\.js(x?)$/,
        loader: 'eslint',
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['es2015', 'react'] },
        include: __dirname
      },
      {
        test: /\.styl$/,
        loaders: ['style', cssLoader, 'postcss-loader', 'stylus']
      }
    ]
  },
  postcss: () => [
    require('autoprefixer')({ browsers: ['last 4 versions'] }),
    require('css-mqpacker')()
  ],
  eslint: { configFile: '.eslintrc' }
}
