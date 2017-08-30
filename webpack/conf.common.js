const path = require('path');

const plugins = require('./plugin.common');

module.exports = {
    entry: ['./src/app/index'],
    output: {
        path: path.join(__dirname, '../build'),
        filename: 'js/bundle.js'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss']
    },
    plugins
};

