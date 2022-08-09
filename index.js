const { urlencoded } = require('express');
const express = require('express');
const Port = process.env.Port || 3000;
const mongoose = require('mongoose');
const app = express();

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({
     extended:true,
}));
app.use(express.json());
app.set("view engine","ejs");

//Connection Database
const DB = 'mongodb+srv://Ankit:QWG1RCc569x9ZITf@cluster0.i4g4tue.mongodb.net/ToDo?retryWrites=true&w=majority';
mongoose.connect(DB,{
     useNewUrlParser:true,
    // useCreateIndex:true,
     useUnifiedTopology:true,
}).then(()=>{
    console.log("Connected  Successfull to The DB")
}).catch((err)=> console.log(err));
/*app.get("/",(req,res)=>{
     res.send("<h1 style='color:red'>hello world<h1>")
});*/


//routes
app.use(require("./routes/indexr"));
app.use(require("./routes/todo"));

//Server Listening
app.listen(Port,()=>{
console.log(`Server started Successfully at ${Port}`);
});