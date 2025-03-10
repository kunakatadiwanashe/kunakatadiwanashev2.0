import { mongooseConnect } from "@/lib/mongoose";
import { Blog } from "@/models/Blog";

export default async function handle(req, res) {


    await mongooseConnect();

    const { method } = req;

    if (method === 'GET') {
        if (req.query?.id) {
            const Blogs = await Blog.findById(req.query.id);
            res.json(Blogs);
        } else if (req.query?.projectcategory) {
            const Blogs = await Blog.find({ blogcategory: req.query.blogcategory })
            res.json(Blogs);
        } else if (req.query?.tags) {
            const Blogs = await Blog.find({ slug: req.query.tags });
            res.json(Blogs.reverse());
        } else if (req.query?.slug) {
            const Blogs = await Blog.find({ slug: req.query.slug });
            res.json(Blogs.reverse());
        } else {
            const Blogs = await Blog.find();
            res.json(Blogs.reverse());
        }

    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }



}