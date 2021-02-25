const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const news = require('./src/NewsModule');
//res.sendFile(path.join(__dirname + 'views' + 'index.html')); intente usar este pero sale error Preguntar al profe*
app.get('/news', (req,res)=>{
    const indexFile = fs.readFileSync('./views/index.html');
    news.getNews();
    res.end(indexFile);
});


app.listen(3000, ()=>{
    console.log("App is running");
});