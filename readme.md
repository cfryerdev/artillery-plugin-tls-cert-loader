# Artillery.io Plugin: TLS Cert Loader
This plugin is intended to be used to attach tls cert files to requests. Should work with CERT, PFX, KEY, CA, and others.

Note: This plugin will take the plugin.config properties, load the files provided, and then append to the config.tls node with the same name. Anything already there will be replaced.

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
        ca: "..."
        cert: "..."
        key: "..."
```

Thats it, run your script!