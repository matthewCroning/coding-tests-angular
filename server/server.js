
const express       = require("express"),
app           = express(),
bodyParser    = require("body-parser"),
mongoose      = require("mongoose");

//routes
const questionRoutes    = require("./routes/question");
const compilerRoutes    = require("./routes/compiler");
const PORT = process.env.PORT || '3001';

app.listen(PORT, function(){
});

app.use(bodyParser.json());
app.use("/api/question", questionRoutes);
app.use("/api/compiler", compilerRoutes);

mongoose.connect("mongodb://localhost:27017/hackerrank").then(() => {
    console.log("mongoose logged in");
    console.log("Node server started on port " + PORT);
});