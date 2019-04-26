const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000
const {
    movieRouter,categoryRouter,connectorRouter
} = require('./3.router')


app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('<h1>Ini Home</h1>')
})

app.use('/movies', movieRouter)
app.use('/category', categoryRouter)
app.use('/connector', connectorRouter)


app.listen(port, () => console.log('Server jalan di port ' + port))