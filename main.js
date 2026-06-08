const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {

    const win = new BrowserWindow({

        width: 1200,
        height: 800,
        backgroundColor: "#0f1117",

        webPreferences: {

            preload: path.join(__dirname, "preload.js"),

            contextIsolation: true,
            nodeIntegration: false,

            sandbox: false
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);