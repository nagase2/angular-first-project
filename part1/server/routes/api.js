const express = require('express')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const router = express.Router()
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

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

function verifyToken(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send('Unauthorized request 1')
    }
    let token = req.headers.authorization.split(' ')[1]
    if (token === 'null') {
        return res.status(401).send('Unauthorized request', ': null')
        
    }
    console.log("token-> ",token)
    let payload = jwt.verify(token, 'secretKey')
    if (!payload) {
        return res.status(401).send('Unauthorized request 2')
    }
    req.usedId = payload.subject
    next()
}


router.get('/test', (req, res) => {
    console.log(req.query)
    res.send('OK test')
})
router.post('/test', (req, res) => {
    console.log(req.query)
    res.send('OK test')
})

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {

    let userData = req.body
    console.log("★★★", req.body)
    console.log(req.body.password)

    let user = new User(userData)
    //mongooseの機能を使ってデータを保存（JPAみたいに簡単）
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }
        else {
            console.log("P:" + registeredUser)
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({ token })
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body
    console.log("login page", userData)
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log("no user...", error)
        }
        else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else {
                if (user.password !== userData.password) {
                    console.log('invalid password...', user)
                    res.status(401).send('Invalid password')
                } else {
                    console.log('auth succeed!!!')
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secretKey')
                    res.status(200).send({ token })
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [
        { "id": 1, "name": "Katine Sherrett", "description": "this ticket is very popular and already discounted", "email": "ksherrett0@yolasite.com", "date": "11/12/2017" },
        { "id": 2, "name": "Berthe Geater", "description": "this is description", "email": "bgeater1@domainmarket.com", "date": "2/7/2018" },
        { "id": 3, "name": "Gertie Hember", "email": "ghember2@vimeo.com", "date": "4/28/2018" },
        { "id": 4, "name": "Aeriela Overpool", "email": "aoverpool3@sitemeter.com", "date": "5/12/2018" },
        { "id": 5, "name": "Norbie Satch", "email": "nsatch4@about.com", "date": "12/31/2017" },
        { "id": 6, "name": "Isiahi Bellow", "email": "ibellow5@mail.ru", "date": "6/19/2018" },
        { "id": 7, "name": "Xavier Gillham", "email": "xgillham6@pagesperso-orange.fr", "date": "5/28/2018" },
        { "id": 8, "name": "Rodolphe Bernhart", "email": "rbernhart7@gnu.org", "date": "1/30/2018" },
        { "id": 9, "name": "Vaughan Phipps", "email": "vphipps8@smh.com.au", "date": "4/18/2018" },
        { "id": 10, "name": "Evered Beringer", "email": "eberinger9@wikipedia.org", "date": "12/29/2017" },
        { "id": 11, "name": "Frasco Phibb", "email": "fphibba@hugedomains.com", "date": "4/21/2018" },
        { "id": 12, "name": "Willyt Cowlard", "email": "wcowlardb@independent.co.uk", "date": "3/17/2018" },
        { "id": 13, "name": "Kimberly Claypool", "email": "kclaypoolc@discuz.net", "date": "1/2/2018" },
        { "id": 14, "name": "Dian Murkin", "email": "dmurkind@issuu.com", "date": "5/15/2018" },
        { "id": 15, "name": "Lolly Rao", "email": "lraoe@yale.edu", "date": "7/22/2018" }]
    res.json(events)
})


router.get('/special', verifyToken, (req, res) => {
    let events = [
        { "id": 1, "name": "Katine Sherrett", "description": "this is description", "email": "ksherrett0@yolasite.com", "date": "11/12/2017" },
        { "id": 2, "name": "Berthe Geater", "description": "this is description", "email": "bgeater1@domainmarket.com", "date": "2/7/2018" },
        { "id": 3, "name": "Gertie Hember", "email": "ghember2@vimeo.com", "date": "4/28/2018" },
        { "id": 4, "name": "Aeriela Overpool", "description": "this is description", "email": "aoverpool3@sitemeter.com", "date": "5/12/2018" },
        { "id": 5, "name": "Norbie Satch", "email": "nsatch4@about.com", "date": "12/31/2017" },
        { "id": 6, "name": "Isiahi Bellow", "email": "ibellow5@mail.ru", "date": "6/19/2018" },
        { "id": 7, "name": "Xavier Gillham", "email": "xgillham6@pagesperso-orange.fr", "date": "5/28/2018" },
        { "id": 8, "name": "Rodolphe Bernhart", "email": "rbernhart7@gnu.org", "date": "1/30/2018" },
        { "id": 9, "name": "Vaughan Phipps", "email": "vphipps8@smh.com.au", "date": "4/18/2018" },
        { "id": 10, "name": "Evered Beringer", "email": "eberinger9@wikipedia.org", "date": "12/29/2017" },
        { "id": 11, "name": "Frasco Phibb", "email": "fphibba@hugedomains.com", "date": "4/21/2018" },
        { "id": 12, "name": "Willyt Cowlard", "email": "wcowlardb@independent.co.uk", "date": "3/17/2018" },
        { "id": 13, "name": "Kimberly Claypool", "email": "kclaypoolc@discuz.net", "date": "1/2/2018" },
        { "id": 14, "name": "Dian Murkin", "email": "dmurkind@issuu.com", "date": "5/15/2018" },
        { "id": 15, "name": "Lolly Rao", "email": "lraoe@yale.edu", "date": "7/22/2018" }]
    res.json(events)
})

module.exports = router;
