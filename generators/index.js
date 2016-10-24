/**
 * generator/index.js
 *
 * Exports the generators so plop knows them
 */

const componentGenerator = require('./component/index.js');
const sharedComponentGenerator = require('./shared/index.js');

module.exports = function (plop) {
    plop.setGenerator('component', componentGenerator);
    plop.setGenerator('shared', sharedComponentGenerator);
};

