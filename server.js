const express = require('express');

const app = express();

function delay(duration){
    const startTime = Date.now();
    while(Date.now() - startTime< duration){
        //event loop is blocked
    }
}

app.get('/', (req,res) =>{

    res.send(`Performance Example : ${process.pid}`); // to see different processes
});

app.get('/timer', (req,res)=>{
    delay(4000);
    res.send(`Beep Beep Beep: ${process.pid}`);
});

console.log('Running Server.js ...');
console.log('Worker process started');
app.listen(3000);
