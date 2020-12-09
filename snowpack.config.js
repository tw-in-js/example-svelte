/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: ['@snowpack/plugin-svelte'],
  install: [
    /* ... */
  ],
  installOptions: {
    packageLookupFields: ['esnext'],
    installTypes: true,
    rollup: {
      context: 'self',
    },
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: '/',
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
}
