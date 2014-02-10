for (var i = 0; i < 5000; i++) {
	(function (i) {
		if (i === 4999) {
			i = 10000;
		}

		setTimeout(function () {
			console.log(i);
		},i).unref();
	}(i));
}