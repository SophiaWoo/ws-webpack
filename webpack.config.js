const dev = require('./webpack-config/dev.js');
const build = require('./webpack-config/build.js');

let finalModule = {};

let ENV = process.env.NODE_ENV;

switch(ENV) {
    case 'dev':
        finalModule = dev;
        break;
    case 'build':
        finalModule = build;
        break;
    default:
        finalModule = dev;
}

module.exports = finalModule;
