function SimplePromise() {
  this.successFns = [];
  this.failureFns = [];
  
  this.resolved = false;
  this.status = 'pending';
  this.result = null;
}

SimplePromise.prototype.then = function(successfn, failurefn) {
  if (this.resolved) {
    if (this.status === 'success') {
        successfn(this.result);
    } else if (this.status === 'rejected') {
        failurefn(this.result);
    }
  } else {
    this.successFns.push(successfn);
    this.failureFns.push(failurefn);
  }
  return this;
};

SimplePromise.prototype.resolve = function (result) {
  var len = successFns.length;
  for (var ind=0; ind<len; ind++) {
    this.successFns[ind](result);
  }
  this.resolved = true;
  this.result = result;
  this.status = 'success';
};

SimplePromise.prototype.reject = function (error) {
  var len = failureFns.length;
  for (var ind=0; ind<len; ind++) {
    this.failureFns[ind](error);
  }
  this.resolved = true;
  this.result = error;
  this.status = 'rejected';
};

fs.readFileSync('test.jpg', function(err, data) {
  if(err) {
  // handle the error
  }
  // Do something with the data
}

readFilePromise('test.jpg').then(function(data) {
  // Success with data
}, function(err) {
    // Error
});

function readFilePromise(filepath) {
  var promise = new SimplePromise();  
  fs.readFileSync('test.jpg', function(err, data) {
    if(err) {
      return promise.reject(err);
    }  
    promise.resolve(data);   
  });
  return promise;
}

function readFilePromise(filepath) {
  var promise = new SimplePromise(function(resolve, reject) {
    fs.readFileSync('test.jpg', function(err, data) {
      if(err) {
        return reject(err);
      }
      resolve(data);   
    });
  });
  return promise;
}
