# Artillery.io Plugin: TLS Cert Loader
This plugin is intended to be used to attach tls cert files to requests. Should work with CERT, PFX, KEY, CA, and others.

### How to add to your project

First off install the package...

```bash
npm i artillery-plugin-tls-cert-loader
```

Add the plugin to your artillery script and reference your file to load...

```bash
config:
  tls:
    rejectUnauthorized: false
  plugins:
    tls-cert-loader:
      config:
        pfx: "./path/to/file.pfx"
```

Thats it, run your script!