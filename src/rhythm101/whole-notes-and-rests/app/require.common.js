require.config({
  paths: {
    text: 'bower_components/requirejs-text/text',
    jquery: 'bower_components/jquery/jquery',
    underscore: 'bower_components/underscore/underscore',
    backbone: 'bower_components/backbone/backbone',
    marionette: 'bower_components/marionette/lib/backbone.marionette',
    handlebars: 'bower_components/handlebars/handlebars',
  },

  packages: [
    {name: 'app', location: 'scripts'},
    {name: 'deck', location: 'bower_components/musikata.deck/src'}
  ],

  shim: {
    'underscore': {
      exports: '_'
    },

    'backbone': {
      deps: ['underscore', 'jquery'],
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
