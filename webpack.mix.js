const { mix } = require('laravel-mix');


mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    .sourceMaps();


var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
    plugins: [
        new LiveReloadPlugin({
            hostname: 'brownsweb2017.dev'
        })
    ]
});