// import { mongooseConnect } from "@/lib/mongoose";
// import { Project } from "@/models/Project";

// export default async function handle(req, res) {

//   await mongooseConnect();
//   const { method } = req;

//   if (method === 'GET') {
//     if (req.query?.id) {
//       const project = await Project.findById(req.query.id);
//       res.json(project);
//     } else if (req.query?.projectcategory) {
//       const projectcate = await Project.find({ projectcategory: req.query.projectcategory })
//       res.json(projectcate);
//     } else if (req.query?.slug) {
//       const projectslug = await Project.find({ slug: req.query.slug });
//       res.json(projects.reverse());
//     } else {
//       const projects = await Project.find();
//       res.json(projects.reverse());
//     }

//   } else {
//     res.status(405).json({ message: 'Method Not Allowed' });
//   }



// }




import { Project } from "@/models/Project"; // Adjust the import based on your project structure

export default async function handler(req, res) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method not allowed" });
    }

    if (req.query?.slug) {
      // Find the project by slug
      const projectslug = await Project.find({ slug: req.query.slug });
      if (!projectslug || projectslug.length === 0) {
        return res.status(404).json({ message: "Project not found" });
      }
      return res.status(200).json(projectslug); // Return the filtered project(s)
    } else {
      // Fetch all projects
      const projects = await Project.find();
      return res.status(200).json(projects.reverse()); // Reverse all projects
    }
  } catch (error) {
    console.error("Error fetching projects:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}