const Blog = require('../models/blog_model');
const User = require('../models/user_model');

module.exports ={
     //Add post by specific user
     AddBlog: async(req, res) => {
         let user, data, blog, newBlog;
        //  console.log('body', req.body);
        //  console.log('header', req.user)
        //Find the User
        try {
            user = await User.findById(req.user._id)
        } catch (e) {
            throw e
        } finally {
            data = req.value.body;
            data.user = user;
        
            blog = new Blog(data);
            newBlog = await blog.save();
            //add post to user model
            user.blog.push(blog)
            await user.save();
            //we are done
            res.status(200).json(blog);
        }
    },
    //Get All Post
    GetAllBlog: async(req, res) => {
        const AllBlog= await Blog.find({}).populate('comments user');
        res.status(200).json(AllBlog);
    },

     //Get All post by specific user
    GetAllBlogBySpecificUser: async(req, res) => {
        const blog = await Blog.find({ user: req.user._id }).sort({date: '-1'}).populate('comments user');
        res.status(200).json(blog);
    },
     //Get post by post Id
     GetBlogById: async(req, res) => {
        const blog = await Blog
            .findById(req.value.params.blogId)
            .populate('comments user')
            .populate({ 
                path: 'comments',  
                populate: {
                    path: 'user',
                    model: 'user'
                }
            })
            .exec((err, response) => {
                if(err) throw err;
                res.status(200).json(response);                
            })
    },

    //Update Post
    UpdateBlog: async(req, res) => {
        const blog = await Blog
            .findByIdAndUpdate(req.value.params.blogId,
                req.value.body);
        res.status(200).json({ sucess: true });
    },

    //Delete post
    DeleteBlogById: async(req, res) => {
        const blog = await Blog.findById(req.value.params.blogId);
        if (!blog) {
            return res.status(404).json({ error: "Blog doesn\'t exist" })
        }
        const user = await User.findById(blog.user);
        user.blog.pull(blog)
        await user.save()
        await blog.remove();
        res.status(200).json({ sucess: true });
    }


}