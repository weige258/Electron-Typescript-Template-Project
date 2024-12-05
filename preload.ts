import {contextBridge,ipcRenderer} from "electron";

import fs from 'fs';

contextBridge.exposeInMainWorld('ElectronAPI', {
    fs:fs,
    send:(channel: string, ...args: any[])=>{
        ipcRenderer.send(channel,...args)
    },
    on: (channel: string, func: (...args: any[]) => void) => { 
        ipcRenderer.on(channel, (event, ...args) => func(...args));
}})

export interface IElectronAPI {
    fs: typeof fs;
    send: (channel: string,...args: any[]) => void;
    on: (channel: string, func: (...args: any[]) => void) => void
  }
  
  declare global {
     var ElectronAPI: IElectronAPI
  }