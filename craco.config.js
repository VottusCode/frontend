const path = require("path");

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      paths.appBuild = webpackConfig.output.path = path.resolve(
        process.env.BUILD_PATH ?? "dist"
      );
      return webpackConfig;
    },
  },
};
