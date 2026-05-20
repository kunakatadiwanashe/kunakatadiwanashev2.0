import mongoose from 'mongoose';

const PhotoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    images: [{ type: String }],
    description: { type: String },
    blogcategory: { type: String },
    status: { type: String, default: 'draft' },
  },
  { timestamps: true }
);

export const Photo = mongoose.models.Photo || mongoose.model('Photo', PhotoSchema);

