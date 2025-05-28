const expree = require('express');
const Blog = require('../models/blog');
const router = expree.Router();

// Show all blog posts

router.get('/', async (req, res) => {
  const blogs = await Blog.find(); // Should return an array
  res.render('index', { blogs });
});

// Form to create a new blog

router.get('/new',(req,res)=>{
    res.render('new');
})

router.post('/new',async (req,res)=>{
    const {title, content} = req.body;
    await Blog.create({title,content});
    res.redirect('/')
})

// View the blog

router.get('/blog/:id', async (req,res)=>{
    const blogID = req.params.id;
    const blog = await Blog.findById(blogID);
    res.render('show', {blog})
})

router.post('/blog/:id/delete',async(req,res)=>{
    await Blog.findByIdAndDelete(req.params.id);
    res.redirect('/')
})

module.exports = router;
