const {getCount} = require('./counter');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const count = getCount('home');
    res.end('<h1>HOME page</h1> <p>Counter: ' + count + '</p> <a href="/about">ABOUT page</a>', 'UTF-8');
})

app.get('/about', (req, res) => {
    const count = getCount('about');
    res.end('<h1>ABOUT page</h1> <p>Counter: ' + count + '</p> <a href="/">HOME page</a>', 'UTF-8');
})

const port = 3001;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});