"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const fs_1 = __importDefault(require("fs"));
electron_1.contextBridge.exposeInMainWorld('ElectronAPI', {
    fs: fs_1.default,
    send: (channel, ...args) => {
        electron_1.ipcRenderer.send(channel, ...args);
    },
    on: (channel, func) => {
        electron_1.ipcRenderer.on(channel, (event, ...args) => func(...args));
    }
});
