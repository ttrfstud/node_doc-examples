var a = require('./a1');
a.on('ready', function () {
	console.log('module a is ready');
});

console.log('if i am invoked after "module a is ready" this is because node first waits for timeout in module. otherwise it waits for the module timeout in the calling module.');