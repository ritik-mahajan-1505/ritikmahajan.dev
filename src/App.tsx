import { useState } from "react";

function WorkshopStudy() {
  return (
    <div className="study" role="img" aria-label="An original geometric workbench study with layered shapes, construction lines and annotations">
      <div className="study-topline">
        <span>FIELD NOTE / 001</span>
        <span>IDEA → IMPLEMENTATION</span>
      </div>
      <svg className="study-art" viewBox="0 0 620 560" aria-hidden="true">
        <defs>
          <pattern id="work-grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M28 0H0V28" fill="none" stroke="#34372f" strokeOpacity=".12" strokeWidth="1" />
          </pattern>
          <pattern id="fine-grid" width="7" height="7" patternUnits="userSpaceOnUse">
            <path d="M7 0H0V7" fill="none" stroke="#34372f" strokeOpacity=".08" strokeWidth=".6" />
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
        <path d="M476 94h28M490 80v28" stroke="#b65e42" />
        <path d="M64 84h62M95 53v62M514 448h42M535 427v42" stroke="#34372f" strokeWidth="1.5" />
        <rect x="74" y="474" width="120" height="22" fill="#f1eee5" />
        <text x="84" y="489" fill="#34372f" fontFamily="monospace" fontSize="9" letterSpacing="1.5">MAKE / TEST / REFINE</text>
        <path d="M420 112 458 91" stroke="#b65e42" strokeWidth="1.5" />
        <text x="402" y="103" fill="#34372f" fontFamily="monospace" fontSize="9">01</text>
        <path d="M125 206 170 183" stroke="#34372f" strokeOpacity=".6" />
        <text x="94" y="199" fill="#34372f" fontFamily="monospace" fontSize="9">FORM</text>
      </svg>
      <div className="study-caption">
        <span>01 — A study in making</span>
        <span>THOUGHT / CRAFT / CODE</span>
      </div>
      <span className="study-stamp" aria-hidden="true">BUILD<br />WITH<br />INTENT</span>
    </div>
  );
}

export default function App() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("hello@ritikmahajan.dev");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:hello@ritikmahajan.dev";
    }
  }

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ritik Mahajan home">rm<span>.</span></a>
        <div className="header-note">INDEPENDENT PRODUCT WORKSHOP <i aria-hidden="true">/</i> 2026</div>
        <a className="header-link" href="https://github.com/ritik-mahajan-1505" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
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
              <p className="hero-intro">
                I’m Ritik Mahajan — a full-stack engineer and product builder exploring practical AI, thoughtful software, and the details that make products work.
              </p>
              <div className="hero-actions">
                <a className="button button-dark" href="https://github.com/ritik-mahajan-1505" target="_blank" rel="noreferrer">
                  Explore what I build <span aria-hidden="true">↗</span>
                </a>
                <span className="action-note">Ideas are a starting point.<br />The interesting part is making them real.</span>
              </div>
            </div>

            <div className="hero-visual">
              <WorkshopStudy />
              <p className="visual-note"><span>FIG. A</span> THE INDEPENDENT PRODUCT WORKSHOP</p>
            </div>
          </div>

          <div className="hero-footer">
            <span className="eyebrow">PRODUCT THINKING · ENGINEERING CRAFT</span>
            <span className="footer-rule" aria-hidden="true" />
            <span className="eyebrow">SCROLL LESS. MAKE MORE.</span>
          </div>
        </section>
      </main>
    </>
  );
}
