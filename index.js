const fs = require('fs');


module.exports.Plugin = TlsCertLoaderPlugin;

function TlsCertLoaderPlugin (script, events) {
  const pluginConfig = script.config.plugins['tls-cert-loader'];

  if (!pluginConfig) {
    throw new Error('Plugin: Plugin config node not found. Aborting.');
  }
  
  for (var attr in pluginConfig.config) {
      try {
        if (!script.config.tls) {
          script.config.tls = {};
        }
        script.config.tls[attr] = fs.readFileSync(pluginConfig.config[attr])
      } catch (e) {
        console.warn(e);
        console.error(`Unable to set config value: [${attr}] Path: [${pluginConfig.config[attr]}]`);
      }
  }
  return this;
};
