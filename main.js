const { app, BrowserWindow, Menu, shell } = require('electron');
const { autoUpdater } = require('electron-updater');
const path = require('path');

if (!app.requestSingleInstanceLock()) app.quit();

function createWindow() {
  const win = new BrowserWindow({
    width: 520, height: 900, minWidth: 380, minHeight: 600,
    title: 'Tilt',
    icon: path.join(__dirname, 'build', 'icon.png'),
    backgroundColor: '#0E0A26',
    autoHideMenuBar: true,
    webPreferences: { contextIsolation: true }
  });
  win.loadFile('index.html');
  win.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: 'deny' }; });
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null);
  createWindow();
  if (app.isPackaged) autoUpdater.checkForUpdatesAndNotify();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
