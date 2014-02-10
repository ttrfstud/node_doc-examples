require('C:\\Users\\User\\Desktop\\node_doc-examples\\modules\\i1');

console.log(require('C:\\Users\\User\\Desktop\\node_doc-examples\\modules\\json'));

// console.log('require cache before', require.cache);

delete require.cache[Object.keys(require.cache)[0]];
// console.log('require cache after', require.cache);
require('./i1');
require('C:\\Users\\User\\Desktop\\node_doc-examples\\modules\\i1');

console.log('zero key', Object.keys(require.cache)[0]);
// console.log('obj at zero key', require.cache[Object.keys(require.cache)[0]]);

require('i1');