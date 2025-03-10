import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    images: [{ type: String }],
    description: { type: String, required: true },
    blogcategory: { type: String, required: true },
    tags: [{ type: String }],
    status: { type: String, default: 'draft' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

export const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);