const { Schema, models, model } = require("mongoose")

const ContactSchema = new Schema({
    title: { type: String },
    slug: { type: String, required: true },
    images: [{ type: String }],
    description: { type: String, required: true },
    blogcategory: { type: String, required: true },
    tags: [{ type: String }],
    status: { type: String, default: 'draft' },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
}, { timestamps: true });

export const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema, 'contacts');