const {DefinePlugin} =require('webpack')
module.exports = {
    configureWebpack: {
        plugins:[
            new DefinePlugin({
                'baseUrl':'./'
            })
        ]
    }
  }