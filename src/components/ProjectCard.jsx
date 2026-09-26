export default function ProjectCard({ project, featured = false, onSelect }) {
  return (
    <div
      className={`project-card project-${project.accent} ${featured ? "featured" : ""}`}
    >
      <button
        type="button"
        className="project-card-main"
        onClick={() => onSelect(project)}
        aria-label={`View details for ${project.title}`}
      >
        <div className="project-card-top">
          <span className="project-number">{project.number} / 03</span>
          <span className="project-arrow">↗</span>
        </div>
        <div className="project-visual">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="project-visual-fallback" aria-hidden="true">
              <span className="visual-line line-one" />
              <span className="visual-line line-two" />
              <span className="visual-panel panel-one" />
              <span className="visual-panel panel-two" />
              <span className="visual-orbit" />
            </div>
          )}
        </div>
        <div className="project-card-copy">
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-list">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </button>
      <div className="project-card-actions">
        {project.githubUrl && (
          <a
            className="project-action-link project-github-link"
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        )}
        {project.testCaseUrl && (
          <a
            className="project-action-link project-test-case-link"
            href={project.testCaseUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 18 18" aria-hidden="true">
              <path d="M5 2.5h5l3 3v10H5z" />
              <path d="M10 2.5v3h3M6.7 8h5.5M6.7 10.4h5.5M6.7 12.8h5.5M9.4 8v4.8" />
            </svg>
            Test Case Black Box
          </a>
        )}
      </div>
    </div>
  );
}
