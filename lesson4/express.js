const fs = require('fs');
const express = require('express');
const path = require('path');
const pathDB = path.join(__dirname, 'users.json');
let userID = 1;

const app = express();
app.use(express.json());

app.get('/users', (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathDB));
    res.send(users);
})

app.get('/users/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(pathDB));
    const user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
        res.send(user);
    } else {
        res.status(404);
        res.send({user: null})
    }
})

app.post('/users', (req, res) => {
    userID++;
    let users = JSON.parse(fs.readFileSync(pathDB));
    let user = users.find((user) => user.id === Number(userID));
    if (user) {
        res.status(500);
        res.send({error: "user exist with id=" + userID})
    } else {
        users.push({
            "id": userID,
            ...req.body
        });
        fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
        user = users.find((user) => user.id === Number(userID));
        res.send(user)
    }
    
})

app.put('/users/:id', (req, res) => {
    let users = JSON.parse(fs.readFileSync(pathDB));
    let user = users.find((item) => item.id === Number(req.params.id));
    const index = users.indexOf(user);
    if (user) {
        user = {
            id: user.id,
            ...user,
            ...req.body
        }
        
        users.splice(index, 1);
        users.push(user);

        fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
        user = users.find((item) => item.id === Number(user.id));
        res.send(user)
    } else {
        res.status(404);
        res.send({user: null})
    }
    
})

app.delete('/users/:id', (req, res) => {
    let users = JSON.parse(fs.readFileSync(pathDB));
    let user = users.find((user) => user.id === Number(req.params.id));
    if (user) {
        const index = users.indexOf(user);
        users.splice(index, 1);
        fs.writeFileSync(pathDB, JSON.stringify(users, null, 2));
        res.send({id: user.id});
    } else {
        res.status(404);
        res.send({user: null})
    }
})

const port = 3000;
app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});