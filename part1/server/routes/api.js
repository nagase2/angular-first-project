const express = require('express')
const router = express.Router()
const User = require('../model/user')
const mongoose = require('mongoose')
const db = "mongodb://admin:admin123@ds151853.mlab.com:51853/eventdb"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error' + err)
    } else {
        console.log('Connected to mongodb')
    }
})

router.get('/test', (req, res) => {
    console.log(req.query)
    res.send('OK test')
})

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {

    let userData = req.body
    console.log(req)
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }
        else{
            console.log("P:" + registeredUser)
            res.status(200).send(registeredUser)
        }
    })
})

module.exports = router;
