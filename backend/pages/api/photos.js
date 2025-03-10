import { mongooseConnect } from '@/lib/mongoose';
import { Photo } from '@/models/Photo'; // Ensure this import is correct

export default async function handler(req, res) {
    try {
        await mongooseConnect();
        console.log('Database connected successfully');

        const { method } = req;

        if (method === 'POST') {
            const { title, slug, images } = req.body;
            console.log('Request Body:', req.body); // Log the request body

            try {
                const photoDoc = await Photo.create({
                    title,
                    slug,
                    images,
                });
                console.log('Photo created successfully:', photoDoc);
                res.status(201).json(photoDoc);
            } catch (error) {
                console.error('Error creating photo:', error);
                res.status(500).json({ message: 'Internal Server Error', error: error.message });
            }
        }

        if (method === 'GET') {
            if (req.query?.id) {
                const photo = await Photo.findById(req.query.id);
                if (!photo) {
                    return res.status(404).json({ message: 'Photo not found' });
                }
                res.json(photo);
            } else {
                const photos = await Photo.find().sort({ createdAt: -1 });
                res.json(photos);
            }
        }

        if (method === 'PUT') {
            const { _id, title, slug, images, } = req.body;
            const updatedPhoto = await Photo.findByIdAndUpdate(
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