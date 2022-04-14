const fs = require('fs');

module.exports = ({ tls }, ee) => {
  if (!tls) {
    console.error('Plugin: TLS config node not found. Aborting.')
    return this;
  }
  for (var attr in tls) {
      try {
        tls[attr] = fs.readFileSync(tls[attr])
      } catch (e) {
          console.error(`Unable to load [${attr}] from [${tls[attr]}]`);
      }
  }
  return this;
}