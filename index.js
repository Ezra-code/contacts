const express = require('express')
const app = express()
const contactData = require('./contacts.json')

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("These are your contacts")
})

app.get('/contacts', (req, res) => {
    res.send(contactData)
})

app.listen(port, () => {
    console.log(`App is listening on port${port}`)
})