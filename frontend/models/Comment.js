
const { Schema, models, model } = require("mongoose")

const CommentSchema = new Schema({
name: {type: String, required: true},
email: {type: String, required: true},
title: {type: String},
contentpera:{type: String},
maincomment: {type: Boolean},
blog: {type: Schema.Types.ObjectId, ref: 'Blog', required: true}
}, { timestamps: true });

export const Comment = models.Comment || model('Comment', CommentSchema, 'comments');


