// inclued packages and define server related variables
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// setting template engine
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting body-parser (express 已內建body-parser功能)
app.use(express.urlencoded({extended: true}))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})



// starts the express server and listening for connections
app.listen(port, () => {
  console.log(`Express app listening on port ${port}`)
})


