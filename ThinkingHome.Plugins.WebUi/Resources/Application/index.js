requirejs.config({
    urlArgs: 'bust=' + Date.now(),
    baseUrl: '/',
    paths: {
        text: 'vendor/js/require-text',
        json: 'vendor/js/require-json',

        lib: 'webapp/lib',
        json2: 'vendor/js/json2',
        jquery: 'vendor/js/jquery',
        underscore: 'vendor/js/underscore',
        backbone: 'vendor/js/backbone',
        'backbone.radio': 'vendor/js/backbone.radio',
        marionette: 'vendor/js/marionette'
    },
    shim: {
        json2: {
            exports: 'JSON'
        }
    }
});

require(['webapp/core/app', 'json!webapp/config.json'], function (application, config) {
    window.app = new application(config);
    window.app.start();
});
