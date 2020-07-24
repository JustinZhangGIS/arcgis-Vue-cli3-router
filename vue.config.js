const ArcGISPlugin = require("@arcgis/webpack-plugin");
const path = require('path');
module.exports = {

  //runtimeCompiler: false
  chainWebpack: config => {
    // config.resolve.symlinks(false);
    // config.resolve.set('symlinks', false);
    config.module.rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.configFile = path.resolve(__dirname, ".eslintrc");
        return options;
      });
    config.module.rule('strreplace').test(/\.js$/).use('string-replace-loader').loader('string-replace-loader').options({
      search: "dojo/domReady!",
      replace: "dojo/ready"
    });
    config.module.rule('fonts').use('url-loader').options({
      limit: 4096,
      fallback: {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[hash:8].[ext]',
          esModule: false
        }
      }
    });
    config.module.rule('images').use('url-loader').options({
      limit: 4096,
      fallback: {
        loader: 'file-loader',
        options: {
          name: 'img/[name].[hash:8].[ext]',
          esModule: false
        }
      }
    });
    config.module.rule('svg').use('file-loader').options({
      name: 'img/[name].[hash:8].[ext]',
      esModule: false
    });
    config.module.rule('media').use('url-loader').options({
      limit: 4096,
      fallback: {
        loader: 'file-loader',
        options: {
          name: 'media/[name].[hash:8].[ext]',
          esModule: false
        }
      }
    })
  },
  css: {
    loaderOptions: {
      postcss: {
        config: {
          path: __dirname
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new ArcGISPlugin({
        useDefaultAssetLoaders: false
      }),
    ],
    node: {
      //process: false,
      global: false,
      //fs: "empty"
    },
    optimization: {
      minimize: true,
      splitChunks: {
        minChunks: Infinity,
        chunks: 'all',
      }
    }
  },
  publicPath: process.env.NODE_ENV === 'production' ? "./" : '/'
  // publicPath: ''

  // configureWebpack: {
  //   devServer: {
  //     overlay: {
  //       warnings: false,
  //       errors: false
  //     },
  //     lintOnSave: false
  //   }
  // }
  // integrity: true,
  // configureWebpack: {
  //   devServer: {
  //     inline: false,
  //         watchOptions: {
  //           poll: true
  //         }
  //   }
  // }
}