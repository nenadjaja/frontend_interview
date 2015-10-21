// example of creating a class in JS
function Book() {}		// empty 'constructor'
function Book(title, author) {	// non empty constructor
	this.title = title;
	this.author = author;

	// put a method in here too
	this.printAuthor = function() {
		console.log(this.author);
	};
}

// add properties/attributes to prototype property
Book.prototype.title = '';


// add methods
Book.prototype.printTitle = function() {
	console.log(this.title);
};


// create a new instance of the class Book
book1 = new Book("American Prometheus", "Kai Bird and Martin J. Sherwin");

console.log(book1.title);
console.log(book1.author);
console.log(Book.prototype);

// test if an object has a certain property
console.log(Book.hasOwnProperty("author"));		// false ??
console.log(book1.hasOwnProperty("author"));	// true

// all objects created with 'new' have a constructor property
console.log(book1.constructor);
console.log(Book.prototype.constructor);