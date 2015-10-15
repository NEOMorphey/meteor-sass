Package.describe({
  name: 'neomorphey:sass',
  summary: 'Style with attitude and autoprefixer.',
  version: "1.0.0",
  git: "https://github.com/NEOMorphey/meteor-foundation-apps.git"
});

// This is originally from fourseven/meteor-scss
// https://github.com/fourseven/meteor-scss/blob/master/package.js
Package._transitional_registerBuildPlugin({
  name: 'neomorphey:sass',
  sources: [
    'plugin/compile-scss.js'
  ],
  npmDependencies: {
    'node-sass': '1.1.4',
    'lodash': '2.4.1',
    'autoprefixer-core': '3.1.0',
  }
});

Package.on_test(function (api) {
  api.use(['test-helpers',
           'tinytest',
           'jquery',
           'templating']);
  api.use(['neomorphey:sass']);
  api.add_files(['test/scss_tests.html', 'test/scss_tests.js'], 'client');
  api.add_files(['test/scss_tests.scss'], 'client',  {isTest:true});
});
