require.config({
  paths: {
    lib: 'bower_components/',
    text: 'lib/requirejs-text/text',
    jquery: 'lib/jquery/jquery',
    backbone: 'lib/backbone/backbone',
    marionette: 'lib/marionette/lib/backbone.marionette',
    handlebars: 'lib/handlebars/handlebars',
  },

  packages: [
    {name: 'app', location: 'scripts'},
    {name: 'deck', location: 'lib/musikata.deck'}
  ],

  shim: {
    'backbone': {
      deps: ['lodash', 'jquery'],
      exports: 'Backbone'
    },

    'marionette': {
      deps: ['backbone'],
      exports: 'Backbone.Marionette'
    },

    'handlebars': {
      exports: 'Handlebars'
    },
  }
});
