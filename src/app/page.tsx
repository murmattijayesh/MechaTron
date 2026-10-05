import Link from "next/link";
import { Meta, Schema } from "@once-ui-system/core";
import { home, about, person, social, baseURL } from "@/resources";
import styles from "@/components/home/Home.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

const stack = [
  "SolidWorks",
  "SolidWorks API",
  "VBA",
  "Python",
  "CAD Automation",
  "Product Development",
  "GD&T",
  "DFM / DFA",
];

const stats = [
  { value: "60–80%", label: "Target cut in repetitive GA drawing effort" },
  { value: "5", label: "Product families supported at Aeron Systems" },
  { value: "3", label: "CAD platforms — SolidWorks, CATIA, Fusion 360" },
  { value: "2024", label: "Building production hardware since" },
];

const manualFlow = ["Requirement", "Engineer", "CAD", "CAD", "CAD", "Drawing", "Review", "Changes", "Drawing"];
const autoFlow = ["Requirement", "Input form", "Automation", "CAD + Drawing", "Review"];

const featured = [
  {
    code: "01",
    slug: "ga-drawing-automation",
    title: "GA Drawing Automation",
    kicker: "SolidWorks · API · VBA · Engineering Workflow",
    summary:
      "Structured requirement data and an automation form drive repetitive General Arrangement drawing work — targeting a 60–80% reduction in repetitive effort.",
    metric: "60–80%",
    metricLabel: "target effort reduction",
  },
  {
    code: "02",
    slug: "mech-ai-suite",
    title: "Mech AI Suite",
    kicker: "SolidWorks Add-in · Drawing Review · Engineering AI",
    summary:
      "An engineering drawing review and design productivity toolkit — moving checks from manual inspection to software-assisted review inside SolidWorks.",
    metric: "Add-in",
    metricLabel: "native to the CAD workflow",
  },
  {
    code: "03",
    slug: "product-development-aeron",
    title: "Product Development",
    kicker: "XTM-930 · XTM-920 · DLG88 · PT1000 · RIGEL2",
    summary:
      "Mechanical design across industrial, IoT and renewable-energy monitoring products — from requirement to 3D CAD, drawings, BOMs and engineering release.",
    metric: "5",
    metricLabel: "product families",
  },
  {
    code: "04",
    slug: "configurable-cad-automation-platform",
    title: "Configurable CAD Platform",
    kicker: "Web → Backend → SolidWorks → Deliverables",
    summary:
      "Next flagship build: a web requirements form that drives SolidWorks automation and returns drawings, PDFs, STEP files and BOMs — without DriveWorks.",
    metric: "Next",
    metricLabel: "planned build",
  },
];

const approach = [
  { step: "01", title: "Identify", text: "Find repetitive or error-prone engineering activities." },
  { step: "02", title: "Structure", text: "Turn requirements and engineering rules into structured inputs." },
  { step: "03", title: "Automate", text: "Use CAD APIs, code and engineering logic to remove repeat work." },
  { step: "04", title: "Validate", text: "Verify the automated output still meets engineering requirements." },
  { step: "05", title: "Improve", text: "Measure the workflow and keep refining the automation." },
];

const products = ["XTM-930", "XTM-920", "DLG88 Series", "PT1000", "RIGEL2-MT-RTD1K"];

const journey = [
  { title: "Mechanical foundation", text: "Diploma (97.35%) and B.E. Mechanical with Honours in 3D Printing." },
  { title: "CAD & product development", text: "Parts, assemblies, drawings and BOMs in SolidWorks, CATIA and Fusion 360." },
  { title: "Design engineering", text: "GD&T, DFM/DFA, DFMEA, prototyping and design reviews on real products." },
  { title: "CAD automation", text: "“Why am I doing the same CAD operation again and again?”" },
  { title: "GA automation", text: "A structured workflow targeting 60–80% less repetitive GA drawing effort." },
  { title: "SolidWorks add-ins", text: "Beyond macros — in-built add-ins for drawing review and workflow assistance." },
  { title: "Mech AI Suite", text: "Exploring how software and AI can assist engineering drawing review." },
  { title: "Next", text: "Design automation → engineering software → AI-assisted engineering.", next: true },
];

const toolbox = [
  { group: "CAD", items: ["SolidWorks", "CATIA", "Fusion 360"] },
  { group: "Automation", items: ["SolidWorks API", "VBA macros", "Custom add-ins", "Workflow automation"] },
  { group: "Programming", items: ["Python", "VBA", "MATLAB"] },
  { group: "Simulation", items: ["Ansys", "FEA", "CFD fundamentals"] },
  { group: "Engineering", items: ["GD&T", "DFM / DFA", "DFMEA", "BOMs & release", "Prototype validation"] },
];

export default function Home() {
  const linkedIn = social.find((item) => item.name === "LinkedIn")?.link;

  return (
    <main className={styles.page}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <span className={styles.chip}>
            <span className={styles.pulse} aria-hidden="true" />
            Mechanical Design × Automation × Engineering Software
          </span>
          <h1 className={styles.title}>
            I build the tools that make <span className={styles.gradient}>mechanical design faster.</span>
          </h1>
          <p className={styles.lead}>
            I&apos;m {person.firstName} — a Mechanical Design &amp; Automation Engineer at{" "}
            <strong>Aeron Systems</strong>, Pune. I design production hardware, then automate the
            repetitive parts of engineering with CAD APIs, code and custom SolidWorks add-ins.
          </p>
          <ul className={styles.tags}>
            {stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Link href="/work" className={styles.primary}>
              View projects <span aria-hidden="true">→</span>
            </Link>
            <Link href="/about" className={styles.secondary}>
              Experience
            </Link>
            <a href={`mailto:${person.email}`} className={styles.secondary}>
              Contact
            </a>
          </div>
        </div>

        <div className={styles.viewport} aria-hidden="true">
          <div className={styles.viewportBar}>
            <span />
            <span />
            <span />
            <em>GA_AUTOMATION.SLDDRW</em>
          </div>
          <div className={styles.viewportBody}>
            <div className={styles.orbit} />
            <div className={`${styles.orbit} ${styles.orbitTwo}`} />
            <svg className={styles.model} viewBox="0 0 200 200" fill="none">
              <g className={styles.spin}>
                <polygon points="100,30 160,62 100,94 40,62" />
                <polygon points="40,62 100,94 100,166 40,134" />
                <polygon points="160,62 100,94 100,166 160,134" />
                <line x1="70" y1="46" x2="130" y2="78" />
                <line x1="70" y1="78" x2="70" y2="150" />
                <line x1="130" y1="78" x2="130" y2="150" />
                <circle cx="100" cy="62" r="10" />
              </g>
            </svg>
            <div className={styles.scan} />
          </div>
          <div className={styles.hud}>
            <span>
              <i>REQ</i> parsed
            </span>
            <span>
              <i>CAD</i> configured
            </span>
            <span>
              <i>DWG</i> generated
            </span>
            <span className={styles.ok}>
              <i>QA</i> review ready
            </span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.stats}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.stat}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      {/* WORKFLOW */}
      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <span className={styles.eyebrow}>{"// The differentiator"}</span>
          <h2>I automate engineering workflows, not just CAD commands.</h2>
          <p>
            Most design work repeats the same sequence by hand. I turn that sequence into a structured,
            repeatable workflow — so engineering judgment goes where it matters.
          </p>
        </header>
        <div className={styles.flows}>
          <div className={styles.flow}>
            <span className={styles.flowLabel}>Manual workflow</span>
            <ol className={styles.nodes}>
              {manualFlow.map((node, index) => (
                <li key={`${node}-${index}`} className={styles.nodeMuted}>
                  {node}
                </li>
              ))}
            </ol>
          </div>
          <div className={`${styles.flow} ${styles.flowAuto}`}>
            <span className={styles.flowLabel}>Automated workflow</span>
            <ol className={styles.nodes}>
              {autoFlow.map((node) => (
                <li key={node} className={styles.node}>
                  {node}
                </li>
              ))}
            </ol>
            <div className={styles.beam} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className={styles.section} id="projects">
        <header className={styles.sectionHead}>
          <span className={styles.eyebrow}>{"// Featured work"}</span>
          <h2>From CAD automation to engineering intelligence.</h2>
        </header>
        <div className={styles.cards}>
          {featured.map((project) => (
            <Link key={project.slug} href={`/work/${project.slug}`} className={styles.card}>
              <span className={styles.cardCode}>{project.code}</span>
              <span className={styles.cardKicker}>{project.kicker}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <span className={styles.cardMetric}>
                <strong>{project.metric}</strong> {project.metricLabel}
              </span>
              <span className={styles.cardLink}>
                Read case study <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
        <Link href="/work" className={styles.more}>
          All projects, including simulation &amp; hardware work →
        </Link>
      </section>

      {/* APPROACH */}
      <section className={styles.section} id="automation">
        <header className={styles.sectionHead}>
          <span className={styles.eyebrow}>{"// Engineering automation"}</span>
          <h2>Automate the repetitive. Standardise the predictable.</h2>
          <p>Good automation doesn&apos;t replace the engineer — it removes the boring parts.</p>
        </header>
        <ol className={styles.approach}>
          {approach.map((item) => (
            <li key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* PRODUCTS */}
      <section className={styles.marqueeWrap} aria-label="Product families">
        <span className={styles.eyebrow}>{"// Product families I've designed for"}</span>
        <div className={styles.marquee}>
          <div className={styles.track}>
            {[...products, ...products].map((item, index) => (
              <span key={`${item}-${index}`} aria-hidden={index >= products.length}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <span className={styles.eyebrow}>{"// Trajectory"}</span>
          <h2>From designing parts to building engineering systems.</h2>
        </header>
        <ol className={styles.timeline}>
          {journey.map((item) => (
            <li key={item.title} className={item.next ? styles.timelineNext : undefined}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* TOOLBOX */}
      <section className={styles.section}>
        <header className={styles.sectionHead}>
          <span className={styles.eyebrow}>{"// Toolbox"}</span>
          <h2>The stack behind the work.</h2>
        </header>
        <div className={styles.toolbox}>
          {toolbox.map((block) => (
            <div key={block.group} className={styles.tool}>
              <h3>{block.group}</h3>
              <ul>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <h2>
          Let&apos;s make engineering <span className={styles.gradient}>faster.</span>
        </h2>
        <p>
          Open to design automation, CAD automation and product development roles — and to
          conversations about engineering tools.
        </p>
        <div className={styles.actions}>
          <a href={`mailto:${person.email}`} className={styles.primary}>
            {person.email}
          </a>
          {linkedIn && (
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
              LinkedIn ↗
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
