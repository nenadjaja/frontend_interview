var UrlsClass = function(urls) {
	if (this.window === this) {
		return new Error("You should use the word new!");
  }
	this.urls = urls;
};

// ["A", "B", "A", "C"] 
// getUrls(10) -> ["C", "A", "B"]

UrlsClass.prototype = {
	getUrl: function(n) {
		return this.urls[n];
	},

  addUrl: function(url) {
    this.urls.push(url);
  },

  getUrls: function(n) {
    var result = [];
    var uniques = {};  
    var len = this.urls.length;
    for (var ind=len-1; ind>=0; ind--) {
      if (!uniques[this.urls[ind]]) {
        uniques[this.urls[ind]] = true;
        result.push(this.urls[ind]);
      }
      if (result.length === n) {
        return result;
      }
    }
    return result;
  }
};

var urls = new UrlsClass(["A","B","A","C"]);
console.log(urls.getUrls(10));
console.log(urls.getUrls(2));
var urls2 = new UrlsClass(["A","A","A","D","D"]);
console.log(urls2.getUrls(10));
console.log(urls2.getUrls(2));


// hash = {"A": true, "B", true, "C": true}