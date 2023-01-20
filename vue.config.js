const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: '/app-cervezas',
  transpileDependencies: [
    'vuetify'
  ]
})
