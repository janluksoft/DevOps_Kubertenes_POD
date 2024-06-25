//=== Server http lib Express =============
const port = 1111;
const express = require('express'); 
let aCounter = 0;

const app_express = express();

app_express.get('/', function (xreq, xres) { 
    console.log('new user ask Express num:('+ aCounter+ ')');      //message in console
    xres.send('Hello, I am server NODE Express; Num:('+ aCounter+ ')');
    aCounter++;
}); //main page '/' localhost:1111


app_express.listen(port, (xerr) => { 
    if (xerr)
        return (console.log('Something went wrong'));
    ServerRunning();        //return callback ServerRunning()
});                         //Server works

function ServerRunning() {
    console.log('Server Node Express is running..');
}

