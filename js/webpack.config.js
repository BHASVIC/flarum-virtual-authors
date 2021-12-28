const { merge } = require('webpack-merge');

const config = require('flarum-webpack-config')();

const prodConfig = {
  devtool: false,
};

module.exports = (env, args) => {
  return merge(config, args.mode === 'production' ? prodConfig : {});
};
