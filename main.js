const { BrowserWindow, app } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 800,
        titleBarStyle: "hiddenInset",
        backgroundColor: "#0f1117"
        
    });

    win.loadFile("index.html");
}

app.whenReady().then(createWindow);