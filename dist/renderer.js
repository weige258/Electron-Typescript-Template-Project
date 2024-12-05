window.ElectronAPI.send('message', 'hello world');
window.ElectronAPI.on('message', (...arg) => {
    console.log(...arg);
    alert(...arg);
});
