const express = require('express');
const router = express.Router();
const contact = require('../models/Contact')
const contactss = require('../models/Contact')

router.get('/', async (req,res)=>{
    const contacts = await contact.find({});
    res.render('index',{contacts});
})


router.get('/add',(req,res)=>{
    res.render('add')
})

router.post('/add',async (req,res)=>{
    const {name,phone,email} = req.body;
    await contact.create({name,phone,email});
    res.redirect('/');
})

router.get('/delete/:id', async (req, res) => {
    await contact.findByIdAndDelete(req.params.id);
    res.redirect('/')
})

// Show edit form
router.get('/edit/:id', async (req, res) => {
  const contact = await contactss.findById(req.params.id);
  res.render('edit', { contact });
});


router.post('/edit/:id', async (req, res) => {
    const {name,phone,email} = req.body;
    await contact.findByIdAndUpdate(req.params.id,{name,phone,email});
    res.redirect('/');
})

module.exports = router;
