var foo = function() {
	var a = '12';
	var bar = function(b) {
		console.log(a + b);
	};
	return bar;
};

var boo = foo();
boo(5);	// returns '125'

var someAsyncFunc = function(cb) {
	setTimeout(function() {
		cb('3');	// returns '123'
	},0);
};

someAsyncFunc(boo);