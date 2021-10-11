const express = require('express');
const app = express();

const path = require('path');
const pathPublic = path.join(__dirname, './public');
app.use(express.static(pathPublic));

// app.listen(3050, console.log('Servidor OK - mercadoliebre - puerto 3050'));
app.listen(process.env.PORT || 3050, function () { console.log('Servidor OK - mercadoliebre - puerto 3050')});
app.get('/', (req,res) => {res.sendFile(path.join(__dirname, './views/home.html'))});
app.get('/home', (req,res) => {res.sendFile(path.join(__dirname, './views/home.html'))});
app.get('/register', (req,res) => {res.sendFile(path.join(__dirname, './views/register.html'))});
app.get('/login', (req,res) => {res.sendFile(path.join(__dirname, './views/login.html'))});



