module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  devServer:{
    proxy: {
      "^/first": {
         target: 'http://192.168.50.213:8082',
         changeOrigin: true
      }
    }
  }
}
