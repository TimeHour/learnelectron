/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const fs = require('fs');

function createFolderList(path, el){
    let files = fs.readdirSync(path, {withFileTypes:true});
        let sublist = '<ul>';
        files.forEach(file => {
            sublist += `<li>${file.name}</li>`;
        });
        sublist += '</ul>';
        el.innerHTML += sublist;
        [...el.children[0].children].forEach(child => {
            child.addEventListener('click', event =>{
                createFolderList(path + child.textContent + '\\', child)
            }, {once: true}); 
            });
        }

let list = document.querySelector('#files');
createFolderList('C:\\Users\\mm-21-152\\Documents\\', list);
files.forEach(file => {
    list.innerHTML += `<li>${file.name}</li>`;
});
[...list.children].forEach(el => {
    let firstClick = child.addEventListener('click', event => {
        createFolderList('C:\\Users\\mm-21-152\\Documents\\', child.textContent, el)
    }, {once: true});
});