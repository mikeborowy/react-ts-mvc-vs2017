var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var pkg = require('./package.json');

// bundle dependencies in separate vendor bundle
//var vendorPackages = Object.keys(pkg.dependencies).filter(function (el) {
//    return el.indexOf('font') === -1; // exclude font packages from vendor bundle
//});

/*
 * Default webpack configuration for development
 */
var config = {
    devtool: 'eval-source-map',
    cache: true,
    entry: {
        app: path.join(__dirname, "app", "index.js")
    },
    output: {
        path: path.join(__dirname, "Scripts"),
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.Webpack.js', '.web.js', '.ts', '.js', '.tsx']
    },
    plugins: [
        new webpack.OldWatchingPlugin(),  //needed to make watch work. see http://stackoverflow.com/a/29292578/1434764
        //new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.js")
    ],
    resolveLoader: {
        'fallback': path.join(__dirname, 'node_modules')
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                exclude: /(node_modules)/,
                loader: "json-loader"
            },
            // Font Definitions
            { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff&name=../fonts/[name].[ext]' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=../fonts/[name].[ext]' },
            { test: /\.[ot]tf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream&name=../fonts/[name].[ext]' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml&name=../fonts/[name].[ext]' },
            //Images
            {
                test: /\.(jpg|jpeg|gif|png)$/,
                exclude: /(node_modules)/,
                loader: "file-loader?name=../Images/[name].[ext]"
            }
        ]
    }
}

/*
 * If bundling for production, optimize output
 */
if (process.env.NODE_ENV === 'production') {
    config.devtool = false;

    config.plugins = [
        new webpack.optimize.OccurenceOrderPlugin(),

        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: { warnings: false }
        }),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: JSON.stringify('production') }
        })
    ];
};

module.exports = config;
