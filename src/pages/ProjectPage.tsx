import type { ProjectSummary } from "../content/projects";
export function ProjectPage({ project }: { project: ProjectSummary }) {
  return <>
    <header className="site-header project-header">
      <a className="wordmark" href="/#top" aria-label="Ritik Mahajan home">rm<span>.</span></a>
      <div className="header-note">INDEPENDENT PRODUCT WORKSHOP <i aria-hidden="true">/</i> PROJECT FILE</div>
      <a className="header-link" href="/#work">All work <span aria-hidden="true">↗</span></a>
    </header>
    <main id="main" className="project-page">
      <a className="back-link" href="/#work">← Back to selected work</a>
      <div className="project-page-meta"><span>{project.kind}</span><span className={project.status === "Work in progress" ? "draft-status status-wip" : "draft-status"}>{project.status}</span></div>
      <h1>{project.name}<span className="project-title-period">.</span></h1>
      <p className="project-lede">{project.positioning}</p>
      <div className="draft-banner" role="note"><span className="draft-banner-mark">WORKING DRAFT</span><p>This page uses illustrative placeholder copy based on the project’s supplied title and short description. It is not a verified feature list, technical case study or record of outcomes. Replace or approve each detail before treating this page as final portfolio content.</p></div>
      <section className="project-overview" aria-labelledby="overview-title"><div className="section-index">01 / OVERVIEW</div><div><p className="section-kicker">THE CURRENT DESCRIPTION</p><h2 id="overview-title">{project.summary}</h2></div></section>
      <section className="project-story" aria-label="Illustrative project narrative">
        {project.draftSections.map((section, index) => <article className="project-story-row" key={section.heading}><span className="project-story-number">0{index + 2}</span><div><p className="section-kicker">DRAFT DIRECTION</p><h2>{section.heading}</h2><p className="project-story-copy">{section.copy}</p></div></article>)}
      </section>
      <section className="confirm-section" aria-labelledby="confirm-title"><div className="section-index">05 / TO MAKE THIS FINAL</div><div><p className="section-kicker">DETAILS TO CONFIRM</p><h2 id="confirm-title">The specifics make<br/><em>the story credible.</em></h2><ul>{project.detailsToConfirm.map(item => <li key={item}>{item}</li>)}</ul></div></section>
      <footer className="project-page-footer"><a className="wordmark" href="/#top">rm<span>.</span></a><a href="/#work">MORE FROM THE WORKSHOP ↗</a></footer>
    </main>
  </>;
}
