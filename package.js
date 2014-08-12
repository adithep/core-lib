Package.describe({
  summary: "Provides Collection Name, Schema, and Schema Keys",
  version: "0.0.1"
});

Package.on_use(function (api, where) {
  api.versionsFrom("METEOR-CORE@0.9.0-atm");
  api.use([
    'underscore',
    'bads:doc-ctrl'
  ]);
  api.add_files(['namespace.js'], ['client', 'server']);
  api.add_files(['namespace_client.js'], 'client');
  api.export([
    'json_control',
    'DATA',
    'ODATA',
    'LDATA',
    "ses",
    'sesp',
    'subscription',
    'Mu'
  ]);
});

Package.on_test(function (api) {
  api.use("../packages/bads:core-lib");

  api.add_files('core-lib_tests.js', ['client', 'server']);
});
