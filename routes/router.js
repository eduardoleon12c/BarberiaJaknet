const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

router.get('/', (req,res)=>{
    res.render('index');
})

router.get('/about', (req,res)=>{
    res.render('nosotros');
})

router.get('/services', (req,res)=>{
    res.render('servicios');
})

router.get('/horarios', (req,res)=>{
    res.render('horario');
})


module.exports = router