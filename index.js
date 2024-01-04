const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const server = express();

server.use(cors());
server.disable("x-powered-by"); //Reduce fingerprinting
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.post("/login", (req, res) => {
  console.log("req: ", req.body);
  res.send("Success");
});

server.listen(9000, () =>
  console.log(`Server running on http://localhost:${9000}`)
);
