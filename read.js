const express = require('express')
const app = express()
const port = 3000

app.get('/users:id', (req, res) => {
    res.json(users);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
