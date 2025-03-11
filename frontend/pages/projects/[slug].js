import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ProjectPage = ({ project }) => {
  const router = useRouter();
  const { slug } = router.query;

  // Ensure slug is defined
  if (!slug) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      {/* Render other project details */}
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch all project slugs from your database
  const projects = await fetchProjects();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const project = await fetchProjectBySlug(slug);

  return {
    props: {
      project,
    },
  };
}

export default ProjectPage;