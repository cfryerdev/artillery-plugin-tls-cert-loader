const fs = require('fs');


module.exports.Plugin = TlsCertLoaderPlugin;

function TlsCertLoaderPlugin (script, events) {
  const self = this;
  self.config = script.config.plugins['tls-cert-loader'];

  if (!self.config.tls) {
    throw new Error('Plugin: TLS config node not found. Aborting.');
  }
  
  console.log('tls', self.config.tls)
  for (var attr in self.config.tls) {
      try {
        script.config.tls[attr] = fs.readFileSync(self.config.tls[attr])
      } catch (e) {
          console.error(`Unable to load [${attr}] from [${tls[attr]}]`);
      }
  }
  return this;
};
