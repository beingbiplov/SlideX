const express = require('express')
const slideRoutes = require('./api/routes')
const app = express()
const port = 3000

app.use(express.json())

app.use(express.static('public'))

app.use('/api', slideRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


