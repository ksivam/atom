var WordCountPkgView;

module.exports = WordCountPkgView = (function() {
  function WordCountPkgView(serializedState) {
    var message;
    this.element = document.createElement('div');
    this.element.classList.add('word-count-pkg');
    message = document.createElement('div');
    message.textContent = "The WordCountPkg package is Alive! It's ALIVE!";
    message.classList.add('message');
    this.element.appendChild(message);
  }

  WordCountPkgView.prototype.serialize = function() {};

  WordCountPkgView.prototype.destroy = function() {
    return this.element.remove();
  };

  WordCountPkgView.prototype.getElement = function() {
    return this.element;
  };

  WordCountPkgView.prototype.setCount = function(count) {
    var displayText;
    displayText = "There are " + count + " words.";
    return this.element.children[0].textContent = displayText;
  };

  return WordCountPkgView;

})();
