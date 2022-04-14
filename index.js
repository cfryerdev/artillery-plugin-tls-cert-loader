const fs = require('fs');


module.exports.Plugin = TlsCertLoaderPlugin;

function TlsCertLoaderPlugin (script, events) {
  const config = script.config.plugins['tls-cert-loader'];

  if (!config) {
    throw new Error('Plugin: Plugin config node not found. Aborting.');
  }
  
  console.log('config', config);
  console.log('script.config', script.config);
  for (var attr in config) {
      try {
        script.config.tls[attr] = fs.readFileSync(config[attr])
      } catch (e) {
          console.error(`Unable to load [${attr}] from [${config[attr]}]`);
      }
  }
  return this;
};
