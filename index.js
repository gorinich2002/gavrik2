const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const fs = require("fs")
const app = express();
const path  = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

try{
  
(async()=>{await mongoose.connect(config.get("mongo"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});})()
}
catch(e){
  console.log(e)
}
app.use( express.static(__dirname + '/client/build'));
app.use(cookieParser())
app.use(express.json({extended:true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT|| 8080;

app.use('/api', require('./routes/products.routers'))
app.use('/api', require('./routes/order.routers'))
app.use('/api', require('./routes/auth.router'))
app.use(function(req, res) {
  res.redirect('/');
});

async function start() {
  try {
    await mongoose.connect(config.get("mongo"), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log(e);
  }
}

start();


