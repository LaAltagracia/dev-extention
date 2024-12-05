const vscode = require('vscode');

function activate(context) {
    context.subscriptions.push(
        vscode.commands.registerCommand('extension.showReactPanel', () => {
            const panel = vscode.window.createWebviewPanel(
                'reactPanel', // Identifier
                'React Panel', // Title
                vscode.ViewColumn.One, // Editor column to display in
                { enableScripts: true } // Options
            );

            panel.webview.html = getWebviewContent();
        })
    );
}

function getWebviewContent() {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
        </head>
        <body>
            <div id="root"></div>
            <script src="${vscode.Uri.file(
                path.join(__dirname, 'out', 'main.js')
            ).with({ scheme: 'vscode-resource' })}"></script>
        </body>
        </html>
    `;
}

module.exports = { activate };
