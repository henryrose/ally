var express = require('express')
var app = express()

app.set('views', './views')
app.set('view engine', 'hbs');

app.use(express.static('public'))

app.get('/', function (req, res) {
    res.render('index')
})

app.listen(3000, function () {
  console.log('ALLY app listening on port 3000!')
})  