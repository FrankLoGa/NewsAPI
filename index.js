const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const news = require('./src/NewsModule');
const usersRouter = require('./src/UserModule')

//res.sendFile(path.join(__dirname + 'views' + 'index.html')); intente usar este pero sale error Preguntar al profe*
app.get('/news', (req,res)=>{
    const indexFile = fs.readFileSync('./views/index.html');
    news.getNews();
    res.end(indexFile);
});

app.use("/users", usersRouter);


app.listen(3000, ()=>{
    console.log("App is running");
});