import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Jarell",
  lastName: "Lewis",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Manager and Consultant",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish(Classroom)"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about product and new technologies that I learn about by sharing thoughts on the intersection of
      creativity and technology.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/jarlewis",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/jarelllewis",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jarell.lewis@gmail.com",
  },
];

const home = {
  display: false,
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my experience as a ${person.role}`,
  headline: <>Product Manager</>,
  subline: (
    <>
     I'm Jarell, a <InlineCode>Product Manager</InlineCode> and I build my own projects. I'm not a developer. 
    </>
  ),
};

const about = {
  label: "Professional ",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/jarell-lewis",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm an Atlanta-based product manager with a passion for transforming user experiences and 
        business processes through the adoption of innovative and new technologies. My work spans digital interfaces, interactive
        experiences, and the convergence of CX and technology. I am excited about working with new and innovative technologies especially AI.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance",
        timeframe: "2024 - Present",
        role: "Business Consultant",
        achievements: [
          <>
            Created marketing strategies for local businesses through the use of AI tools and detailed analytics.
          </>,
          <>
            Spearheaded the integration of AI tools into business workflows, enabling companies to
            optimize their business processes.
          </>,
        ],
        images: []
      },
      {
        company: "Inspire Brands",
        timeframe: "2023 - 2024",
        role: "Digital Product Manager, Customer Care",
        achievements: [
          <>
            Formulated a roadmap for leveraging machine learning models to enable proactive customer support 
            through predictive insights, aimed at reducing customer reliance on live support.
          </>,
          <>
            Designed and categorized a knowledge base system to enhance self-service capabilities and improve 
            customer satisfaction scores by 20%.
          </>,         
          <>
            Utilized wireframing and UI mockups to prioritize consumer needs and customer journeys, aiming in a
            15% improvement in customer support experiences.
          </>
        ],
        images: []
      },
      {
        company: "CallRail Inc",
        timeframe: "2017 - 2023",
        role: "Product Specialist > Product Support Engineer > Product Manager",
        achievements: [
          <>
            Enhanced legacy source code to reduce system faults, ensuring a stable 
            and innovative environment for real-time VOIP communications.
          </>,
          <>
            Developed workflows and training materials, ensuring seamless
            adoption of new operational processes and API product enhancements.
          </>,         
          <>
            Led cross-functional initiatives to incorporate customer feedback into the development 
            lifecycle, improving the efficiency of product feedback integration.
          </>,
          <>
            Built custom API scripts using REST API, streamlining workflows for Partnership Sales and
            Customer Success teams and reducing internal timelines by 30%
          </>
        ],
        images: []
      }
    ]
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Valdosta State University",
        description: <>Bachelor's Degree in Business & Computer Science</>,
      },
      {
        name: "Scrum Alliance",
        description: <>Certified Scrum Product Owner</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Prompt Engineering",
        description: <>Skilled in designing prompts using generative AI technologies to achieve desired outcomes with minimal effort.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
           
          },
        ],
      },
      {
        title: "Development + Coding",
        description: <>Proficient in building next-generation applications with AI assisted coding tools using JavaScript, Ruby on Rails, Next.js, Tailwind CSS, and Supabase. Basic experience with SQL.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            // src: "/images/projects/project-01/cover-04.jpg",
            // alt: "Project image",
            // width: 16,
            // height: 16,
          },
        ],
      },
      {
        title: "Postman + Rest APIs",
        description: <>Experienced in API testing, documentation, and automation using Postman. Proficient in creating API collections, writing test scripts, and troubleshooting APIs.</>,
      },
    {
      title: "Project Management",
      description: <> Expertise in leveraging a comprehensive tech stack for product development and analytics, including JIRA for agile project management and sprint planning, Zendesk for
      customer support insights and feedback collection, Pendo and FullStory for user behavior analysis and feature adoption tracking, Firebase and AWS for application performance monitoring, 
      Datadog for real-time system monitoring, and Looker for data-driven decision-making and KPI tracking.</>,
      // optional: leave the array empty if you don't want to display images
      images: [
        {
        },
      ],
    },
  ],
  },
};

const blog = {
  label: "Blog",
  title: "Blog Posts",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Personal Projects",
  title: "My projects",
  description: `Side projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/Screenshot 2024-12-13 183324.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183310.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/InspireB_Roll.mp4",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183251.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00077_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183242.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Gen-3+Alpha+Turbo+3425129327,+Cropped+-+MarkuryFLU.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00007_.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/ComfyUI_00090_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00008_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00173_.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Gen-3+Alpha+2434284061,+Cropped+-+ComfyUI_00.mp4",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Screenshot 2024-12-13 183258.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/ComfyUI_00021.jpeg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
