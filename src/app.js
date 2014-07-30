var app = require('app');  // Module to control application life.
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var http = require('http');
var ipc = require('ipc');
var url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin')
    app.quit();
});

app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({show: false, 'web-preferences': { plugins: true }});

  mainWindow.loadUrl('https://play.spotify.edgekey.net/client/a9106c0/flash/player.swf');

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });

  http.createServer(function (req, res) {
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    var ping = query.ping;

    var pong = mainWindow.webContents.executeJavaScript("var ipc = require('ipc');ipc.send('pong', document.getElementsByTagName('embed')[0].sp_run(\"" + ping + "\"));");
    ipc.once('pong', function(event, arg) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(arg);
    });
  }).listen(1337, '127.0.0.1');
});
