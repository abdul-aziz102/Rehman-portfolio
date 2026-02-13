import { About, Blog, Contact, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "ABDUL",
  lastName: "REHMAN",
  name: `ABDUL REHMAN`,
  role: "Web Developer",
  avatar: "/free-ima.jpg",
  email: "abdulazizyosufzia@gmail.com",
  location: "Asia/Karachi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: <>My weekly newsletter about web development and technology</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/abdul-aziz102?tab=repositories",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/abdul-aziz-dev-a98340356",
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
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full-Stack Web Developer & CS Student</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Featured Project</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Latest work
        </Text>
      </Row>
    ),
    href: "/work/learnify-website",
  },
  subline: (
    <>
    I&apos;m ABDUL REHMAN, a Computer Science student with hands-on experience in full-stack development. I build responsive web applications using React, Node.js, Express, and MongoDB, and integrate AI agents using the Gemini API to enhance user interaction and automation.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Karachi, Pakistan`,
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
        I&apos;m a Computer Science student with hands-on experience in full-stack development through personal projects and a 3-month internship. I&apos;ve built and deployed responsive web applications using React, Node.js, Express, and MongoDB. I can also integrate AI agents using the Gemini API to enhance user interaction and automation. I&apos;m eager to apply my skills in a professional environment where I can contribute and grow as a developer.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Self-Taught Web Developer",
        timeframe: "Jan 2024 - Present",
        role: "Full-Stack Developer",
        achievements: [
          <>
            Built multiple personal projects using React, Node.js, Express, and MongoDB
          </>,
          <>
            Completed a 3-month internship to gain practical industry experience
          </>,
          <>
            Developed and deployed full-stack apps like Learnify, English Learning Platform, and Pak AI
          </>,
          <>
            Hands-on experience with frontend UI design, backend API integration, and MongoDB schema design
          </>,
          <>
            Delivered responsive, high-performance websites and gained experience collaborating on real-world projects during internship
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Nusrat Bhutto Government College, Karachi",
        description: <>Intermediate in Computer Science (2024 – Present). Currently enrolled in 11th Grade, Board: BISE Karachi.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>Building robust server-side applications with Node.js and Express.js, implementing authentication with JWT and Bcrypt, and creating RESTful APIs with CRUD operations.</>
        ),
        tags: [
          {
            name: "Node.js",
            icon: "nodejs",
          },
          {
            name: "Express.js",
            icon: "express",
          },
        ],
        images: [],
      },
      {
        title: "Frontend Development",
        description: (
          <>Creating responsive and interactive user interfaces using React.js, styled with Tailwind CSS and Bootstrap. Proficient in modern JavaScript (ES6+), HTML, and CSS.</>
        ),
        tags: [
          {
            name: "React",
            icon: "react",
          },
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "HTML",
            icon: "html",
          },
          {
            name: "CSS",
            icon: "css",
          },
        ],
        images: [],
      },
      {
        title: "Database & Tools",
        description: (
          <>Working with MongoDB and Mongoose for database management. Using Git, GitHub, VS Code, Postman for development, and deploying applications on Netlify and Vercel.</>
        ),
        tags: [
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "GitHub",
            icon: "github",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about web development and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack web development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [],
};

const contact: Contact = {
  path: "/contact",
  label: "Contact",
  title: `Contact – ${person.name}`,
  description: `Get in touch with ${person.name}`,
  display: true,
  phone: "0345-2489424",
  location: "Karachi, PK",
  website: "https://ab-aziz-port.vercel.app/",
};

export { person, social, newsletter, home, about, blog, work, gallery, contact };
