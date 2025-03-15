import { mongooseConnect } from '@/lib/mongoose';
import { Blog } from '@/models/Blog';
import { Comment } from '@/models/Comment';

export default async function handler(req, res) {
    const { slug } = req.query;

    await mongooseConnect();

    if (req.method === 'GET') {
        try {
            const blog = await Blog.findOne({ slug });
            if (!blog) {
                return res.status(404).json({ message: 'Blog not found' });
            }
            const comments = await Comment.find({ blog: blog._id }).sort({ createdAt: -1 });
            res.status(200).json({ blog, comments });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, email, title, contentpera, maincomment, parent, parentName } = req.body;
            const blog = await Blog.findOne({ slug });
            if (!blog) {
                return res.status(404).json({ message: 'Blog not found' });
            }

            let parentComment = null;
            if (parent) {
                parentComment = await Comment.findById(parent);
                if (!parentComment) {
                    return res.status(404).json({ message: 'Parent comment not found' });
                }
            }

            const newComment = new Comment({
                name,
                email,
                title,
                contentpera,
                maincomment,
                parent: parentComment ? parentComment._id : null,
                parentName: parentComment ? parentComment.name : null,
                blog: blog._id
            });

            await newComment.save();
            res.status(201).json(newComment);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
}