// take string param and capitalize the first letter of each word
function letterCapitalize(text) {
	if (text.length === 0)
		return -1;
	txt_array = [];
	text.split(" ").forEach(function(word) {
		txt_array.push(word.charAt(0).toUpperCase() + word.slice(1, word.length));
	});
	return txt_array.join(" ");
}

console.log(letterCapitalize("have a good day"));
console.log(letterCapitalize(""));
console.log(letterCapitalize("word"));

// for jasmine tests
exports.letterCapitalize = letterCapitalize;


function titleCase(str) {
  var temp = str.split(" ");
  var result = "";
  temp.forEach(function(val) {
    result += val.charAt(0).toUpperCase() + val.substring(1,val.length).toLowerCase() + " ";
  });
  return result.trim();
}

console.log(titleCase("I'm a little tea pot"));