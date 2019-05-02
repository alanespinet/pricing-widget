const express = require('express')
const cors = require('cors')
const jsonfile = require('./data/pricing_widgets.json')

const PORT = process.env.PORT || 4000
const app = express()

app.use(cors())

app.get('/', (req, res, next) => {
    res.send('This is send')
})

app.get('/v1/pw', (req, res, next) => {
    res.json(jsonfile)
})

app.listen(PORT, () => { console.log('Server is running') })