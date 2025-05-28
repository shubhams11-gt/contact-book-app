const express = require('express');
const app = express();
const mongo = require('mongo')
const mongoose = require('mongoose');
const ejs = require('ejs')
const blogRoutes = require('./routes/blogRoutes');
const bodyParser = require('body-parser');
require('dotenv').config();
// Set EJS as the view engine 
app.set('view engine','ejs');

// serve static files
app.use(express.static('public'));
//parse data from form
app.use(bodyParser.urlencoded({extended:true}));

//mongoDB Connection
//mongoDB Connection
// mongoose.connect('mongodb://127.0.0.1:27017/simple_blog', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('✅ Connected to MongoDB'))
// .catch(err => console.error('❌ MongoDB connection error:', err));

require('./models/blog');
require('./routes/blogRoutes')
mongoose.connect('mongodb+srv://new-user23:rjzApHqt5N2Cnqme@cluster0.uy91l1f.mongodb.net/blogDB?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('DB connection error:', err));

  

// Use our blog routes

app.use('/', blogRoutes );

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

