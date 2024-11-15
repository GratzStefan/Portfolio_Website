import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  BlogPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Stefan Gratz",
  logo: "/logo.webp",
  email: "stefan.gratz2@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Blog",
    url: "/blog",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/GratzStefan",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:stefan.gratz2@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Stefan Gratz",
    description:
      "Full time student from Austria who loves building cool things using code.",
    image: identity.logo,
  },
  role: "Student & Software Developer",
  description:
    "I'm Stefan Gratz, a full time student from Austria who also loves building cool things using code.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Stefan Gratz",
    description:
      "Full time student from Austria who loves building cool things using code.",
    image: identity.logo,
  },
  subtitle: "Some information about myself",
  about: {
    description: `
Hi there! I’m Stefan Gratz, a full-time student from Austria with a passion for creating innovative and exciting things through coding. Whether it’s building websites, applications, or experimenting with new technologies, I love using my skills to solve problems and bring ideas to life.
<br/><br/>
As a student, I’m constantly learning and growing, both in my academic pursuits and through personal projects. I’m always eager to explore new technologies and frameworks to push my boundaries and improve my craft.
<br/><br/>
When I’m not coding, you can usually find me exploring new ideas, collaborating with others, or diving deep into the latest tech trends.`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  experiences: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the projects I've worked on.`, // Markdown is supported
    items: [
      {
        title: "Software Developer - Internship",
        company: {
          name: "Liebherr-Werk Bischofshofen GmbH",
          image: "/logo.webp",
          url: "https://de.linkedin.com/company/liebherr",
        },
        date: "Summer 2023",
      },
      {
        title: "Software Developer - Internship",
        company: {
          name: "Liebherr-Werk Bischofshofen GmbH",
          image: "/logo.webp",
          url: "https://de.linkedin.com/company/liebherr",
        },
        date: "Summer 2022",
      },
    ],
  },
  education: {
    description: `Throughout my academic journey, I’ve gained a strong foundation in both theory and practice, focusing on technology and computer science. Here’s a look at the key milestones of my education that have shaped my skills and knowledge.`, // Markdown is supported
    items: [
      {
        title: "HTL Saalfelden Zweig Informatik, St. Johann im Pongau",
        date: "2020 - 2025",
      },
      {
        title: "Gymnasium St. Johann im Pongau",
        date: "2016 - 2020",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Stefan Gratz",
    description: "Check out what I've been working on.",
    image: identity.logo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "SuperPlaner",
      description: "The Scheduling Project is designed to simplify appointment and meeting management, offering features like real-time availability, automated reminders, and time zone adjustments to enhance efficiency and reduce scheduling conflicts.",
      image: "/superplaner.png",
      year: "2024",
      url: "https://github.com/GratzStefan/Terminfindungsprojekt",
    },
    {
      title: "MBot",
      description: "The MBot Project involves an autonomous robot that follows a line, delivers data, and can be controlled remotely. It uses sensors for line tracking and wireless communication to transmit data, offering both manual control and autonomous navigation.",
      image: "/mbot.png",
      year: "2023 - 2024",
      url: "https://github.com/Gruppe5HTL",
    },
    {
      title: "Allegiance",
      description: "Allegiance is a 2D pixel adventure game where players explore a vibrant world, solve puzzles, and embark on quests. It features a compelling storyline, engaging combat, and classic pixel art visuals.",
      image: "/allegiance.webp",
      year: "2022 - 2023",
      url: "https://github.com/orgs/Gruppe4Suiii",
    },
  ],
};

// Blog (/blog)
export const blogPageContent: BlogPageContent = {
  seo: {
    title: "Blog | Stefan Gratz",
    description: "Thoughts, stories and ideas.",
    image: identity.logo,
  },
  subtitle: "Thoughts, stories and ideas.",
};
