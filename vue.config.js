'use strict'
const path = require('path');
const name = 'Open Admin'; // page title

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    name: name,
    resolve: {
      extensions: ['.ts', '.js', '.html'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
    // module: {
    //   rules: [
    //     {
    //       test: /\.html$/,
    //       loader: "vue-template-loader",
    //       options: {
    //         transformAssetUrls: {
    //           // The key should be an element name
    //           // The value should be an attribute name or an array of attribute names
    //           img: 'src'
    //         }
    //       },
    //       exclude: /index.html/
    //     },
    //   ]
    // }
  },
  chainWebpack: config => {
    config
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      );

    config.module
      .rule('html')
      .test(/\.html$/)
      .exclude
      .add(/index.html/)
      .end()
      .use('vue-template-loader')
      .loader('vue-template-loader')
      .tap(options => Object.assign({}, options, {
        transformAssetUrls: {
          // The key should be an element name
          // The value should be an attribute name or an array of attribute names
          img: 'src'
        }
      }))
      .end();

    config.module
      .rule('images')
      .use('url-loader')
      .loader('url-loader')
      .tap(options => Object.assign(options, { limit: 10240 }))
      .end();

  }
};