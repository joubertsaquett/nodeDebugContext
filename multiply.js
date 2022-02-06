const debug = require('debug')('api:multiply');

module.exports = {

    multiply(...args) {
        debug('running multiply on', ...args);
        return args.reduce((prev, next) => prev * next, 0)
    }

}