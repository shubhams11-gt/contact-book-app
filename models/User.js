// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//     username:{
//         type: String,
//         required: true,
//         unique: true,
//         trim: true
//     },
//     password:{
//         type: String,
//         required: true
//     }
// });

// //Before saving, hash password

// userSchema.pre('save',async function(next){
//     if (!this.isModified('password')) return next();
//     this.password = await bcrypt.hash(this.password, 12);
//     next();
// })

