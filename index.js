const express = require('express')
var cors = require("cors");
const app = express()
const port = 3000
const category = require('./data/catagories.json')
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/category', (req, res) => { 
    res.send(category);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})