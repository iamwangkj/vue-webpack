const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ip = require('ip')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development', // process.env.NODE_ENV === 'development'
  entry: path.resolve(__dirname, '../src/main.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].js'
    // publicPath: process.env.NODE_ENV === 'production' ? '../' : '../'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          MiniCssExtractPlugin.loader,
          'css-loader',
          // Compiles Sass to CSS
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('sass')
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/public/index.html')
    }),
    // css打包到指定文件夹
    new MiniCssExtractPlugin({
      filename: './css/[name].css'
    })
  ],
  devServer: {
    // 设置服务器访问的基本目录
    contentBase: path.resolve(__dirname, '../src/public'), // 最好设置成绝对路径
    // 设置服务器的ip地址,可以是localhost
    host: '0.0.0.0',
    // 设置端口
    port: 3000,
    // 设置自动拉起浏览器
    open: true,
    // 设置热更新
    hot: true,
    noInfo: true,
    proxy: {
      // '/api': 'http://localhost:3000'
    },
    onListening (server) {
      const { port } = server.listeningApp.address()
      const link = `http://${ip.address()}:${port}`
      console.log('预览地址：', link)
    }
  }
}
