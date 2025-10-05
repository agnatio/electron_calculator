// main.js - The main process file that:
//   - Imports required Electron modules (app, BrowserWindow)
//   - Creates a browser window when app is ready
//   - Loads your HTML file into the window
//   - Handles app lifecycle events (quit when windows close, etc.)

const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 390,
    height: 520,
    autoHideMenuBar: true,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  mainWindow.loadFile("index.html");
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
