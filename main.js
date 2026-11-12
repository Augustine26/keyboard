const { app, BrowserWindow, shell, Menu } = require('electron');
function createWindow() {
  Menu.setApplicationMenu(null);
  const w = new BrowserWindow({ width: 1200, height: 820, icon: __dirname + '/icon.ico', title: 'CMLD Keyboard Trainer' });
  w.loadFile('index.html');
  // open email links (mailto:) and web email pages in the default browser / email app
  w.webContents.on('will-navigate', (e, url) => { if (url.startsWith('mailto:')) { e.preventDefault(); shell.openExternal(url); } });
  w.webContents.setWindowOpenHandler(({ url }) => { if (/^(mailto:|https?:)/.test(url)) shell.openExternal(url); return { action: 'deny' }; });
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => app.quit());
