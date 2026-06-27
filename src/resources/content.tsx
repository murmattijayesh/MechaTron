import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Jayesh",
  lastName: "Murmatti",
  name: `Jayesh Murmatti`,
  role: "Mechanical Design Engineer",
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
  title: `${person.name} – Mechanical Design Engineer`,
  description: `Portfolio of ${person.name}, a Mechanical Design Engineer specialising in CAD, Ansys FEA and SolidWorks automation.`,
  headline: <>Designs validated by simulation, sped up by automation</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">CubeSat FEA</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/cubesat-structural-fea-analysis",
  },
  subline: (
    <>
      I'm Jayesh, a Mechanical Design Engineer at{" "}
      <Text as="span" size="xl" weight="strong">Aeron Systems</Text>. I bridge CAD design,
      Ansys FEA and <br /> SolidWorks VBA automation to ship hardware that is lighter, stronger and
      faster to release.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, a Mechanical Design Engineer based in Pune, India`,
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
        Jayesh Murmatti is a Pune-based Mechanical Design Engineer who turns requirements into
        validated, manufacturable hardware. He combines hands-on SolidWorks design, Ansys FEA
        (static, modal, thermal and buckling) and SolidWorks VBA automation to make the design
        process faster and more reliable. His project work spans aerospace structures, structural
        and thermal simulation, and applied machine learning for design optimisation — backed by a
        B.E. in Mechanical Engineering (Honours in 3D Printing) and a 97% diploma.
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
        role: "Mechanical Design Engineer",
        achievements: [
          <>
            Built SolidWorks VBA macros that automate production-drawing creation and Bill of
            Materials (BOM) export — replacing repetitive, error-prone manual drafting and data
            entry with a single, repeatable run, and freeing engineering time for actual design
            work.
          </>,
          <>
            Standardised drawing templates, title blocks and BOM formats through the automation,
            improving consistency across releases and reducing rework caused by manual transcription
            mistakes.
          </>,
          <>
            Model parts, assemblies and detailed manufacturing drawings in SolidWorks, applying
            GD&T, sheet-metal and design-for-manufacture principles to keep designs producible and
            review-ready.
          </>,
          <>
            Validate designs with Ansys FEA — static structural, modal, thermal and buckling — to
            confirm structural and thermal margins before release.
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
        title: "CAD & Mechanical Design",
        description: (
          <>
            3D modelling, assemblies, sheet metal and production drafting in SolidWorks, Fusion 360
            and CATIA — with GD&T, BOM generation and design-for-manufacture throughout.
          </>
        ),
        tags: [
          { name: "SolidWorks" },
          { name: "Fusion 360" },
          { name: "CATIA" },
          { name: "GD&T" },
        ],
        images: [
          {
            src: "/images/projects/bench-vice/cover.jpg",
            alt: "Bench vice assembly drawing with BOM",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "FEA & Simulation",
        description: (
          <>
            Ansys-based static structural, modal, thermal and buckling analysis to verify safety
            factors, deformation, natural frequencies and thermal limits before manufacture.
          </>
        ),
        tags: [
          { name: "Ansys" },
          { name: "Static Structural" },
          { name: "Modal" },
          { name: "Thermal" },
          { name: "Buckling" },
        ],
        images: [
          {
            src: "/images/projects/cubesat/deformation.jpg",
            alt: "CubeSat total deformation FEA result",
            width: 8,
            height: 9,
          },
          {
            src: "/images/projects/solenoid-thermal/cover.jpg",
            alt: "Solenoid steady-state thermal analysis",
            width: 8,
            height: 9,
          },
        ],
      },
      {
        title: "SolidWorks Automation (VBA)",
        description: (
          <>
            Custom VBA macros that automate drawing generation, BOM export and repetitive,
            high-volume tasks inside SolidWorks — turning manual, error-prone workflows into fast,
            repeatable, one-click runs.
          </>
        ),
        tags: [
          { name: "VBA" },
          { name: "SolidWorks API" },
          { name: "Automation" },
        ],
        images: [],
      },
      {
        title: "Programming & AI/ML",
        description: (
          <>
            Python and MATLAB for engineering analysis, data visualisation and applied machine
            learning — including supervised learning and genetic-algorithm optimisation for design
            problems.
          </>
        ),
        tags: [
          { name: "Python" },
          { name: "MATLAB" },
          { name: "Machine Learning" },
          { name: "Genetic Algorithms" },
        ],
        images: [
          {
            src: "/images/projects/airfoil-optimization/cover.jpg",
            alt: "NACA airfoil optimisation comparison",
            width: 16,
            height: 9,
          },
        ],
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
  description: `Mechanical design, FEA and AI/ML projects by ${person.name}`,
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
