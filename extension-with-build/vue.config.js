const path = require('path')
module.exports = {
  css: {
    extract: false,
  },
  runtimeCompiler: true,
  parallel: true,
  publicPath: process.env.VUE_APP_CORDOVA ? '' : '/',
  lintOnSave: true,
  transpileDependencies: ['vue-clamp', 'resize-detector'],
  devServer: {
    // public: 'https://localhost:8080/',
    contentBase: './dist',
    hot: true,
    
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
        // './locale': 'moment/locale'
      }
    },
    entry: [
      'core-js/modules/es.promise',
      'core-js/modules/es.array.iterator',
      path.resolve(__dirname, 'src/main.js')
    ],
  },

  chainWebpack: (config) => {
    config.plugins.delete('prefetch')

    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
      .end()
      .end()
      .oneOf('external')
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      })
  },

  pwa: {
    name: 'App Quo',
    themeColor: '#2196F3',
    msTileColor: '#4DBA87',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/sw.js'
      // ...other Workbox options...
    }
  },

  pluginOptions: {
    cordovaPath: 'cordova'
  }
}
