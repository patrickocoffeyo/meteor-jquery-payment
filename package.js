Package.describe({
  summary: "A general purpose library for building credit card forms, validating inputs and formatting numbers."
});

Package.on_use(function (api) {
  api.add_files([
    'lib/jquery.payment.js',
    ], 'client');
});
