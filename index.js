const express = require("express");
const mongoose = require('mongoose');

const Product = require("./models/product")

const cors = require("cors");
const cookieParser = require("cookie-parser");

const server = express();

const mongoURI = 'mongodb+srv://oyuerdenem:hoaysu0916@atlascluster.irlpmlz.mongodb.net/'


mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() =>
 
console.log('MongoDB connected'))
  .catch(err => console.error(err));

server.use(cors());
server.disable("x-powered-by"); //Reduce fingerprinting
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.post("/login", (req, res) => {
  setTimeout(() => {
    console.log("req: ", req.body);
  }, 1000)

  if(req.body.user === 'test' && req.body.pass ==="1234"){
    res.send({
      success: true,
      value: {},
      message: "U re logged!"
    })
  }
  res.send({
    success: false,
    value: {},
    message: "User name or password incorrect!"
  })
});

server.post('/product', (req, res) => {
  if(req.body?.name){
    const newData = new Product(req.body);

    return newData.save().then(data => res.send("Success!")).catch(err => res.send("err"))
  }

  return res.send("Product name bhgui bn")
})

server.get('/product', (req, res) => {
  Product.find().then(data => res.send({
    success: true,
    value: data
  })).catch(err => {
    return res.send({
      success: false
    })
  })
})

server.listen(9000, () =>
  console.log(`Server running on http://localhost:${9000}`)
);
