var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.jsx',
  output: { path: path.join(__dirname, 'dist'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  // ブラウザの開発ツールでソースマップを確認できるようにする
  devtool: '#cheap-module-eval-source-map',
  
  // webpack-dev-server用の設定
  devServer: {
    contentBase: './dist', // サーバーが見に行くディレクトリ
    inline: true,
    port: 8080, // ポート設定
    host:"0.0.0.0" // ※ dockerのコンテナで立てたサーバが他のホストからアクセスできるように全てのネットワークインターフェースに接続
  }
}