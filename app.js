const express = require('express');
const app = express();

const path = require('path');
const pathPublic = path.join(__dirname, './public');
app.use(express.static(pathPublic));

app.listen(3050, console.log('Servidor OK'));
app.get('/', (req,res) => {res.sendFile(path.join(__dirname, './views/home.html'))});
// app.get('/', (req,res) => {res.sendFile(__dirname + './views/home.html')});


