// write a simple function to reverse a string in JS
function reverse1(str) {
	var arr = str.split("");
	var len = str.length;
	var result = [];
	if (len === 1) return str;
	for (var ind=0; ind<len; ind++) {
		result.push(arr[len-1-ind]);
	}
	return result.join("");
}

console.log(reverse1("ELEPHANT"));
console.log(reverse1("L"));
exports.reverse1 = reverse1;


function reverse2(str) {
	var len = str.length;
	var result = [];
	for (var ind=0; ind<len; ind++) {
		result.push(str.charAt(len-1-ind));
	}
	return result.join('');
}

console.log(reverse2("Happy"));
exports.reverse2 = reverse2;

function reverse3(str) {
	var len = str.length;
	var rev = '';
	for (var ind=0; ind<len; ind++) {
		rev += str.charAt(len-1-ind);
	}
	return rev;
}

console.log(reverse3("weather"));
exports.reverse2 = reverse2;

// more ideas: http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/

