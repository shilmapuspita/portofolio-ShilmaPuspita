export default function ProjectCard({ project, featured = false, onSelect }) {
  return (
    <button
      type="button"
      className={`project-card project-${project.accent} ${featured ? "featured" : ""}`}
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
  );
}
