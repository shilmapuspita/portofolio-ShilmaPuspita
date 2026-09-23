import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import { certificates, experiences, projects, techStack } from "./data";
import "./App.css";

function TechIcon({ type }) {
  const labels = {
    php: "php",
    python: "py",
    laravel: "L",
    codeigniter: "CI",
    flask: "fl",
    js: "JS",
    mysql: "my",
    mongo: "M",
    git: "git",
    github: "GH",
    bootstrap: "B",
    "black-box": "BB",
    uat: "UAT",
    figma: "Fi",
    excel: "X",
    word: "W",
  };
  return (
    <span className={`tech-icon icon-${type}`} aria-hidden="true">
      {labels[type]}
    </span>
  );
}

function SectionIntro({ kicker, title, children }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {children && <p className="section-note">{children}</p>}
    </div>
  );
}

function ExperienceMedia({ item }) {
  return (
    <div
      className={`experience-media ${item.type === "certificate" ? "certificate-media" : ""}`}
    >
      <img
        src={item.image}
        alt={`${item.role} at ${item.place}`}
        style={{ objectPosition: item.imagePosition }}
      />
      <span className="media-glow" />
      <span className="media-caption">{item.imageLabel}</span>
    </div>
  );
}

function HomePage({ onSelectProject }) {
  return (
    <>
      <main>
        <section className="hero-section page-shell">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" /> OPEN TO TECHNOLOGY & IT
              OPPORTUNITIES
            </div>
            <h1>
              Hi, I&apos;m{" "}
              <span>
                Shilma
                <br />
                Puspita
              </span>
            </h1>
            <p className="hero-lede">
              Information Systems Graduate & Web Developer
            </p>
            <p className="hero-bio">
              I build practical and user-friendly web applications while
              combining technical skills, problem-solving, and an understanding
              of business processes. With hands-on experience in web
              development, system analysis, and software testing, I’m passionate
              about creating reliable digital solutions that solve real-world
              problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="/projects">
                Explore my work <span>↗</span>
              </a>
              <a className="text-link" href="/contact">
                Let&apos;s connect <span>↓</span>
              </a>
            </div>
          </div>
          <div className="hero-portrait" aria-label="Photo of Shilma Puspita">
            <img src="/images/gradu1.JPG" alt="Shilma Puspita" />
            <span className="portrait-glow" />
            <span className="portrait-label">SHILMA / 01</span>
            <span className="portrait-coordinate">
              06°12&apos;S · 106°49&apos;E
            </span>
          </div>
          <div className="hero-scroll">
            <span>Scroll to explore</span>
            <i />
          </div>
        </section>

        <section className="about-section page-shell" id="about">
          <SectionIntro
            kicker="01 / About Me"
            title={
              <>
                Building with <em>curiosity</em>
                <br />
                and purpose.
              </>
            }
          >
            <span>
              I&apos;m an Information Systems graduate from STT Terpadu Nurul
              Fikri with hands-on experience in web development, system
              analysis, and software testing. I enjoy turning ideas and
              real-world problems into practical, user-friendly digital
              solutions.
            </span>
            <span style={{ display: "block", marginTop: "1rem" }}>
              Through internships, academic projects, and teaching experiences,
              I&apos;ve developed not only my technical skills but also my
              ability to analyze problems, communicate ideas, and collaborate
              with others.
            </span>
            <span style={{ display: "block", marginTop: "1rem" }}>
              I&apos;m always curious to learn, improve, and build technology
              that is useful for the people who use it.
            </span>
          </SectionIntro>
          <div className="about-grid">
            <div className="about-note">
              <div className="about-note-top">
                <span className="about-note-index">PROFILE / 01</span>
                <span className="about-note-status">
                  <span className="status-dot" /> curious by default
                </span>
              </div>
              <span className="quote-mark">“</span>
              <p>
                Good technology isn&apos;t just about how it works, but how well
                it helps people.
              </p>
              <span className="note-sign">— Shilma Puspita</span>
              <div className="about-note-footer">
                <span>IS · WEB · PRODUCT</span>
                <span>2026</span>
              </div>
            </div>
            <div className="tech-panel">
              <div className="panel-heading">
                <div>
                  <span className="panel-kicker">My everyday toolkit</span>
                  <strong>Tools I use</strong>
                </div>
                <span className="panel-count">
                  {String(techStack.length).padStart(2, "0")} /{" "}
                  {String(techStack.length).padStart(2, "0")}
                </span>
              </div>
              <div className="tech-grid">
                {techStack.map((tech) => (
                  <div className="tech-item" key={tech.name}>
                    <TechIcon type={tech.type} />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="projects-preview page-shell">
          <div className="section-heading-row">
            <SectionIntro
              kicker="02 / Selected work"
              title={
                <>
                  A few things I&apos;ve
                  <br />
                  <em>worked on.</em>
                </>
              }
            />
            <a className="text-link" href="/projects">
              View all projects <span>↗</span>
            </a>
          </div>
          <div className="project-grid featured-grid">
            {projects.slice(0, 2).map((project) => (
              <ProjectCard
                project={project}
                featured
                onSelect={onSelectProject}
                key={project.slug}
              />
            ))}
          </div>
        </section>

        <section className="experience-section page-shell">
          <SectionIntro
            kicker="03 / The path so far"
            title={
              <>
                Learning by doing,
                <br />
                <em>growing by showing up.</em>
              </>
            }
          />
          <div className="experience-layout">
            <div className="experience-grid">
              {experiences.map((item, index) => (
                <article
                  className="experience-card"
                  key={`${item.role}-${item.place}`}
                >
                  <div className="experience-card-heading">
                    <span className="timeline-date">
                      0{index + 1} / {item.date}
                    </span>
                    <span className="experience-type">{item.type}</span>
                  </div>
                  <ExperienceMedia item={item} />
                  <div className="experience-copy">
                    <h3>{item.role}</h3>
                    <p className="experience-place">{item.place}</p>
                    <p>{item.detail}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="education-card">
              <p className="eyebrow">Education / 01</p>
              <h3>
                S1 Sistem
                <br />
                <em>Informasi</em>
              </h3>
              <p>STT Terpadu Nurul Fikri</p>
              <div className="education-meta">
                <span>2022 — 2026</span>
                <strong>
                  3.96 <small>GPA</small>
                </strong>
              </div>
              <span className="education-seal">IS</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function ProjectsPage({ onSelectProject }) {
  return (
    <main className="subpage page-shell">
      <div className="subpage-heading">
        <p className="eyebrow">02 / Project archive</p>
        <h1>
          Things made to be
          <br />
          <em>useful.</em>
        </h1>
        <p>
          Selected work from my learning journey across product ideas, campus
          systems, and real-world collaboration.
        </p>
      </div>
      <div className="project-grid archive-grid">
        {projects.map((project) => (
          <ProjectCard
            project={project}
            onSelect={onSelectProject}
            key={project.slug}
          />
        ))}
      </div>
      <div className="detail-template">
        <p className="eyebrow">Project detail / template</p>
        <div>
          <h2>
            Every project starts
            <br />
            with a <em>question.</em>
          </h2>
          <p>
            What would make this clearer? Faster? More welcoming? That&apos;s
            usually where I begin.
          </p>
        </div>
      </div>
    </main>
  );
}

function CertificatesPage() {
  return (
    <main className="subpage page-shell">
      <div className="subpage-heading certificate-heading">
        <p className="eyebrow">03 / Proof of practice</p>
        <h1>
          Small wins,
          <br />
          <em>stacked up.</em>
        </h1>
        <p>
          Certificates mark the topics I&apos;ve chosen to go deeper on, one
          focused session at a time.
        </p>
      </div>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article className="certificate-card" key={certificate.code}>
            <div className="certificate-top">
              <span>{certificate.code}</span>
              <span>↗</span>
            </div>
            {/* Menampilkan gambar sertifikat jika propertinya tersedia */}
            {certificate.image ? (
              <div
                className="certificate-image-wrapper"
                style={{
                  marginBottom: "1rem",
                  overflow: "hidden",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : (
              <div className="certificate-emblem">✦</div>
            )}
            <h2>{certificate.title}</h2>
            <p>{certificate.issuer}</p>
            <div className="certificate-bottom">
              <span>{certificate.year}</span>
              <span>Verified learning</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="subpage contact-page page-shell">
      <div className="contact-layout">
        <div>
          <div className="availability" style={{ marginBottom: "1.2rem" }}>
            <span className="status-dot" /> Available for useful collaborations
          </div>
          <p className="eyebrow">04 / Start a conversation</p>
          <h1>
            Have a useful
            <br />
            <em>idea?</em>
          </h1>
          <p className="contact-intro">
            Whether you&apos;re building a product, planning an event, or just
            want to say hello, my inbox is open.
          </p>
          <div
            className="contact-signature-tags"
            style={{
              marginTop: "2rem",
              fontSize: "0.8rem",
              letterSpacing: "1.5px",
              opacity: 0.6,
              fontWeight: 500,
            }}
          >
            WEB · SYSTEM · PEOPLE
          </div>
        </div>
        <div className="contact-links">
          <a href="mailto:puspitashilma@gmail.com">
            <span className="contact-link-icon">@</span>
            <span className="contact-link-copy">
              <small>01 / Direct line</small>
              <strong>puspitashilma@gmail.com</strong>
            </span>
            <span className="contact-link-arrow">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/shilma-puspita"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon">in</span>
            <span className="contact-link-copy">
              <small>02 / Professional</small>
              <strong>Connect with me</strong>
            </span>
            <span className="contact-link-arrow">↗</span>
          </a>
          <a
            href="https://github.com/shilmapuspita"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-link-icon">&lt;/&gt;</span>
            <span className="contact-link-copy">
              <small>03 / Open source</small>
              <strong>See what I&apos;m building</strong>
            </span>
            <span className="contact-link-arrow">↗</span>
          </a>
        </div>
      </div>
    </main>
  );
}

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPath]);
  const page = currentPath.startsWith("/projects") ? (
    <ProjectsPage onSelectProject={setSelectedProject} />
  ) : currentPath.startsWith("/certificates") ? (
    <CertificatesPage />
  ) : currentPath.startsWith("/contact") ? (
    <ContactPage />
  ) : (
    <HomePage onSelectProject={setSelectedProject} />
  );
  return (
    <div className="app">
      <Navbar
        currentPath={
          currentPath === "/" ? "/" : `/${currentPath.split("/")[1]}`
        }
      />
      {page}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <Footer />
    </div>
  );
}

export default App;
