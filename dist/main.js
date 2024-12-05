"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const path_1 = __importDefault(require("path"));
electron_1.app.on('ready', () => {
    var main_window = new electron_1.BrowserWindow({
        width: 800,
        height: 400,
        webPreferences: {
            preload: path_1.default.join(__dirname, 'preload.js'),
            nodeIntegration: true,
        }
    });
    main_window.loadFile('index.html');
    main_window.on('closed', () => {
        electron_1.app.quit();
    });
    electron_1.ipcMain.on('message', (event, ...arg) => {
        console.log(...arg);
        main_window.webContents.send('message', 'hello world');
    });
});
