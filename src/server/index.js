var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')


const app = express()
app.use(cors())

//use json
app.use(bodyParser.json())

//use url encooded values
app.use(bodyParser.urlencoded({
    extended: true
}))

//app static files should be found in the dist folder
app.use(express.static('dist'))


//app will listen on port 8081
let port = 8081
app.listen(port, function(){
    console.log('App listening on port 8081')
})
