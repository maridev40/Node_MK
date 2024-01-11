let count1 = 0;
let count2 = 0;

const http = require('http');
const server = http.createServer((req, res) => {
console.log('Запрос получен');
if (req.url === '/') {
res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
res.write('<a href="/about">Обо мне</a>');
res.write('<h1>Добро пожаловать на мой сайт!</h1>');
count1++;
res.end('<h3>Счетчик: ' + count1 + '</h3>');
} else if (req.url === '/about') {
res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
res.write('<a href="/">Добро пожаловать</a>');
res.write('<h1>Обо мне</h1>');
count2++;
res.end('<h3>Счетчик: ' + count2 + '</h3>');
} else {
res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
res.end('<h1>Страница не найдена!</h1>');
};

});
const port = 3000;
server.listen(port, () => {
console.log(`Сервер запущен на порту ${port}`);
});