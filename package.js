Package.describe({
    name: "orikami:boilerplate-generator",
    version: "0.0.1",
    summary: "boilerplate-generator package",
    git: "https://github.com/dreamyourweb/boilerplate-generator.git",
    documentation: "README.md"
});

Package.onUse(api => {
  api.use('ecmascript');
  api.use([
    'underscore',
  ], 'server');
  api.mainModule('generator.js', 'server');
  api.export('Boilerplate', 'server');
});