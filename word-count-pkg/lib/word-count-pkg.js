var CompositeDisposable, WordCountPkg, WordCountPkgView;

WordCountPkgView = require('./word-count-pkg-view');

CompositeDisposable = require('atom').CompositeDisposable;

module.exports = WordCountPkg = {
  wordCountPkgView: null,
  modalPanel: null,
  subscriptions: null,
  activate: function(state) {
    this.wordCountPkgView = new WordCountPkgView(state.wordCountPkgViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.wordCountPkgView.getElement(),
      visible: false
    });
    this.subscriptions = new CompositeDisposable;
    return this.subscriptions.add(atom.commands.add('atom-workspace', {
      'word-count-pkg:toggle': (function(_this) {
        return function() {
          return _this.toggle();
        };
      })(this)
    }));
  },
  deactivate: function() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    return this.wordCountPkgView.destroy();
  },
  serialize: function() {
    return {
      wordCountPkgViewState: this.wordCountPkgView.serialize()
    };
  },
  toggle: function() {
    var editor, words;
    if (this.modalPanel.isVisible()) {
      console.log('WordCountPkg was toggled!');
      return this.modalPanel.hide();
    } else {
      editor = atom.workspace.getActiveTextEditor();
      words = editor.getText().split(/\s+/).length;
      this.wordCountPkgView.setCount(words);
      console.log('WordCountPkg was toggled!: ' + process.versions);
      return this.modalPanel.show();
    }
  }
};
