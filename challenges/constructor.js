// mde@zenefits.com

var Foo = function () {
    if (this === window) {
         throw new Error('Must use "new"');
    }
    this.$ = 'hello';
    this.b = true;
    this.c = 5;
};

var bar = Foo();