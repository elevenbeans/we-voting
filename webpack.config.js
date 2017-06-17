var webpack = require('webpack');
var path = require('path');

var CDN_URL = '';
var EXTERNALS = { // dev 这里应该不加 react 和 react-dom 的 external, build 要加
  'react': 'window.React',
  'react-dom': 'window.ReactDOM'
};

console.log('process.env.NODE_ENV in webpack config::::', process.env.NODE_ENV);

if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev-HMR';

if (process.env.NODE_ENV === 'dev-HMR') {
  CDN_URL = 'http://localhost:8088/';
}
if (process.env.NODE_ENV === 'pre') CDN_URL = '//localhost:5000/';
if (process.env.NODE_ENV === 'production') CDN_URL = 'https://we-voting-ele.herokuapp.com/';

var config = {
  entry: {
    vote: [
      './client/index.jsx'
    ],
    router: ['react-router'] // CommonsChunkPlugin
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: CDN_URL + 'dist/', // 静态资源文件内的请求路径指向静态资源服务器
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js'
  },
  externals: EXTERNALS,
  devtool: process.env.NODE_ENV === 'dev-HMR' ? 'eval-source-map' : '',
  module: {
    loaders: [
      {
        test: /\.js$|\.jsx$/,
        // exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(), // 比对id的使用频率和分布来得出最短的id分配给使用频率高的模块
    new webpack.HotModuleReplacementPlugin(), // 同命令行中的 --hot

    new webpack.optimize.CommonsChunkPlugin('router', '[name].bundle.js'), // CommonsChunk
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false // remove all comments
      }
    }),
    new webpack.DefinePlugin({
      // The DefinePlugin allows you to create global constants which can be configured at compile time.
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
  resolve: {
    root: path.resolve(__dirname, './client'),
    fallback: [path.resolve(__dirname, './node_modules')],
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    hot: process.env.NODE_ENV === 'dev-HMR',
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' }
  }
};

module.exports = config;
