import React from 'react';
import Image from 'next/image'; // Import Image here

// Define Card component here or import if separated
function ProjectCard({ project }) {
  const imageLinkUrl = (project.liveUrl && project.liveUrl !== "#")
                      ? project.liveUrl
                      : (project.repoUrl && project.repoUrl !== "#" ? project.repoUrl : '#');

  return (
    <div className="projectCard">
      {project.imageUrl && (
        <a
          href={imageLinkUrl}
          target={imageLinkUrl !== '#' ? "_blank" : undefined}
          rel={imageLinkUrl !== '#' ? "noopener noreferrer" : undefined}
          aria-label={`Link to project: ${project.title}`}
          className="projectImageLinkWrapper"
        >
          <div className="projectImageContainer">
              <Image
                src={project.imageUrl}
                alt={`${project.title} preview`}
                // *** IMPORTANT: Update width/height to match actual image dimensions ***
                width={1200} // Example placeholder width
                height={750} // Example placeholder height
                layout="responsive"
                objectFit="cover"
                priority={project.id === 1 || project.id === 2}
              />
          </div>
        </a>
      )}
      <div className="projectCardContent">
        <h3 className="projectTitle">{project.title}</h3>
        <p className="projectDescription">{project.description}</p>
        {project.tech && project.tech.length > 0 && (
          <div className="projectTech">
            {project.tech.map((tech, index) => (
              <span key={index} className="techTag">{tech}</span>
            ))}
          </div>
        )}
        <div className="projectLinks">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="projectLinkButton">
               View Project / Demo
            </a>
          )}
          {project.repoUrl && project.repoUrl !== "#" && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="projectLinkButton secondary">
               GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}


export default function Projects({ projects }) { // Receive projects data
  return (
    <section id="projects" className="contentSection projects">
      <h2>Projects</h2>
      <div className="projectsGrid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}