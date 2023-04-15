const vscode = require('vscode');
const axios = require('axios').default;
const Utils = require('./utils');

module.exports = async () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    vscode.window.showErrorMessage('There is no active text editor.');
    return
  }

  vscode.window.withProgress({
    location: vscode.ProgressLocation.Notification,
    title: 'Processing...',
    cancellable: false
  }, async () => {
    try {
      const selectedText = editor.document.getText(editor.selection);
      const url = `http://localhost:5000/generate?text=${selectedText}`
      const data = (await axios(url)).data;

      editor.edit(function (cb) {
        cb.replace(editor.selection, Utils.parseCode(data))
      })
    } catch (e) {
      vscode.window.showErrorMessage('Something went wrong. E: ' + e.toString())
    }
  });
}