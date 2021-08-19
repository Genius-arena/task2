
var express = require("express");
var app = express();
var port = process.env.PORT || 9000;

// var todoRoutes = require("./routes/todos");
// var bodyParser = require("body-parser");
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/leg.html'));
  //__dirn
});
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname + "/views"));

// app.get("/", function (req, res) {
    // res.sendFile("/leg.html");
    // res.sendFile((__dirname + "views/leg.html"))
// });

// app.use("/api/todos", todoRoutes);
app.use('/', router);
app.listen(port, function () {
    console.log("Server is Listening for Prpearation todo App against react");
});
