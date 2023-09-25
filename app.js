"use strict"

const express = require('express')

const app= express()

require('dotenv').config()
const HOST =process.env.HOST || '127.0.0.1'
const PORT=process.env.PORT || 8000

/* app.get('/', (request,response) =>{
    //response.send('welcome to express')
    response.send({message:"called in 'get' method"})
})
app.post('/', (request, response) => response.send({ message: "called in 'post' method."}))
app.put('/', (request, response) => response.send({ message: "called in 'put' method."}))
app.delete('/', (request, response) => response.send({ message: "called in 'delete' method."})) */
/* app.all('/', (request, response) => response.send({ message: "called in 'all' options method."})) */


/* app.route('/')
            .get((req,res)=>res.send('get'))
            .post((req,res)=>res.send('post'))
            .put((req,res)=>res.send('put'))
            .delete((req,res)=>res.send('delete')) */

/* app.get('/',(req,res)=>res.send("in 'root' path"))
app.get('/path',(req,res)=>res.send("in 'path' ")) */
//app.get('/abc(x?)123',(req,res)=>res.send("in 'abc(x?)123' "))
//app.get('/abc(x+)123',(req,res)=>res.send("in 'abc(x+)123' "))
//app.get('/abc(*)123',(req,res)=>res.send("in 'abc(*)123' "))

//app.get(/xyz/,(req,res)=>res.send("regex 'xyz' "))
//app.get(/^xyz/,(req,res)=>res.send("regex 'xyz' "))
//app.get(/\/xyz$/,(req,res)=>res.send("regex 'xyz' "))
// /user/66/config/update/any/any/any
/* app.get('/user/:userId/config/:configParam/*', (req, res) => {
    res.send({
        userId:req.params.userId,
        configParam:req.params.configParam,
        url: {
            protocol: req.protocol,
            subdomains: req.subdomains,
            hostname: req.hostname,
            baseUrl: req.baseUrl,
            params: req.params,
            query: req.query,
            path: req.path,
            originalUrls: req.originalUrl
        }
    })
})
app.get('/user/:userId([0-9]+)', (req, res) => 
{res.send({
    params:req.params
})})

app.get('/command/:userId-:profileId',(req,res)=>{
    res.send({
        params:req.params
    })
}) */

/* Response Methods */

//? SendStatus:
 //app.get('/', (req, res) => res.sendStatus(404))
//? Status:
/* app.get('/', (req, res) => res.status(200).send({ message: 'OK' }))
app.post('/', (req, res) => res.status(201).send({ message: 'Created' }))
app.put('/', (req, res) => res.status(202).send({ message: 'Accepted' }))
app.delete('/', (req, res) => res.status(204).send({ message: 'No Content' })) */
//? JSON (.send() method already does this converting.)
//app.get('/', (req, res) => res.json([{ key: 'value' }]))
//? Download File (Download at browser):
//app.get('/download', (req, res) => res.download('app.js', 'changedName.js'))
//? SendFile Content:
 //app.get('/file', (req, res) => res.sendFile(__dirname + '/app.js')) // FilePath must be realPath
//? Redirect:
 app.get('/google', (req, res) => res.redirect(302, 'https://www.google.com'))

app.listen(PORT, ()=>console.log(`Running on http://${HOST}:${PORT}`))