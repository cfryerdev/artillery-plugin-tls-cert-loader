const fs = require('fs');

module.exports = ({ tls }, ee) => {
  if (!tls) {
    console.error('Plugin: TLS config node not found. Aborting.')
    return this;
  }
  for (const attr in tls) {
    tls[attr] = fs.readFileSync(tls[attr])
  }
  return this;
}