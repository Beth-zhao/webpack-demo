const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, './dist'),
    },
    module: {
      rules: [
        {
            test: /\.css$/,
            loaders:ExtractTextPlugin.extract({
                use: ['css-loader'] //loader的执行顺序是由后到前
            })
        }
      ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`,
        }),
    ],
};
