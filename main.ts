import { app,BrowserWindow, ipcMain } from "electron";
import path from 'path';

app.on('ready',()=>{
    var main_window=new BrowserWindow({
        width:800,
        height:400,
        webPreferences:{
           preload:path.join(__dirname,'preload.js'),
           nodeIntegration:true,
       }
    })

    main_window.loadFile('./pages/main_page/index.html')

    main_window.on('closed',()=>{
        app.quit()
    })
    ipcMain.on('message',(event,...arg)=>{
        console.log(...arg)
    })
})