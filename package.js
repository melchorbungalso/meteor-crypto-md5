Package.describe({
  name: 'melchorbungalso:crypto-md5',
  summary: "MD5 Package for Crypto.js, standard secure algorithms",
  version: '1.0.0',
  git: ' /* Fill me in! */ '
});

Package.onUse(function (api) {
  api.versionsFrom('1.0.2.1');
  api.use('ianpogi5:crypto-base', ['client', 'server']);
  api.imply('ianpogi5:crypto-base', ['client', 'server']);

  api.addFiles('md5.js', ['client', 'server']);
});
