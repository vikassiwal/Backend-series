require('dotenv').config()

const express = require('express')
// import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello vicky !')
})

app.get('/twitter',(req, res)=>{
    res.send('vickydotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1> please login at my web</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


