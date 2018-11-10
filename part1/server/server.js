const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const api = require('./routes/api')
const app = express()

app.use('/api', api)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())


app.post('/', function (req, res) {
    console.log(req.body)
    res.send('Hello from server')
})

app.listen(PORT, function () {
    console.log('Server runnning on localhost:' + PORT)
})