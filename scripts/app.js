requirejs.config({
    baseUrl: '/design-guide/scripts',
    paths: {
        jquery: 'lib/jquery-2.1.4.min',
        jquerym: 'lib/jquery.mobile.custom.min',
        underscore: 'lib/underscore.min',
    }
});

requirejs(["app/main"]);
