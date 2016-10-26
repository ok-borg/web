Function.prototype.bind = require('function-bind');

const context = require.context('./src', true, /.+\.spec\.tsx?$/);
context.keys().forEach(context);
module.exports = context;