"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Download,
  Search,
  Plus,
  Github,
  FileText,
  LockKeyhole,
  UserRound,
  BriefcaseBusiness,
  FolderOpen,
  BookOpen,
  Mail,
  MapPin,
  ChevronDown,
  Handshake,
} from "lucide-react";
import { projects, githubProjects, lastGithubSync } from "@/lib/project-catalog";
import dynamic from "next/dynamic";
import ConsultationChat from "@/components/portfolio/consultation-chat";
import LearningResources from "@/components/portfolio/learning-resources";
import { repositoryGuides } from "@/lib/repository-guides";
import { asset } from "@/lib/assets";
import { socials, papers, interests } from "@/lib/portfolio-data";
import {
  projectDetails,
  experience,
  earlierExperience,
} from "@/lib/portfolio-details";

const RepositoryReadme = dynamic(() => import("@/components/portfolio/repository-readme"), {loading: () => <p>Loading project details…</p>});

const sections = [
  { id: "about", label: "About", icon: UserRound },
  { id: "experience", label: "Experience", icon: BriefcaseBusiness },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "research", label: "Research", icon: BookOpen },
  { id: "startups", label: "Startups", icon: Handshake },
  { id: "contact", label: "Contact", icon: Mail },
] as const;
type Section = (typeof sections)[number]["id"];
const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
function Out({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      className="external"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState<Section>("about");
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("featured");
  const [openProjects, setOpenProjects] = useState<string[]>([
    "When Reasoning Collapses",
  ]);
  useEffect(() => {
    const sync = () => {
      const hash = window.location.hash.slice(1);
      const id = hash === "consulting" ? "startups" : hash;
      if (sections.some((s) => s.id === id)) setActive(id as Section);
      else if (!id) setActive("about");
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);
  function navigate(id: Section) {
    setActive(id);
    if (window.location.hash !== `#${id}`) window.location.hash = id;
    requestAnimationFrame(() => {
      document.getElementById("content-title")?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "instant" });
    });
  }
  const filtered = projects.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.title} ${p.description} ${p.stack} ${p.repo ?? ""}`
        .toLowerCase()
        .includes(query.trim().toLowerCase()),
  );
  const results =
    sort === "az"
      ? [...filtered].sort((a, b) => a.title.localeCompare(b.title))
      : filtered;
  function toggleProject(title: string) {
    setOpenProjects((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title],
    );
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="site-shell">
        <aside className="sidebar">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              navigate("about");
            }}
            className="profile-home"
          >
            <img
              src={asset("/images/profile.jpeg")}
              alt="Azka Ikramullah"
              width={100}
              height={100}
              fetchPriority="high"
            />
            <strong>Azka Ikramullah</strong>
            <span>AI engineer & researcher</span>
          </a>
          <p className="location">
            <MapPin size={13} aria-hidden="true" />
            South Korea
          </p>
          <nav aria-label="Portfolio sections">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                aria-current={active === s.id ? "page" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(s.id);
                }}
              >
                <s.icon size={17} aria-hidden="true" />
                {s.label}
                {s.id === "projects" && (
                  <span className="nav-count">{projects.length}</span>
                )}
                {s.id === "research" && (
                  <span className="nav-count">{papers.length}</span>
                )}
              </a>
            ))}
          </nav>
          <div className="sidebar-bottom">
            <a
              className="cv-button"
              href={asset("/Azka_Ikramullah_CV.pdf")}
              download
            >
              <Download size={15} aria-hidden="true" />
              Download CV
            </a>
            <div className="sidebar-links">
              <Out href={socials[0].url}>GitHub</Out>
              <Out href={socials[3].url}>LinkedIn</Out>
            </div>
            <p>azkaikramullah496@gmail.com</p>
          </div>
        </aside>
        <main id="main" className="main">
          <header className="content-header">
            <span>PORTFOLIO / {active.toUpperCase()}</span>
            <a href="mailto:azkaikramullah496@gmail.com">
              Email me <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </header>
          <div className="content">
            <div className="page-heading">
              <h1 id="content-title" tabIndex={-1}>
                {sections.find((s) => s.id === active)?.label}
              </h1>
              {active !== "about" && (
              <p>
                {
                  {
                    about: "",
                    experience: "Roles, responsibilities, and results.",
                    projects:
                      "Projects and collections, with descriptions, tools, and code.",
                    research:
                      "Papers and research findings.",
                    startups: "The businesses and products I’m building.",
                    contact: "Where to reach me and find my work.",
                  }[active]
                }
              </p>
              )}
            </div>

            <section
              hidden={active !== "about"}
              aria-label="About Azka"
              className="section-content"
            >
              <div className="intro-panel">
                <span className="small-label">CURRENT ROLE</span>
                <h2>
                  Graduate Research Assistant
                  <br />
                  <span>ISML Lab, Gachon University</span>
                </h2>
                <p>
                  I’m an AI engineer and master’s student in Computer
                  Engineering. I build applications that use language models,
                  and I study how those models reason and where they fail.
                </p>
                <p>
                  Before joining Gachon University, I worked on AI assistants at
                  AIO and iOS applications at FitFlex. My experience covers
                  research, backend development, and mobile software.
                </p>
                <div className="intro-links">
                  <a
                    href="#experience"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("experience");
                    }}
                  >
                    View experience <ArrowRight size={15} aria-hidden="true" />
                  </a>
                  <Out href={socials[1].url}>Google Scholar</Out>
                </div>
              </div>
              <div className="block-heading">
                <h2>What I work on</h2>
              </div>
              <div className="focus-grid">
                <article>
                  <BriefcaseBusiness size={20} aria-hidden="true" />
                  <h3>Industry</h3>
                  <p>
                    AI assistants, APIs, and mobile applications. My work
                    includes code-generation tools and message classification.
                  </p>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      setCategory("All");
                      navigate("projects");
                    }}
                  >
                    Browse projects <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </article>
                <article>
                  <BookOpen size={20} aria-hidden="true" />
                  <h3>Academia</h3>
                  <p>
                    Experiments on language-model reasoning and safety,
                    including when models give incorrect answers or bypass
                    safeguards.
                  </p>
                  <a
                    href="#research"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("research");
                    }}
                  >
                    Read the papers <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </article>
                <article>
                  <FolderOpen size={20} aria-hidden="true" />
                  <h3>Business applications</h3>
                  <p>
                    Tools for querying restaurant data, analyzing customer
                    reviews, and turning spoken information into structured
                    offers.
                  </p>
                  <a
                    href="#projects"
                    onClick={(e) => {
                      e.preventDefault();
                      setCategory("Business AI");
                      navigate("projects");
                    }}
                  >
                    View applications{" "}
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </article>
              </div>
              <div className="block-heading">
                <h2>Education</h2>
              </div>
              <div className="education-list">
                <article>
                  <div>
                    <h3>M.S. Computer Engineering</h3>
                    <p>Gachon University · Seongnam, South Korea</p>
                    <span>
                      Research: language-model security and reasoning.
                      Coursework includes reinforcement learning, natural
                      language processing, and computer vision.
                    </span>
                  </div>
                  <time>Mar 2025 — Present</time>
                </article>
                <article>
                  <div>
                    <h3>B.S. Information Technology</h3>
                    <p>Air University · Islamabad, Pakistan</p>
                    <span>
                      Final-year project: PTSD prediction from clinical text,
                      with mentorship through the 10Pearls FYP Accelerator.
                    </span>
                  </div>
                  <time>May 2019 — May 2023</time>
                </article>
              </div>
              <details className="simple-disclosure">
                <summary>
                  Academic activities <Plus size={17} aria-hidden="true" />
                </summary>
                <div className="activity-list">
                  {[
                    {
                      date: "2026",
                      title: "WiML at NeurIPS · Reviewer",
                      text: "Served as a reviewer for Women in Machine Learning (WiML) at NeurIPS 2026.",
                    },
                    {
                      date: "Jul 2026",
                      title: "Women in Machine Learning Symposium at ICML",
                      text: "Presented When Reasoning Collapses as a poster in Seoul, South Korea.",
                    },
                    {
                      date: "2026",
                      title: "AAAI Conference on Artificial Intelligence",
                      text: "Presented work on language-model reasoning and jailbreak robustness.",
                    },
                    {
                      date: "Jan 2026",
                      title: "MENAML Conference",
                      text: "Reviewed applications for the conference selection process.",
                    },
                    {
                      date: "Feb 2025",
                      title: "MENA Machine Learning Winter School",
                      text: "Participated in sessions on responsible AI, language models, and federated learning at QCRI in Doha.",
                    },
                    {
                      date: "2025 — Present",
                      title: "BK21 research project",
                      text: "Contribute to government-funded work on language-model security and trustworthy AI at Gachon University.",
                    },
                  ].map((a) => (
                    <article key={a.title}>
                      <span>{a.date}</span>
                      <div>
                        <h3>{a.title}</h3>
                        <p>{a.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </details>
              <details className="simple-disclosure">
                <summary>
                  Trends I follow <Plus size={17} aria-hidden="true" />
                </summary>
                <div className="interest-list">
                  {interests.map((i) => (
                    <article key={i.title}>
                      <h3>{i.title}</h3>
                      <p>{i.text}</p>
                    </article>
                  ))}
                </div>
              </details>
              <details className="simple-disclosure">
                <summary>
                  Topic-wise learning resources <Plus size={17} aria-hidden="true" />
                </summary>
                <LearningResources />
              </details>
              <details className="simple-disclosure">
                <summary>
                  Courses & certifications <Plus size={17} aria-hidden="true" />
                </summary>
                <ul className="bullets">
                  <li>Prompt Engineering for ChatGPT</li>
                  <li>Google Advanced Data Analytics</li>
                  <li>Google Analytics Certification</li>
                  <li>
                    Supervised and Unsupervised Machine Learning — Andrew Ng
                  </li>
                </ul>
              </details>
            </section>

            <section
              hidden={active !== "experience"}
              aria-label="Experience"
              className="section-content"
            >
              <div className="experience-list">
                {experience.map((job) => (
                  <article className="job" key={job.organization}>
                    <div className="job-top">
                      <span className="badge">{job.type}</span>
                      <span>{job.dates}</span>
                    </div>
                    <h2>{job.role}</h2>
                    <div className="job-company">
                      <Out href={job.url}>{job.organization}</Out>
                      <span>{job.location}</span>
                    </div>
                    <p className="job-summary">{job.summary}</p>
                    <ul className="bullets">
                      {job.details.map((d) => (
                        <li key={d}>{d}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="block-heading">
                <h2>Earlier experience & training</h2>
              </div>
              <div className="earlier-list">
                {earlierExperience.map((job) => (
                  <details key={job.title}>
                    <summary>
                      <div>
                        <h3>{job.title}</h3>
                        <p>{job.role}</p>
                      </div>
                      <span>{job.dates}</span>
                      <Plus size={17} aria-hidden="true" />
                    </summary>
                    <p className="expanded-text">{job.text}</p>
                  </details>
                ))}
              </div>
            </section>

            <section
              hidden={active !== "projects"}
              aria-label="Projects"
              className="section-content"
            >
              {!query && category === "All" && <div className="featured-projects" aria-label="Featured projects">
                {[
                  {title:"When Reasoning Collapses", label:"Research", text:"How reasoning changes as questions get harder."},
                  {title:"AI Code Assistant", label:"Development", text:"APIs for generating, explaining, and debugging code."},
                  {title:"AgriDirect", label:"Business", text:"Turn agricultural briefings into structured offers."},
                ].filter(feature => projects.some(p => p.title === feature.title)).map(feature => <button key={feature.title} onClick={() => {setQuery(feature.title); setOpenProjects(prev => [...new Set([...prev, feature.title])]);}}>
                  <span className="small-label">{feature.label}</span><h2>{feature.title}</h2><p>{feature.text}</p><span className="featured-link">Explore project ↗</span>
                </button>)}
              </div>}
              <div className="project-controls">
                <label className="search-field">
                  <Search size={17} aria-hidden="true" />
                  <span className="sr-only">Search projects</span>
                  <input
                    type="search"
                    placeholder="Search name, topic, or tool"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </label>
                <label className="select-field">
                  <span className="sr-only">Sort projects</span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                  >
                    <option value="featured">Original order</option>
                    <option value="az">A–Z</option>
                  </select>
                </label>
              </div>
              <div className="category-filters" aria-label="Project categories">
                {categories.map((c) => (
                  <button
                    key={c}
                    aria-pressed={category === c}
                    onClick={() => setCategory(c)}
                  >
                    {c}
                    <span>
                      {c === "All"
                        ? projects.length
                        : projects.filter((p) => p.category === c).length}
                    </span>
                  </button>
                ))}
              </div>
              {lastGithubSync && <p className="sync-note">GitHub updated {lastGithubSync.slice(0,10)}</p>}
              <div className="result-bar">
                <p role="status" aria-live="polite">
                  {results.length} of {projects.length} projects
                </p>
                <button
                  onClick={() =>
                    setOpenProjects(
                      results.every((p) => openProjects.includes(p.title))
                        ? []
                        : results.map((p) => p.title),
                    )
                  }
                >
                  {results.length > 0 &&
                  results.every((p) => openProjects.includes(p.title))
                    ? "Collapse details"
                    : "Expand details"}
                  <ChevronDown size={14} aria-hidden="true" />
                </button>
              </div>
              <div className="project-list">
                {results.map((p) => {
                  const detail = projectDetails[p.title];
                  const githubRepo = !p.private && githubProjects.find(repo => repo.repo === p.repo);
                  const guide = repositoryGuides[p.title];
                  const isOpen = openProjects.includes(p.title);
                  const id = `project-${projects.indexOf(p)}`;
                  return (
                    <article
                      className={`project ${isOpen ? "is-open" : ""}`}
                      key={p.title}
                    >
                      <button
                        className="project-toggle"
                        aria-expanded={isOpen}
                        aria-controls={id}
                        onClick={() => toggleProject(p.title)}
                      >
                        <div>
                          <span className="small-label">
                            {p.category}
                            {detail?.period ? ` · ${detail.period}` : ""}
                          </span>
                          <h2>{p.title}</h2>
                          <p>{p.description}</p>
                        </div>
                        <Plus size={19} aria-hidden="true" />
                      </button>
                      <div className="project-body" id={id} hidden={!isOpen}>
                        {githubRepo ? (active === "projects" && isOpen && <RepositoryReadme repo={githubRepo} />) : detail && <dl>
                          <div>
                            <dt>Purpose</dt>
                            <dd>{detail.context}</dd>
                          </div>
                          <div>
                            <dt>Work included</dt>
                            <dd>
                              <ul className="bullets">
                                {detail.work.map((w) => (
                                  <li key={w}>{w}</li>
                                ))}
                              </ul>
                            </dd>
                          </div>
                          <div>
                            <dt>Tools</dt>
                            <dd>{p.stack}</dd>
                          </div>
                          {detail.result && (
                            <div>
                              <dt>Result</dt>
                              <dd>{detail.result}</dd>
                            </div>
                          )}
                        </dl>}
                        {!githubRepo && guide && (
                          <div className="repository-guide">
                            <p className="repo-status"><span className="small-label">Repository status</span>{guide.status}</p>
                            <h3>How it works</h3>
                            <ol className="project-flow">{guide.flow.map((step) => <li key={step}>{step}</li>)}</ol>
                            <details className="setup-guide">
                              <summary>Explore the code &amp; setup</summary>
                              <h4>Key files</h4>
                              {guide.files.length ? <ul className="repo-files">{guide.files.map((file) => <li key={file.path}><Out href={file.url}>{file.path}</Out></li>)}</ul> : <p>This repository currently contains only a README.</p>}
                              {p.private && <p className="repo-access">Repository access is required to open these files.</p>}
                              <h4>Setup and use</h4>
                              {guide.setup.split(/(```[\s\S]*?```)/g).filter(Boolean).map((block, i) => block.startsWith("```") ? <pre key={i}><code>{block.replace(/^```[^\n]*\n/, "").replace(/```$/, "").trim()}</code></pre> : <p key={i}>{block.split(/(`[^`]+`)/g).map((part, j) => part.startsWith("`") ? <code key={j}>{part.slice(1, -1)}</code> : part)}</p>)}
                              <h4>Current limits</h4>
                              <p>{guide.notes}</p>
                              <div className="guide-references"><Out href={guide.readme}>Full repository guide</Out>{guide.links.map((link) => <Out key={link.url} href={link.url}>{link.label}</Out>)}</div>
                            </details>
                            {p.repo === "reasoning-code" && <figure className="research-preview"><a href="https://github.com/Azka1212/reasoning-code/blob/main/AAAI/Diagram3.png" target="_blank" rel="noreferrer"><img src={asset("/research/reasoning-overview.png")} alt="Experiment diagram from When Reasoning Collapses" loading="lazy" /></a><figcaption>Experiment overview from When Reasoning Collapses. Open the paper or repository for the full analysis.</figcaption></figure>}
                          </div>
                        )}
                      </div>
                      <div className="project-links">
                        <span>
                          {p.private ? (
                            <>
                              <LockKeyhole size={12} aria-hidden="true" />
                              Private repository
                            </>
                          ) : p.repo ? (
                            "Public repository"
                          ) : (
                            "No public repository linked"
                          )}
                        </span>
                        {p.repo && (
                          <Out href={`https://github.com/Azka1212/${p.repo}`}>
                            <Github size={14} aria-hidden="true" />
                            {p.private
                              ? "Repository · access required"
                              : "GitHub code"}
                          </Out>
                        )}
                        {papers
                          .find((paper) => paper.title === p.title)
                          ?.links.filter(
                            (link) =>
                              link.label === "Paper" ||
                              link.label === "Paper PDF",
                          )
                          .map((link) => (
                            <Out key={link.url} href={link.url}>
                              <FileText size={14} aria-hidden="true" />
                              Paper
                            </Out>
                          ))}
                      </div>
                    </article>
                  );
                })}
              </div>
              {results.length === 0 && (
                <div className="empty-state">
                  <h2>No matching projects</h2>
                  <p>Try another term or reset the filters.</p>
                  <button
                    onClick={() => {
                      setQuery("");
                      setCategory("All");
                    }}
                  >
                    Reset filters
                  </button>
                </div>
              )}
              <p className="footnote">
                Includes projects and learning collections. Duplicate portfolio
                sites and empty placeholders are omitted.
              </p>
            </section>

            <section
              hidden={active !== "research"}
              aria-label="Research"
              className="section-content"
            >
              <div className="research-intro">
                <p>
                  I study the reasoning and safety of large language models at
                  ISML Lab. My work uses experiments to examine when models make
                  mistakes and how their behavior changes under more difficult
                  tasks or adversarial prompts.
                </p>
                <div>
                  <Out href={socials[1].url}>Google Scholar</Out>
                  <Out href={socials[2].url}>OpenReview papers</Out>
                  <Out href="https://ai-security.github.io/professor_main_e.htm">
                    ISML Lab
                  </Out>
                </div>
              </div>
              <div className="block-heading">
                <h2>Publications</h2>
                <span>{papers.length} papers & posters</span>
              </div>
              <div className="paper-list">
                {papers.map((paper, i) => (
                  <article className="paper" key={paper.title}>
                    <div className="paper-meta">
                      <span className="badge">{paper.venue}</span>
                      <span>{paper.status}</span>
                    </div>
                    <h2>
                      {paper.title}: {paper.subtitle}
                    </h2>
                    <p className="authors">{paper.authors}</p>
                    <p>{paper.description}</p>
                    <div className="paper-links">
                      {paper.links.map((link) => (
                        <Out key={link.label} href={link.url}>
                          {link.label.includes("code") ? (
                            <Github size={14} aria-hidden="true" />
                          ) : (
                            <FileText size={14} aria-hidden="true" />
                          )}
                          {link.label}
                        </Out>
                      ))}
                    </div>
                    <details className="paper-detail">
                      <summary>
                        Study details <Plus size={15} aria-hidden="true" />
                      </summary>
                      <p>
                        {
                          [
                            "Compared direct-answer and reasoning prompts across CLUTRR and ProofWriter using five language models. The evaluation measured accuracy at increasing reasoning depths; improvements at shallow depths often weakened or reversed as tasks became more complex.",
                            "Used a three-agent reinforcement learning framework to automate adversarial prompting and evaluate whether language models could be induced to bypass safeguards.",
                            "Examines the separate contributions of reasoning and evidence selection to factual question answering. Accepted-poster status is taken from my resume; no code repository was linked there.",
                          ][i]
                        }
                      </p>
                    </details>
                  </article>
                ))}
              </div>
            </section>

            <section
              hidden={active !== "startups"}
              aria-label="Startups"
              className="section-content"
            >
              <div className="venture-list">
                <article>
                  <span className="small-label">Founder</span>
                  <h2>AI services &amp; products</h2>
                  <p>I’m the founder of an AI business offering products and project-based services, including custom development and AI consulting.</p>
                  <p className="venture-note">More details to come.</p>
                </article>
                <article>
                  <span className="small-label">Cofounder</span>
                  <h2>Agritech product</h2>
                  <p>I’m a cofounder of an agritech product that we plan to develop into a business.</p>
                  <p className="venture-note">Product in development. Business details to come.</p>
                </article>
              </div>
            </section>

            <section
              hidden={active !== "contact"}
              aria-label="Contact"
              className="section-content"
            >
              <div className="contact-card">
                <Mail size={24} aria-hidden="true" />
                <h2>Email</h2>
                <p>
                  For questions about my work, research collaboration, or an AI
                  development project, you can reach me here.
                </p>
                <a href="mailto:azkaikramullah496@gmail.com">
                  azkaikramullah496@gmail.com
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="block-heading">
                <h2>Profiles & work</h2>
              </div>
              <div className="social-grid">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div>
                      <h3>{s.name}</h3>
                      <p>{s.label}</p>
                    </div>
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                ))}
              </div>
              <div className="resume-row">
                <div>
                  <h3>Resume</h3>
                  <p>
                    Experience, education, publications, and projects in one
                    PDF.
                  </p>
                </div>
                <a
                  className="cv-button"
                  href={asset("/Azka_Ikramullah_CV.pdf")}
                  download
                >
                  Download CV
                  <Download size={15} aria-hidden="true" />
                </a>
              </div>
            </section>
          </div>
          <footer>© {new Date().getFullYear()} Azka Ikramullah</footer>
        </main>
      </div>
      <ConsultationChat onNavigate={(section, search) => {setCategory("All");setQuery(search || "");if(search)setOpenProjects(prev=>[...new Set([...prev,search])]);navigate(section);}} />
    </>
  );
}
