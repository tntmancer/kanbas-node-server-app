const express = require('express') // Equivalent to import
const app = express()
app.get('/hello', (req, res) => {res.send('Hello World!')})
app.listen(4000)