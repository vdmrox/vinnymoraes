var ProvidePlugin = require('webpack').ProvidePlugin;
var path = require('path'); 
var autoprefixer = require('autoprefixer');

module.exports = {
    entry: [
        './js/app.js'
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel'
        }, {
            test: /\.html$/,
            loader: 'file?name=[name].[ext]'
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loaders: [
                'file?hash=sha512&digest=hex&name=[name][hash].[ext]',
                'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
            ]
        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        }]
    },
    postcss: function() {
        return [autoprefixer];
    },
    plugins: [
        new ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery',
            "windows.jQuery": 'jquery',
        })
    ],
    resolve: {
        extensions: ['', '.js', '.css'],
        alias: {
            "images": path.resolve(
                __dirname,
                "images"
            ),  
            "scrollTo": path.resolve(
                __dirname,
                "node_modules/jquery.scrollto/jquery.scrollTo.min"
            ),
            "waypoints": path.resolve(
                __dirname,
                "node_modules/waypoints/lib/jquery.waypoints.min"
            ),
        }
    }
};
