
const { Schema, models, model } = require("mongoose")

const BlogSchema = new Schema({
    title: { type: String },
    slug: { type: String, required: true },
    images: [{ type: String }],
    description: { type: String, required: true },
    blogcategory: { type: String, required: true },
    tags: [{ type: String }],
    status: { type: String, default: 'draft' },
    comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

export const Blog = models.Blog || model('Blog', BlogSchema, 'blogs');



