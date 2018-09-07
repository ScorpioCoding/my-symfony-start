let Encore = require('@symfony/webpack-encore')

Encore
  .setOutputPath('public/build/')
  .setPublicPath('/build')
  .cleanupOutputBeforeBuild()
  .autoProvidejQuery()
  //.autoProvideVariables()
  .enableSassLoader(function (sassOptions) {}, {
    resolveUrlLoader: false
  })
  .enableVersioning(false)
  .createSharedEntry('js/common', ['jquery'])
  .addEntry('js/app', './assets/js/app.js')
  .addStyleEntry('css/app', ['./assets/scss/app.scss'])

module.exports = Encore.getWebpackConfig()
