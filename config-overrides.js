module.exports = function override(config, env) {
  // Exclude react-photo-sphere-viewer from source map loader
  config.module.rules = config.module.rules.map((rule) => {
    if (rule.oneOf) {
      return {
        ...rule,
        oneOf: rule.oneOf.map((oneOfRule) => {
          if (
            oneOfRule.loader &&
            oneOfRule.loader.includes("source-map-loader")
          ) {
            return {
              ...oneOfRule,
              exclude: [
                ...(oneOfRule.exclude || []),
                /react-photo-sphere-viewer/,
              ],
            };
          }
          return oneOfRule;
        }),
      };
    }
    return rule;
  });

  return config;
};
