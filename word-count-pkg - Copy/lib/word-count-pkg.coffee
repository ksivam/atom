WordCountPkgView = require './word-count-pkg-view'
{CompositeDisposable} = require 'atom'

module.exports = WordCountPkg =
  wordCountPkgView: null
  modalPanel: null
  subscriptions: null

  activate: (state) ->
    @wordCountPkgView = new WordCountPkgView(state.wordCountPkgViewState)
    @modalPanel = atom.workspace.addModalPanel(item: @wordCountPkgView.getElement(), visible: false)

    # Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    @subscriptions = new CompositeDisposable

    # Register command that toggles this view
    @subscriptions.add atom.commands.add 'atom-workspace', 'word-count-pkg:toggle': => @toggle()

  deactivate: ->
    @modalPanel.destroy()
    @subscriptions.dispose()
    @wordCountPkgView.destroy()

  serialize: ->
    wordCountPkgViewState: @wordCountPkgView.serialize()

  toggle: ->
    if @modalPanel.isVisible()
      console.log 'WordCountPkg was toggled!'
      @modalPanel.hide()
    else
      editor = atom.workspace.getActiveTextEditor()
      words = editor.getText().split(/\s+/).length
      @wordCountPkgView.setCount(words)
      console.log 'WordCountPkg was toggled!: ' + process.versions
      @modalPanel.show()
