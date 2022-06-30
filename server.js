const express = require('express');
const path = require('path')
const app = express();
const port = 3000;

// Greetings 
app.get('/greeting/', (req, res)=>{
    res.send('hello ' + req.params.name)
})

// Tip Calculator
app.get('/tip/:total/:totalpercentage', (req, res)=>{
    res.send(req.params.totalpercentage)
})

// Magic 8 Ball

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];


app.get('/:magic', (req, res)=> {
    res.send(`<h1>Will I be a Millionaire? ${responses[req.params.magic]}`)
}

// take on Down and Pass it Around



app.listen(port,() => {
 console.log(`Server started on port ${port}`)
})
