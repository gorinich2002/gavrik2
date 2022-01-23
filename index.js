const express = require("express");
const config = require("config");
const mongoose = require("mongoose");
const fs = require("fs")
const app = express();
const path  = require('path');
const bodyParser = require('body-parser');

try{
  
(async()=>{await mongoose.connect(config.get("mongo"), {
  useNewUrlParser: true,
  useUnifiedTopology: true
});})()
}
catch(e){
  console.log(e)
}



app.use(express.json({extended:true}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

const PORT = process.env.PORT|| 8080;

app.use('/api', require('./routes/products.routers'))
app.use('/api', require('./routes/order.routers'))


// if (process.env.NODE_ENV === 'production') {
//   app.use('/', express.static('client/build'))
//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   })
// }


async function start() {
  try {
    // await mongoose.connect(config.get("mongoUri"), {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useUnifiedTopology: true
    // });

    app.listen(PORT, () =>
      console.log(`App has been started on port ${PORT}...`)
    );
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
}

start();


