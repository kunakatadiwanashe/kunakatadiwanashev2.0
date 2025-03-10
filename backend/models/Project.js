const {Schema, models, model} = require('mongoose');

const projectSchema = new Schema({
    title: { type: String, },
    slug: { type: String,},
    description: { type: String, },
    images: { type: Array, },
    projectcategory: { type: String, },
    tags: { type: Array, },
    status: { type: String, },
    client: { type: String, },
    livepreview: { type: String, },
    
}, {
    timestamps: true,
});

export const Project = models.Project || model('Project', projectSchema, 'projects'); 