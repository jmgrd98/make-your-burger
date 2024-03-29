const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/db.json');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors('*'));

app.use(bodyParser.json());

app.get('/ingredientes/paes', (req, res) => {
    res.json(db.ingredientes.paes);
});

app.get('/ingredientes/carnes', (req, res) => {
    res.json(db.ingredientes.carnes);
});

app.get('/ingredientes/opcionais', (req, res) => {
    res.json(db.ingredientes.opcionais);
});

app.get('/burgers', (req, res) => {
    res.json(db.burgers);
});

app.get('/burgers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const burger = db.burgers.find(burger => burger.id === id);
    if (burger) {
        res.json(burger);
    } else {
        res.status(404).send('Burger not found');
    }
});

app.post('/burgers', (req, res) => {
    const newBurger = req.body;
    newBurger.id = db.burgers.length + 1;
    db.burgers.push(newBurger);
    res.status(201).json(newBurger);
});

app.put('/burgers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedBurger = req.body;
    const index = db.burgers.findIndex(burger => burger.id === id);
    if (index !== -1) {
        db.burgers[index] = { ...db.burgers[index], ...updatedBurger };
        res.json(db.burgers[index]);
    } else {
        res.status(404).send('Burger not found');
    }
});

app.get('/status', (req, res) => {
    const status = db.status;
    res.json(status);
});

app.delete('/burgers/:id', (req, res) => {
    const id = parseInt(req.params.id);
    db.burgers = db.burgers.filter(burger => burger.id !== id);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
