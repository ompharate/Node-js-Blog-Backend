const express = require("express")
const app = express()
const route = require("./routes/router")
const bodyparser = require("body-parser");

app.set("view engine","ejs")
app.use(bodyparser.urlencoded({ extended : true}))

app.use('/',route)

app.listen(3000,()=>{   
    console.log("http://localhost:3000")
})