import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jayesh",
  lastName: "Murmatti",
  name: `Jayesh Murmatti`,
  role: "Mechanical Design & Automation Engineer",
  avatar: "/images/avatar.jpg",
  email: "murmattijayesh@gmail.com",
  location: "Asia/Kolkata", // IANA time zone identifier (Pune, India → IST)
  languages: ["English", "Hindi", "Marathi", "Japanese"],
  locale: "en", // BCP 47 language tag for the HTML lang attribute
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s updates</>,
  description: <>Occasional notes on design, simulation and automation.</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/murmattijayesh",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jayesh-murmatti-450851177/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} – Mechanical Design & Automation Engineer`,
  description: `Portfolio of ${person.name}, a Mechanical Design & Automation Engineer building SolidWorks automation, CAD add-ins and engineering tools that make mechanical design faster.`,
  headline: <>I build the tools that make mechanical design faster</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">GA Drawing Automation</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/ga-drawing-automation",
  },
  subline: (
    <>
      I'm Jayesh, a Mechanical Design & Automation Engineer at Aeron Systems. I design production
      hardware and automate the repetitive parts of engineering.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a Mechanical Design & Automation Engineer based in Pune, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          <strong>I design hardware — and then I engineer the way it gets designed.</strong>
        </p>
        <p>
          I&apos;m a Mechanical Design Engineer at Aeron Systems in Pune, taking products from
          first requirement to engineering release: 3D CAD, assemblies, GA and detail drawings,
          BOMs, GD&amp;T, DFM/DFA and prototype validation across five product families.
        </p>
        <p>
          Along the way I kept asking one question — &ldquo;why are we doing this by hand if the
          computer can do it?&rdquo; The answer became my edge. I build SolidWorks automation that
          drives repetitive GA drawing work from structured inputs, targeting a 60–80% cut in
          repetitive effort, and in-built SolidWorks add-ins that bring drawing review and design
          checks straight into the CAD workflow.
        </p>
        <p>
          Today I work where mechanical engineering meets software: CAD APIs, automation and AI
          applied to real design problems. The goal is simple — engineers spend less time repeating
          tasks and more time doing engineering.
        </p>
        <p>
          B.E. Mechanical Engineering (Honours in 3D Printing) · Diploma in Mechanical Engineering,
          97.35%.
        </p>
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Aeron Systems",
        timeframe: "Sept 2024 – Present",
        role: "Mechanical Design Engineer · Pune, India",
        achievements: [
          <>
            Mechanical design and product development for engineering products used in industrial,
            IoT and renewable-energy monitoring applications — components, assemblies and enclosures
            in SolidWorks.
          </>,
          <>
            Contributed across the XTM-930, XTM-920, DLG88 Series, PT1000 and RIGEL2-MT-RTD1K
            product families — assemblies, drawings, BOMs, documentation, design changes and
            engineering release.
          </>,
          <>
            Developed a SolidWorks automation workflow for repetitive GA drawing activities, driven
            by structured requirement data and an automation form — targeting a 60–80% reduction in
            repetitive drawing effort.
          </>,
          <>
            Built in-built SolidWorks add-ins and engineering utilities for drawing review, design
            checks and workflow assistance, plus VBA macros for drawing creation and BOM export.
          </>,
          <>
            Applied GD&T, DFM/DFA and drawing-quality checks in design reviews; supported prototype
            development and validation, and resolved design and manufacturing issues with
            electronics and manufacturing teams.
          </>,
        ],
        images: [],
      },
      {
        company: "Haimer",
        timeframe: "Nov 2021 – May 2022",
        role: "Trainee Service Engineer",
        achievements: [
          <>
            Supported the service and logistics team by tracking inventory and the flow of machine
            parts and components for tool-changing and tool-presetting machines.
          </>,
          <>
            Ran inventory checks and maintained accurate documentation for parts used across the
            machine fleet, keeping records reliable for service operations.
          </>,
          <>
            Helped prepare for company exhibitions and represented the company's machinery to
            prospective clients.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Modern Education Society's College of Engineering, Pune",
        description: (
          <>
            B.E. in Mechanical Engineering with Honours in 3D Printing. Final-year SGPA 9.00; degree
            CGPA 8.36 (2021–2024).
          </>
        ),
      },
      {
        name: "Cusrow Wadia Institute of Technology, Pune",
        description: (
          <>Diploma in Mechanical Engineering — 97.35% aggregate (2018–2021).</>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "CAD Automation & Engineering Software",
        description: (
          <>
            SolidWorks API and VBA automation, custom in-built SolidWorks add-ins, automation forms
            driven by structured engineering inputs, and Python tooling — automating engineering
            workflows, not just isolated CAD commands.
          </>
        ),
        tags: [
          { name: "SolidWorks API" },
          { name: "VBA" },
          { name: "Python" },
          { name: "Custom add-ins" },
          { name: "Drawing automation" },
          { name: "Workflow automation" },
        ],
        images: [],
      },
      {
        title: "Mechanical Design",
        description: (
          <>
            3D CAD modelling, part and enclosure design, mechanical assemblies, engineering and GA
            drawings, BOMs, design modifications and prototype support for production products.
          </>
        ),
        tags: [
          { name: "SolidWorks" },
          { name: "CATIA" },
          { name: "Fusion 360" },
          { name: "Sheet metal" },
          { name: "Surfacing" },
          { name: "Advanced assemblies" },
        ],
        images: [],
      },
      {
        title: "Engineering Design Practice",
        description: (
          <>
            GD&T, DFM/DFA, DFMEA, design reviews, drawing-quality checks, prototype validation,
            engineering change and product release documentation.
          </>
        ),
        tags: [
          { name: "GD&T" },
          { name: "DFM / DFA" },
          { name: "DFMEA" },
          { name: "Design reviews" },
          { name: "Engineering release" },
        ],
        images: [],
      },
      {
        title: "Simulation & Analysis",
        description: (
          <>
            Ansys static structural, modal, thermal and buckling analysis, with CFD fundamentals —
            and MATLAB for engineering analysis and optimisation.
          </>
        ),
        tags: [
          { name: "Ansys" },
          { name: "FEA" },
          { name: "CFD fundamentals" },
          { name: "MATLAB" },
        ],
        images: [],
      },
      {
        title: "Hardware & IoT",
        description: (
          <>
            Arduino and Raspberry Pi projects — Bluetooth control, sensors, motor drivers, relays and
            home automation.
          </>
        ),
        tags: [
          { name: "Arduino" },
          { name: "Raspberry Pi" },
          { name: "Sensors" },
          { name: "Motor control" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on design, simulation and automation",
  description: `Read what ${person.name} has been working on recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `CAD automation, engineering tools, product development, simulation and hardware projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Project gallery – ${person.name}`,
  description: `A visual collection of FEA, CFD and CAD work by ${person.name}`,
  images: [
    {
      src: "/images/gallery/cubesat-render.jpg",
      alt: "CubeSat structural frame – CAD model",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/truss-stress.jpg",
      alt: "Planar truss direct-stress distribution (Ansys)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/solenoid-result.jpg",
      alt: "Solenoid temperature distribution",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/cubesat-deformation.jpg",
      alt: "CubeSat total deformation under static load",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/airfoil-comparison.jpg",
      alt: "Baseline vs genetic-algorithm-optimised NACA airfoil",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/pneumatic-strain.jpg",
      alt: "Pneumatic cylinder cover – equivalent elastic strain",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/solenoid-thermal.jpg",
      alt: "Solenoid steady-state thermal setup",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/bench-vice.jpg",
      alt: "Bench vice assembly with parts list",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/brain-tumor.jpg",
      alt: "Brain-tumour detection on an MRI scan (MATLAB)",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/cubesat-modal.jpg",
      alt: "CubeSat modal analysis result",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
