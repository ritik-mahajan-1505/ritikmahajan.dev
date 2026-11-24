import { getProjectBySlug, projects } from "./content/projects";
import { ProjectPage } from "./pages/ProjectPage";

function WorkshopStudy() {
  return (
    <div className="study" role="img" aria-label="An original geometric workbench study with layered shapes, construction lines and annotations">
      <div className="study-topline"><span>FIELD NOTE / 001</span><span>IDEA → IMPLEMENTATION</span></div>
      <svg className="study-art" viewBox="0 0 620 560" aria-hidden="true">
        <defs>
          <pattern id="work-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="#34372f" strokeOpacity=".12" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="620" height="560" fill="#e6e0d3" />
        <rect width="620" height="560" fill="url(#work-grid)" />
        <rect x="46" y="42" width="528" height="476" fill="none" stroke="#34372f" strokeOpacity=".25" />
        <path d="M94 378 218 116l180 46 95 210-178 88z" fill="#344b3d" />
        <path d="m218 116 180 46-57 145-170-42z" fill="#e9b95f" />
        <path d="m341 307 152 65-178 88-4-153z" fill="#b65e42" />
        <path d="m94 378 77-113 170 42 4 153z" fill="#d2c9b8" />
        <path d="m218 116 76-62 161 61-57 47z" fill="#b65e42" />
        <path d="m398 162 57-47 72 160-34 97z" fill="#e9b95f" />
        <path d="M94 378 171 265l-17 167-60 46z" fill="#27382f" />
        <path d="M82 464h456M310 54v452" stroke="#34372f" strokeOpacity=".45" strokeDasharray="3 7" />
        <circle cx="490" cy="94" r="31" fill="none" stroke="#b65e42" strokeWidth="2" />
        <circle cx="490" cy="94" r="5" fill="#b65e42" />
        <path d="M476 94h28M490 80v28M64 84h62M95 53v62M514 448h42M535 427v42" stroke="#b65e42" strokeWidth="1.5" />
        <rect x="74" y="474" width="120" height="22" fill="#f1eee5" />
        <text x="84" y="489" fill="#34372f" fontFamily="monospace" fontSize="9" letterSpacing="1.5">MAKE / TEST / REFINE</text>
        <path d="M420 112 458 91" stroke="#b65e42" strokeWidth="1.5" />
        <text x="402" y="103" fill="#34372f" fontFamily="monospace" fontSize="9">01</text>
        <path d="M125 206 170 183" stroke="#34372f" strokeOpacity=".6" />
        <text x="94" y="199" fill="#34372f" fontFamily="monospace" fontSize="9">FORM</text>
      </svg>
      <div className="study-caption"><span>01 — A study in making</span><span>THOUGHT / CRAFT / CODE</span></div>
      <span className="study-stamp" aria-hidden="true">BUILD<br />WITH<br />INTENT</span>
    </div>
  );
}

export default function App() {
  const projectMatch = window.location.pathname.match(/^\/work\/([^/]+)\/?$/);
  if (projectMatch) {
    const project = getProjectBySlug(decodeURIComponent(projectMatch[1]));
    if (project) return <ProjectPage project={project} />;
    return <main className="not-found"><p className="section-kicker">404 / NOT IN THE WORKSHOP</p><h1>This page is still<br/><em>off the drawing board.</em></h1><a className="button button-dark" href="/#work">Back to selected work <span aria-hidden="true">↗</span></a></main>;
  }
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ritik Mahajan home">rm<span>.</span></a>
        <div className="header-note">INDEPENDENT PRODUCT WORKSHOP <i aria-hidden="true">/</i> 2026</div>
        <nav className="header-nav" aria-label="Main navigation">
          <a href="#work">Work</a><a href="#approach">Approach</a>
          <a className="header-link" href="https://github.com/ritik-mahajan-1505" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-meta">
            <span className="eyebrow"><span className="status-mark" aria-hidden="true" /> ENGINEERING / AI / PRODUCT</span>
            <span className="eyebrow meta-right">A PRACTICE OF MAKING USEFUL THINGS</span>
          </div>
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker"><span>01</span> — A little about what I do</p>
              <h1 id="hero-title">I turn<br />interesting ideas<br />into <em>working</em><br /><span className="headline-last">products.</span></h1>
              <p className="hero-intro">I’m Ritik Mahajan — a full-stack engineer and product builder exploring practical AI, thoughtful software, and the details that make products work.</p>
              <div className="hero-actions">
                <a className="button button-dark" href="#work">Explore selected work <span aria-hidden="true">↓</span></a>
                <span className="action-note">Ideas are a starting point.<br />The interesting part is making them real.</span>
              </div>
            </div>
            <div className="hero-visual">
              <WorkshopStudy />
              <p className="visual-note"><span>FIG. A</span> THE INDEPENDENT PRODUCT WORKSHOP</p>
            </div>
          </div>
          <div className="hero-footer">
            <span className="eyebrow">PRODUCT THINKING · ENGINEERING CRAFT</span><span className="footer-rule" aria-hidden="true" /><span className="eyebrow">SCROLL LESS. MAKE MORE.</span>
          </div>
        </section>

        <section className="content-section approach-section" id="approach" aria-labelledby="approach-title">
          <div className="section-index">02 / THE APPROACH</div>
          <div className="section-main">
            <p className="section-kicker">FROM QUESTION TO WORKING SOFTWARE</p>
            <h2 id="approach-title">Start with the problem.<br /><em>Stay curious about the solution.</em></h2>
            <div className="approach-copy">
              <p>I enjoy the process of turning an interesting idea or practical problem into something people can actually use. That means thinking beyond the first feature: understanding what needs to happen, choosing a sensible way to build it, and paying attention to the details that make the result useful.</p>
              <p>My work moves across full-stack product development and practical AI. I’m interested in the space where product decisions, software engineering and emerging tools meet — and in making those pieces work together rather than treating them as separate disciplines.</p>
            </div>
            <div className="principles" aria-label="Working principles">
              <span>01 — Understand the problem</span><span>02 — Build with intent</span><span>03 — Test the behavior</span><span>04 — Refine the details</span>
            </div>
          </div>
        </section>

        <section className="content-section work-section" id="work" aria-labelledby="work-title">
          <div className="section-index">03 / SELECTED WORK</div>
          <div className="section-main">
            <div className="section-heading-row">
              <div><p className="section-kicker">A FEW THINGS I’VE BEEN MAKING</p><h2 id="work-title">Built to be <em>used.</em></h2></div>
              <p className="section-aside">A growing collection of products and explorations. Open a project for its current working draft.</p>
            </div>
            <div className="project-list">
              {projects.map((project, index) => (
                <a className="project-row project-row-link" href={`/work/${project.slug}`} key={project.slug} aria-label={`Read the ${project.name} project draft`}>
                  <span className="project-number">0{index + 1}</span>
                  <div className="project-description">
                    <div className="project-title-line"><h3>{project.name}</h3><span className={`project-status ${project.status === "Work in progress" ? "status-wip" : ""}`}>{project.status}</span></div>
                    <p>{project.summary}</p>
                  </div>
                  <span className="project-kind">{project.kind}</span><span className="project-open" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
            <p className="work-note">Each page is a clearly marked working draft. Product-specific facts, visuals and implementation details will replace the illustrative copy as they are confirmed.</p>
          </div>
        </section>

        <section className="content-section practice-section" id="practice" aria-labelledby="practice-title">
          <div className="section-index">04 / ENGINEERING PRACTICE</div>
          <div className="section-main">
            <p className="section-kicker">A BROAD TOOLKIT, APPLIED TO REAL PROBLEMS</p>
            <h2 id="practice-title">From product surface<br />to <em>underlying systems.</em></h2>
            <div className="practice-grid">
              <article><span className="practice-mark">A</span><h3>Full-stack development</h3><p>Building across application interfaces, server-side logic, integrations and the systems that connect them.</p></article>
              <article><span className="practice-mark">B</span><h3>Applied AI & agents</h3><p>Working with LLM integrations, agent workflows, tool calling, LangChain, LangGraph and MCP.</p></article>
              <article><span className="practice-mark">C</span><h3>Infrastructure & delivery</h3><p>Working with cloud infrastructure, AWS, deployment pipelines and DevOps practices that help software ship.</p></article>
            </div>
            <p className="technology-note">Tools and languages I’ve worked with include Python, Ruby, JavaScript, Node.js and React. The right choice depends on the problem being solved.</p>
          </div>
        </section>

        <section className="closing-section" aria-labelledby="closing-title">
          <div className="closing-rule" />
          <p className="section-kicker">05 / KEEP IN TOUCH</p>
          <div className="closing-content">
            <h2 id="closing-title">Have an interesting<br /><em>problem to solve?</em></h2>
            <p>I’m always interested in thoughtful ideas, useful products and the engineering behind them.</p>
            <a className="button button-dark" href="https://github.com/ritik-mahajan-1505" target="_blank" rel="noreferrer">Find me on GitHub <span aria-hidden="true">↗</span></a>
          </div>
          <footer className="site-footer"><a className="wordmark" href="#top">rm<span>.</span></a><span>INDEPENDENT PRODUCT WORKSHOP</span><a href="#top">BACK TO TOP ↑</a></footer>
        </section>
      </main>
    </>
  );
}
