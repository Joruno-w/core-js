require('../../modules/es.object.to-string');
require('../../modules/esnext.string.code-points');
var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('String', 'codePoints');
