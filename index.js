const express = require('express')
const users = require('./users-router')
const cors = require('cors')

const app = express()
const port = 7442


app.use(cors())
app.use('/users', users)

app.get('/tasks', async (req, res) => {
    res.send("tasks")
})

app.use((req, res) => {
    res.send(404)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


process.on('unhandledRejection', function (reason, p) {
    console.log(reason, p)
})


