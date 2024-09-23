// Budget API

const express = require('express');
const cors = require('cors');
const fs = require('fs')
const app = express();
const port = 3000;

app.use(cors());

/*const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 30
        },
        {
            title: 'Rent',
            budget: 275
        },
        {
            title: 'Grocery',
            budget: 110
        },
    ]
};


app.get('/budget', (req, res) => {
    res.json(budget);
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});
/*
const express = require('express')
const fs = require('fs')
const app = express();
const port = 4200;

app.use('/', express.static('public'));

/*const budget={
    myBudget: [
    {
        title: 'Eat out',
        budget: 25
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Groceries',
        budget: 90

    },
]
}

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', 'utf8', (err, data) => {
        const budgetData = JSON.parse(data);
        res.json(budgetData);
    });
});*/

app.get('/budget', (req, res) => {
    fs.readFile('budget-data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading budget data');
            return;
        }
        const budgetData = JSON.parse(data);
        res.json(budgetData);
    });
});

app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');
});