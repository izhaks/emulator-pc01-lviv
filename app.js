/*
 * This is the Electron application main process.
 * Run it using the following command: electron app.js
 */

const { app, BrowserWindow } = require('electron');
var path = require('path');

var APP_DIR = path.resolve(__dirname, '');

function createWindow() {
    win = new BrowserWindow({
        width: 640,
        height: 680,
        title: 'Emulator PC-01 Lviv',
        icon: APP_DIR + '/lviv-128.png',
        webPreferences: {
            nodeIntegration: false
        }
    });

    win.setMenu(null);

    win.loadFile(APP_DIR +'/window.html');
}

app.on('ready', createWindow);
