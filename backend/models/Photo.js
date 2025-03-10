import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    images: [{ type: String }],

}, { timestamps: true });

export const Photo = mongoose.models.Blog || mongoose.model('Photo', PhotoSchema);