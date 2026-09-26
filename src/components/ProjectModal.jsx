import { useEffect } from "react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.gallery?.length
    ? project.gallery
    : project.image
      ? [{ src: project.image, alt: `${project.title} preview` }]
      : [];

  return (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <section
        className={`project-modal project-${project.accent}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="project-modal-close"
          type="button"
          onClick={onClose}
          aria-label="Close project details"
        >
          ×
        </button>
        <div className="project-modal-content">
          <div className="project-modal-heading">
            <p className="eyebrow">{project.category}</p>
            <h2 id="project-modal-title">{project.title}</h2>
            <p>{project.description}</p>
          </div>

          <div className="project-modal-section">
            <p className="project-modal-label">Technology / Stack</p>
            <div className="tag-list project-modal-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-modal-section">
            <p className="project-modal-label">Gallery / Documentation</p>
            <div className="project-modal-gallery">
              {gallery.map((item) => (
                <figure key={item.src}>
                  <img src={item.src} alt={item.alt || project.title} />
                  {item.caption && <figcaption>{item.caption}</figcaption>}
                </figure>
              ))}
            </div>
          </div>

          <div className="project-modal-actions">
            {project.githubUrl && (
              <a
                className="button project-action-link project-github-link"
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
            {project.liveUrl && (
              <a
                className="button button-secondary"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo <span>↗</span>
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
