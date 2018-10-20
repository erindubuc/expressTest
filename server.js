const express = require('express');
// function that says create an express app
const app = express();
const bodyParser = require('body-parser');

// want express to use the body-parser
app.use(bodyParser.urlencoded({ extended: false }));
// check to see if it is in a url encoded format - then parse it into json format
app.use(bodyParser.json());


app.get('/', (request, response) => response.send('<h1>hello</h1>'))
// .send sends back HTML text
app.get('/test', (req, res) => res.send('<h1>test route</h1>'))

// app.get('/test/:num', (req, res) => res.send(`<h1>${req.params.num}</h1>`))
// params = properties, attributes = URL params
app.get('/test/add/:num', (req, res) => {
    const num = parseInt(req.params.num, 10)
    res.send(`<h1>${5 + num}</h1>`)
})

app.get('/test/subtract', (req, res) => {
    const num = parseInt(req.query.num, 10)
    res.send(`<h1>${num - 5}</h1>`)
})

app.post('/test/multiply', (req, res) => {
    const num = parseInt(req.body.num, 10);
    res.json({result: num * 5});
    })

const port = process.env.PORT || 5000
// using the = sign, we can use the || without parentheses to say "use this port OR that port"

app.listen(port, () => console.log(`App listening on port ${port}`))
// if your function only has 1 function, you don't need to use the {} or ;
