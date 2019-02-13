const express = require('express')
const app = express()
var Hello = "Hello World"
const path = require('path')
const ejs = require('ejs');


app.set('view engine', 'ejs');
app.get('/test', (req, res) => {
    res.render( 'test.ejs', { name: {firstName: 'Siyuan',lastName:'Ye'} });
})

app.get('/', (req, res) => {
    console.log("Working")
    res.send(Hello)
})

app.get('/main', (req, res) => {
    console.log("Accessing Main")
    res.sendFile(path.join(__dirname + '/view/index.html'));
    console.log(__dirname)
})


app.listen(3008, () => {
    console.log("Server Running on Port 3008")
  })
  