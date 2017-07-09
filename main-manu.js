const { app , Menu } = require('electron');
const isWindows = process.platform === 'win32';


    const template = [
        {
            label : isWindows ? File : app.getName(),
            submenu : [
                {
                    label: isWindows ? 'Exit' : 'Quit' ,
                    accelerator : isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
                    click(){
                        app.quit();
                    }
                }
            ]
        },
        {
            label : 'Edit',
            submenu : [
                {role : 'undo'},
                {role : 'redo'},
                {type : 'separator'},
                {role : 'cut'},
                {role : 'copy'},
                {role : 'paste'},
                {role : 'selectall'}
            ]
        },
        {
            label : 'view',
            submenu : [
                {role : 'reload'},
                {role : 'forcereload'},
                {role : 'toggledevtools'},
                {type : 'separator'},
                {role : 'resetzoom'},
                {role : 'zoomin'},
                {role : 'zoomout'},
                {type : 'separator'},
                {role : 'togglefullscreen'}
            ]
        },
        {
            role : 'window',
            submenu : [
                {role : 'minimize'},
                {role : 'close'}
            ]
        },
        {
            role : 'help',
            submenu : [
                {
                    label: 'Learn More',
                    click() {require('electron').shell.openExternal('https://github.com/urvil38/Github-Battle-React')}
                }
            ]
        }
    ]

    const menu = new Menu.buildFromTemplate(template);

    module.exports = menu;
