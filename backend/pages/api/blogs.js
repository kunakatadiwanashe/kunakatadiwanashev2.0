import { mongooseConnect } from '@/lib/mongoose';
import { Blog } from '@/models/Blog'; // Ensure this import is correct

export default async function handler(req, res) {
    try {
        await mongooseConnect();
        console.log('Database connected successfully');

        const { method } = req;


        if (method === 'POST') {
            const { title, slug, images, description, blogcategory, tags, status, comments } = req.body;
            console.log('Request Body:', req.body); // Log the request body

            try {
                const blogDoc = await Blog.create({
                    title,
                    slug,
                    images,
                    description,
                    blogcategory,
                    tags,
                    status,
                    comments,
                });
                console.log('Blog created successfully:', blogDoc);
                res.status(201).json(blogDoc);
            } catch (error) {
                console.error('Error creating blog:', error);
                res.status(500).json({ message: 'Internal Server Error', error: error.message });
            }
        }
 


        if (method === 'GET') {
            if (req.query?.id) {
                const blog = await Blog.findById(req.query.id);
                if (!blog) {
                    return res.status(404).json({ message: 'Blog not found' });
                }
                res.json(blog);
            } else {
                const blogs = await Blog.find().sort({ createdAt: -1 });
                res.json(blogs);
            }
        }






        if (method === 'PUT') {
            const { _id, title, slug, images, description, blogcategory, tags, status, comments } = req.body;
            const updatedBlog = await Blog.findByIdAndUpdate(
                _id,
                { title, slug, images, description, blogcategory, tags, status, comments },
                { new: true }
            );
            if (!updatedBlog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            res.json(updatedBlog);
        }

        if (method === 'DELETE') {
            if (req.query?.id) {
                const deletedBlog = await Blog.findByIdAndDelete(req.query.id);
                if (!deletedBlog) {
                    return res.status(404).json({ message: 'Blog not found' });
                }
                res.json({ message: 'Blog deleted successfully' });
            }
        }
    } catch (error) {
        console.error('Error in API handler:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
}
