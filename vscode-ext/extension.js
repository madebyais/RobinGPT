// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const commands = require('./src/cmd.index');

// This method is called for registering all available commands

/**
 * @param {vscode.ExtensionContext} context
 */
function register(context) {
	commands.forEach(command => {
    context.subscriptions.push(
      vscode
				.commands
				.registerCommand(
					`robin-gpt.${command}`,
					require(`./src/cmd.${command}`
				))
    );
  });
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "robin-gpt" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('robin-gpt.generate', function () {
	// 	// The code you place here will be executed every time your command is executed

	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from RobinGPT!');
	// });

	// context.subscriptions.push(commands.GENERATE);

	register(context);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
