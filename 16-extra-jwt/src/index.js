require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const {v4 : uuidv4} = require('uuid');

const app = express();
app.use(express.json());

const PORT = 3000;

const USERS = [
    {
        id: 1,
        username: 'japonespecinha',
        password: '12345'
    }
];

function authToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader?.split(' ')[1];

    if(!token) return res.sendStatus(401);
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if(err) return res.sendStatus(401)
        req.user = user
        next();
    });
}

app.post('/login', (req, res) =>{
    console.log('recebe body', req.body);
    const {username, password} = req.body;
    const user = USERS.find(u => u.username === username && u.password === password);

    if(!user) return res.status(401).json({ message: 'login não existe' });

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'});
    res.json({token});
});

app.get('/protegida', authToken, (req, res) => {
    res.json({ message: "voce acessou uma rota protegida" });
})

app.listen(PORT, () => {
    console.log('rodando');
});