module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'https://belle-livre-48148.herokuapp.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    }
  }