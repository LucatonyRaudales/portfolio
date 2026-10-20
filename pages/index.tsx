import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

const linkedin = "https://www.linkedin.com/in/tony-raudales";
const github = "https://github.com/LucatonyRaudales";
const projects = [
  {
    name: "Dira",
    category: "Fintech",
    discipline: "Software · Cloud · Security",
    image: "/dira.png",
    description:
      "A payment platform connecting digital assets and traditional currencies.",
    contribution:
      "Contributed across software engineering, cloud infrastructure, and cybersecurity for a platform supporting cryptocurrency, USD, and COP payments.",
    color: "lavender",
  },
  {
    name: "Interrapidisimo",
    category: "Cloud & DevOps",
    discipline: "DevOps · Database delivery",
    image: "/interrapidisimo.png",
    description:
      "Delivery workflows for the systems behind a logistics business.",
    contribution:
      "Developed and implemented CI/CD pipelines for databases using Azure DevOps, bringing infrastructure and delivery practices into database workflows.",
    color: "peach",
  },
  {
    name: "Chivo Wallet",
    category: "Fintech",
    discipline: "Software · Cloud",
    image: "/chivo.png",
    description:
      "Engineering work on a wallet for dollar and Bitcoin payments.",
    contribution:
      "Contributed in software engineering and DevOps/cloud roles on the electronic wallet project. The project involved payment functionality for dollars and Bitcoin.",
    color: "blue",
  },
  {
    name: "Alquila Tu Cancha",
    category: "Web & Applications",
    discipline: "Application development",
    image: "/alquilatucancha.png",
    description:
      "Making sports court bookings accessible from a mobile application.",
    contribution:
      "Maintained and implemented features in a cross-platform application using Flutter and Firebase, supporting an online booking experience.",
    color: "sage",
  },
  {
    name: "Digito",
    category: "Web & Applications",
    discipline: "Software · Security",
    image: "/digito.jpeg",
    description:
      "Document workflows combining automation and electronic signatures.",
    contribution:
      "Contributed in software engineering and cybersecurity roles to a document management product using automation, electronic signatures, and blockchain technology.",
    color: "blue",
  },
  {
    name: "Hindra Pay",
    category: "Fintech",
    discipline: "Software · Cloud · Security",
    image: "/hindra.png",
    description:
      "An entrepreneurial project exploring digital payments in Honduras.",
    contribution:
      "Worked on a web and mobile payment platform with cryptocurrency and fiat functionality, combining software engineering, cloud, and security responsibilities.",
    color: "lavender",
  },
  {
    name: "Ruru Wallet",
    category: "Fintech",
    discipline: "Cloud · Security",
    image: "/athena.png",
    description:
      "Cloud and security contributions to a digital wallet ecosystem.",
    contribution:
      "Contributed in DevOps/cloud and cybersecurity roles to a wallet designed for digital currency use by individuals and organizations.",
    color: "sage",
  },
  {
    name: "Vai",
    category: "Web & Applications",
    discipline: "Software · Cloud",
    image: "/vai.png",
    description: "Software and cloud engineering for a mobility platform.",
    contribution:
      "Contributed in software engineering and DevOps/cloud roles on a platform focused on transportation and mobility.",
    color: "peach",
  },
  {
    name: "Lotmoney",
    category: "Web & Applications",
    discipline: "Software engineering",
    image: "/lotmoney.png",
    description: "A web platform for ticket-based prize draws.",
    contribution:
      "Contributed as a software engineer to a platform connecting draw creators and participants through ticket-based workflows.",
    color: "lavender",
  },
];
const filters = ["All work", "Fintech", "Cloud & DevOps", "Web & Applications"];
const services = [
  {
    n: "01",
    icon: "↗",
    title: "Cloud & DevOps",
    text: "Infrastructure that supports your next step. From cloud configuration to repeatable deployments.",
    items: [
      "AWS & Kubernetes",
      "Infrastructure as code",
      "CI/CD & deployment workflows",
    ],
  },
  {
    n: "02",
    icon: "⌘",
    title: "Websites & applications",
    text: "A new website, a better customer journey, or ongoing care for the application you already have.",
    items: [
      "Next.js & full-stack development",
      "Website maintenance & integrations",
      "PostgreSQL & MySQL",
    ],
  },
  {
    n: "03",
    icon: "◈",
    title: "Security & technical guidance",
    text: "Understand your technical risks and turn a complex challenge into practical next steps.",
    items: [
      "Configuration & architecture reviews",
      "Security-focused improvements",
      "Technical consulting",
    ],
  },
];

export default function Home() {
  const [filter, setFilter] = useState("All work");
  const [expanded, setExpanded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleProjects = projects.filter(
    (p) => filter === "All work" || p.category === filter,
  );
  const shownProjects =
    expanded || filter !== "All work"
      ? visibleProjects
      : visibleProjects.slice(0, 4);
  return (
    <>
      <Head>
        <title>Tony R. Raudales — Cloud, DevOps & Web Consultant</title>
        <meta
          name="description"
          content="Independent cloud, DevOps and web development consultant. Tony R. Raudales helps businesses build and maintain infrastructure and applications, drawing on fintech and cybersecurity experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f6f5f0" />
        <meta
          property="og:title"
          content="Tony R. Raudales — Technology, thoughtfully built."
        />
        <meta
          property="og:description"
          content="Cloud infrastructure, modern websites, and practical security guidance. Remote consulting from Honduras for U.S. businesses."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Tony R. Raudales home">
          <span className="monogram">
            tr<span>.</span>
          </span>
          <span>
            Tony R. Raudales
            <span className="wordmark-sub">Independent consultant</span>
          </span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "Close menu −" : "Menu +"}
        </button>
        <nav
          id="primary-nav"
          className={menuOpen ? "primary-nav is-open" : "primary-nav"}
          aria-label="Main navigation"
        >
          {[
            ["Services", "#services"],
            ["Selected work", "#work"],
            ["About", "#about"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-contact"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>
      <main id="main">
        <section
          className="hero section-wrap"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> CLOUD / CODE / SECURITY
            </p>
            <h1 id="hero-title">
              Technology,
              <br />
              thoughtfully
              <br />
              <span className="serif">built.</span>
              <span className="hero-asterisk" aria-hidden="true">
                ✳
              </span>
            </h1>
            <p className="hero-description">
              I’m Tony. I help businesses build, improve, and maintain the
              technology they depend on.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#contact">
                Discuss your project <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#work">
                Explore my work <span aria-hidden="true">↓</span>
              </a>
            </div>
            <p className="location">
              Based in Honduras <span aria-hidden="true">·</span> Working
              remotely with U.S. businesses
            </p>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <div className="portrait-topline">
                <span>THE PERSON BEHIND THE WORK</span>
                <span aria-hidden="true">↗</span>
              </div>
              <div className="portrait-image">
                <Image
                  src="/me.jpeg"
                  alt="Tony R. Raudales"
                  fill
                  priority
                  sizes="(max-width: 760px) 90vw, 42vw"
                />
              </div>
              <div className="portrait-caption">
                <div>
                  <strong>Tony R. Raudales</strong>
                  <span>Engineer. Builder. Your technical partner.</span>
                </div>
                <span className="caption-cross" aria-hidden="true">
                  +
                </span>
              </div>
            </div>
            <div className="focus-note">
              <span className="note-icon" aria-hidden="true">
                ⌘
              </span>
              <div>
                <span className="micro-label">CONNECTED EXPERTISE</span>
                <p>
                  From the application
                  <br />
                  to the infrastructure.
                </p>
              </div>
              <span aria-hidden="true">↗</span>
            </div>
          </div>
        </section>
        <div className="expertise-strip section-wrap">
          <span className="micro-label">HANDS-ON WITH</span>
          <div>
            <span>AWS</span>
            <span>Kubernetes</span>
            <span>Terragrunt</span>
            <span>Next.js</span>
            <span>PostgreSQL</span>
            <span>MySQL</span>
          </div>
        </div>
        <section
          className="services section-wrap section-space"
          id="services"
          aria-labelledby="services-title"
        >
          <div className="section-heading">
            <p className="eyebrow">01 / HOW I CAN HELP</p>
            <div>
              <h2 id="services-title">
                A technical partner.
                <br />
                <span className="serif">A clearer way forward.</span>
              </h2>
              <p>
                Focused projects or ongoing support. We start with your business
                needs and agree on a scope that makes sense.
              </p>
            </div>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.n}>
                <div className="service-top">
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <span className="micro-label">/{service.n}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="service-footnote">
            <span aria-hidden="true">+</span>
            <p>
              Need help connecting your website and marketing? I also support
              landing pages, campaign setup, and technical integrations.
            </p>
            <a href="#contact" className="text-link">
              Let’s discuss it <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
        <section
          className="work-section section-space"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-wrap">
            <div className="section-heading">
              <p className="eyebrow">02 / SELECTED WORK</p>
              <div>
                <h2 id="work-title">
                  Real products.
                  <br />
                  <span className="serif">Hands-on contributions.</span>
                </h2>
                <p>
                  A selection of projects across payments, logistics, and
                  customer-facing applications.
                </p>
              </div>
            </div>
            <div className="work-toolbar">
              <div className="filters" aria-label="Filter projects">
                {filters.map((item) => (
                  <button
                    key={item}
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <span className="project-count" role="status">
                {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
              </span>
            </div>
            <div className="project-grid">
              {shownProjects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className={`project-visual ${project.color}`}>
                    <span className="project-number">
                      0{projects.indexOf(project) + 1}
                    </span>
                    <Image
                      src={project.image}
                      alt={`${project.name} project preview`}
                      width={640}
                      height={360}
                      sizes="(max-width: 760px) 90vw, 45vw"
                    />
                    <span className="project-category">{project.category}</span>
                  </div>
                  <div className="project-info">
                    <p className="micro-label">{project.discipline}</p>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <details>
                      <summary>
                        My contribution <span aria-hidden="true">+</span>
                      </summary>
                      <div className="contribution">{project.contribution}</div>
                    </details>
                  </div>
                </article>
              ))}
            </div>
            {filter === "All work" && (
              <button
                className="button button-outline all-work"
                onClick={() => setExpanded(!expanded)}
                aria-expanded={expanded}
              >
                {expanded
                  ? "Show fewer projects"
                  : `View all ${projects.length} projects`}{" "}
                <span aria-hidden="true">{expanded ? "−" : "+"}</span>
              </button>
            )}
            <p className="work-note">
              Project names identify products I contributed to; they do not
              imply an endorsement or a direct client relationship.
            </p>
          </div>
        </section>
        <section
          className="about-section section-wrap section-space"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="section-heading">
            <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
            <div>
              <h2 id="about-title">
                An engineer’s mindset.
                <br />
                <span className="serif">A business perspective.</span>
              </h2>
            </div>
          </div>
          <div className="about-grid">
            <div className="about-story">
              <p className="large-copy">
                Good technology starts with understanding what it needs to do
                for the people using it.
              </p>
              <p>
                My experience spans fintech, backend engineering, cloud
                infrastructure, and cybersecurity. I connect those disciplines
                to help businesses move from a technical problem to a practical
                next step.
              </p>
              <p>
                I’ve also built products as a founder. That experience shapes
                how I approach consulting: understand the priority, explain the
                tradeoffs, and define what we’ll deliver.
              </p>
              <div className="about-links">
                <a
                  className="text-link"
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <a
                  className="text-link"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <a
                  className="text-link"
                  href="https://dev.to/lucatonyraudales"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Writing ↗
                </a>
              </div>
            </div>
            <div className="experience-list">
              <p className="micro-label">SELECTED EXPERIENCE</p>
              {[
                {
                  role: "Independent consulting & product development",
                  company: "Hindra",
                  detail:
                    "Software, cloud infrastructure, and technical guidance.",
                },
                {
                  role: "Backend Lead",
                  company: "Teravision Technologies",
                  detail:
                    "Backend architecture, team leadership, and database modernization.",
                },
                {
                  role: "DevOps Engineer",
                  company: "Scrummers",
                  detail:
                    "Infrastructure across AWS and GCP with Terraform, Docker, and Kubernetes.",
                },
              ].map((item) => (
                <div className="experience-item" key={item.company}>
                  <div>
                    <h3>{item.role}</h3>
                    <span>{item.company}</span>
                  </div>
                  <p>{item.detail}</p>
                </div>
              ))}
              <p className="education-note">
                Computer science background · Ongoing learning in cloud and
                security
              </p>
            </div>
          </div>
        </section>
        <section
          className="process-section section-wrap section-space"
          aria-labelledby="process-title"
        >
          <div className="process-intro">
            <p className="eyebrow">04 / WORKING TOGETHER</p>
            <h2 id="process-title">
              Clear scope.
              <br />
              <span className="serif">Practical next steps.</span>
            </h2>
          </div>
          <ol className="process-list">
            <li>
              <span>01</span>
              <div>
                <h3>Understand the challenge</h3>
                <p>
                  We discuss your goals, current setup, and what is getting in
                  the way.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Agree on a plan</h3>
                <p>
                  A written proposal defines deliverables, responsibilities,
                  timing, and cost.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Build, review, improve</h3>
                <p>
                  We work through the agreed scope, review the result, and
                  identify what comes next.
                </p>
              </div>
            </li>
          </ol>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="section-wrap contact-inner">
            <div>
              <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
              <h2 id="contact-title">
                Let’s make
                <br />
                <span className="serif">your next move.</span>
              </h2>
              <p>
                Tell me about your business, what you want to improve,
                <br className="desktop-break" /> and where you could use a
                technical partner.
              </p>
              <a
                className="button button-orange"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                Start a conversation on LinkedIn{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <span className="contact-mark" aria-hidden="true">
              ✳
            </span>
          </div>
        </section>
      </main>
      <footer className="site-footer section-wrap">
        <a className="footer-brand" href="#home">
          Tony R. Raudales<span>Cloud · Code · Security</span>
        </a>
        <p>© {new Date().getFullYear()} Tony R. Raudales</p>
        <a href="#home" className="text-link">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
