const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/route');

const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb+srv://pallavisinghsgrl9:6mILIfTCfLk8gUxt@cluster0.zkm1tbf.mongodb.net/urlDatabase'retryWrites=true&w=majority', {
    useNewUrlParser: true
})
.then(() => console.log("MongoDB is connected"))
.catch(err => console.log(err))

app.use('/',route);

app.listen(process.env.PORT || 3000, function(){
    console.log("Express app running on port" + (process.env.PORT || 3000))
});
