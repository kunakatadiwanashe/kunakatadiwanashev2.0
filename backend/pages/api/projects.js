import { mongooseConnect } from '@/lib/mongoose';
import { Project } from '@/models/Project';

export default async function handler(req, res) {
    try {
        await mongooseConnect();
        console.log('Database connected successfully');

        const { method } = req;


        if (method === 'POST') {
            const { title, slug, images, description, projectcategory, client, livepreview, tags, status, comments } = req.body;
            console.log('Request Body:', req.body); // Log the request body

            try {
                const blogDoc = await Project.create({
                    title, slug, images, description, projectcategory, client, livepreview, tags, status, comments
                });
                console.log('Project created successfully:', blogDoc);
                res.status(201).json(blogDoc);
            } catch (error) {
                console.error('Error creating blog:', error);
                res.status(500).json({ message: 'Internal Server Error', error: error.message });
            }
        }



        if (method === 'GET') {
            if (req.query?.id) {
                const blog = await Project.findById(req.query.id);
                if (!blog) {
                    return res.status(404).json({ message: 'Blog not found' });
                }
                res.json(blog);
            } else {
                const blogs = await Project.find().sort({ createdAt: -1 });
                res.json(blogs);
            }
        }






        if (method === 'PUT') {
            const { _id, title, slug, images, description, projectcategory, client, livepreview, tags, status, comments } = req.body;
            const updatedProject = await Project.findByIdAndUpdate(
                _id,
                { title, slug, images, description, projectcategory, client, livepreview, tags, status, comments },
                { new: true }
            );
            if (!updatedProject) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            res.json(updatedProject);
        }

        if (method === 'DELETE') {
            if (req.query?.id) {
                const deletedProject = await Project.findByIdAndDelete(req.query.id);
                if (!deletedProject) {
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
