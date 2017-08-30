const path = require('path');
const express = require('express');

// dotenv is NOT loaded in config, since it's common to both
// the backend and webui
require('dotenv').config();
const config = require('../config')();

function setViews(app) {
    // view template(s)
    app.set('views', path.join(__dirname, '../app/templates'));
    app.set('view engine', 'ejs');

    app.get('/', (req, res) => {
        return res.render('index', {
            title: config.app.title
        });
    });

    // serve the web UI at /
    app.use(express.static(path.join(__dirname, '../static')));
}

function setApiMethods(app) {
    app.use('/api', (req, res) => {
        return res.status(404).end('Please specify an API endpoint');
    });
}

function server() {
    const app = express();

    setViews(app);

    setApiMethods(app);

    // catch 404 errors
    app.use((req, res) => res.status(404).end('not found'));

    const port = process.env.PORT || 3000;

    return new Promise(resolve => {
        app.listen(port, () => {
            resolve({ app, port });
        });
    });
}

module.exports = {
    server
};
