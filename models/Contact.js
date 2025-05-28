const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
})

const contactModel = mongoose.model('contact',contactSchema);

module.exports = contactModel;

