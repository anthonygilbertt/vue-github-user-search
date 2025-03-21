module.exports = {
  chainWebpack: config => {
    config.resolve.alias.delete('vue')
  }
}