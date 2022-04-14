const fs = require('fs');


module.exports.Plugin = TlsCertLoaderPlugin;

function TlsCertLoaderPlugin ({ tls }, events) {
  console.log('this', this);
  const self = this;
  if (!self.config.tls) {
    throw new Error('Plugin: TLS config node not found. Aborting.');
  }
  
  for (var attr in self.config.tls) {
      try {
        this.config.tls[attr] = fs.readFileSync(tls[attr])
      } catch (e) {
          console.error(`Unable to load [${attr}] from [${tls[attr]}]`);
      }
  }
  return this;
};
