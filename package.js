Package.describe({
  summary: "Provides Collection Name, Schema, and Schema Keys",
  version: "0.0.1",
  name: "bads:core-lib"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@0.9.2-rc1');
  api.use([
    'underscore',
    'bads:doc-ctrl'
  ]);
  api.add_files(['namespace.js'], ['client', 'server']);
  api.add_files(['namespace_client.js'], 'client');
  api.add_files(['namespace_server.js'], 'server');
  api.export([
    'json_control',
    'DATA',
    'ODATA',
    'LDATA',
    "ses",
    'sesp',
    'img_p',
    'key_obj',
    'subscription',
    'Mu'
  ]);
});

Package.on_test(function (api) {
  api.use("bads:core-lib");

  api.add_files('core-lib_tests.js', ['client', 'server']);
});
