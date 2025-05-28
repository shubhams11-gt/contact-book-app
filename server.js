const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contactRoutes');
const mongoose = require('mongoose')
require('dotenv').config();

app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', contactRoutes)

mongoose.connect('mongodb+srv://Shubham:Shubham23@cluster0.duhteeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));


app.listen(3000,()=>{
    console.log('listing to port 3000')
})


