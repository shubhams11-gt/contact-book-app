const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Shubham:Shubham23@cluster0.duhteeb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));


