Package.describe({
  summary: 'A collection Bootswatch themes for Bootstrap-Themer',
  name: 'tap:meteorstrap-bootswatch',
  version: '0.1.1',
  git: 'https://github.com/TAPevents/meteorstrap-bootswatch'
});

Package.on_use(function(api) {

  api.versionsFrom('1.1.0.3');

  api.use([
    'coffeescript'
  ], ['server']);

  api.use([
    'tap:meteorstrap@0.1.0'
  ], ['server'], {weak: true});

  // Bootstrap Server-side assets
  api.add_files([
    // bootswatch themes
    'themes/cerulean/bootswatch.less',
    'themes/cerulean/variables.less',
    'themes/cosmo/bootswatch.less',
    'themes/cosmo/variables.less',
    'themes/cyborg/bootswatch.less',
    'themes/cyborg/variables.less',
    'themes/darkly/bootswatch.less',
    'themes/darkly/variables.less',
    'themes/flatly/bootswatch.less',
    'themes/flatly/variables.less',
    'themes/journal/bootswatch.less',
    'themes/journal/variables.less',
    'themes/lumen/bootswatch.less',
    'themes/lumen/variables.less',
    'themes/paper/bootswatch.less',
    'themes/paper/variables.less',
    'themes/readable/bootswatch.less',
    'themes/readable/variables.less',
    'themes/sandstone/bootswatch.less',
    'themes/sandstone/variables.less',
    'themes/simplex/bootswatch.less',
    'themes/simplex/variables.less',
    'themes/slate/bootswatch.less',
    'themes/slate/variables.less',
    'themes/spacelab/bootswatch.less',
    'themes/spacelab/variables.less',
    'themes/superhero/bootswatch.less',
    'themes/superhero/variables.less',
    'themes/united/bootswatch.less',
    'themes/united/variables.less',
    'themes/yeti/bootswatch.less',
    'themes/yeti/variables.less'
  ], "server");

  api.add_files([
    'bootswatch-themes.coffee'
  ], "server");


});
