_([
  '$inc',
  '$set',
  '$unset',
  '$addToSet',
  '$pop',
  '$pull',
  '$push'
]).each(function (operator) {
  UniCollection.UniDoc.prototype[operator] = function (setObj, options, callback) {
    var mod = {};
    setObj = setObj || {};
    mod[operator] = setObj;
    return this.update(mod, options, callback);
  };
});
