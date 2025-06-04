// Website related settings
const settings = {
  isSplash: true,
};

// SEO Related settings
const seo = {
  title: "Md Nasir - Senior Software Quality Analyst",
  description: "Quality Assurance professional with 6.7 years of experience in manual and API testing, skilled in SDLC/STLC processes and database validation. Proven track record of improving checkout success by 20% and reducing defects by 30% through efficient validation practices. Adept at delivering high-quality products using structured testing frameworks and best practices. Demonstrated expertise in functional, regression, and UI testing, achieving 98% data accuracy in logistics and 100% accuracy in gaming domain data management.",
  og: {
    title: "Md Nasir Portfolio",
    type: "website",
    url: "https://urnasir-portfolio.com",
  },
};

// Home Page
const greeting = {
  title: "Md Nasir",
  logo_name: "MdNasir",
  nickname: "QA Expert",
  subTitle: "Quality Assurance professional with 6.7 years of experience in manual and API testing, skilled in SDLC/STLC processes and database validation. Proven track record of improving checkout success by 20% and reducing defects by 30% through efficient validation practices. Adept at delivering high-quality products using structured testing frameworks and best practices. Demonstrated expertise in functional, regression, and UI testing, achieving 98% data accuracy in logistics and 100% accuracy in gaming domain data management.",
  resumeLink: "https://drive.google.com/your-resume-link",
  portfolio_repository: "https://github.com/urnasir22/postman-api-portfolio",
};

// Social Media Links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/urnasir22",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/md-nasir-11440560/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:urnasir22@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/urnasir",
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
];

// Skills Section
const skills = {
  data: [
    {
      title: "Quality Assurance & Testing",
      fileName: "QAImg",
      skills: [
        "⚡ Manual and API testing with 6.7 years of experience",
        "⚡ SDLC/STLC processes expert",
        "⚡ Database validation specialist",
      ],
      softwareSkills: [
        { skillName: "Postman", fontAwesomeClassname: "simple-icons:postman" },
        { skillName: "Selenium", fontAwesomeClassname: "simple-icons:selenium" },
        { skillName: "JIRA", fontAwesomeClassname: "simple-icons:jira" },
        { skillName: "TestRail", fontAwesomeClassname: "simple-icons:testrail" },
      ],
    },
    {
      title: "Database & Tools",
      fileName: "DatabaseImg",
      skills: [
        "⚡ Complex SQL queries",
        "⚡ Performance tuning",
        "⚡ Data validation",
      ],
      softwareSkills: [
        { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql" },
        { skillName: "PostgreSQL", fontAwesomeClassname: "simple-icons:postgresql" },
        { skillName: "MongoDB", fontAwesomeClassname: "simple-icons:mongodb" },
      ],
    },
  ],
};

// Competitive Sites
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/your_username",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#000000",
      },
      profileLink: "https://leetcode.com/your_username/",
    }
  ],
};

// Degrees
const degrees = {
  degrees: [
    {
      title: "Bachelor of Technology",
      subtitle: "Your University",
      logo_path: "university_logo.png",
      alt_name: "University",
      duration: "2010 - 2014",
      descriptions: [
        "Completed B.Tech in Computer Science and Engineering.",
      ],
      website_link: "http://your_university.edu",
    }
  ],
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "ISTQB Certified Tester",
      subtitle: "Foundation Level",
      logo_path: "istqb_logo.png",
      certificate_link: "https://www.istqb.org/",
      alt_name: "ISTQB",
      color_code: "#000000",
    },
    {
      title: "Postman API Certification",
      subtitle: "API Testing",
      logo_path: "postman_logo.png",
      certificate_link: "https://www.postman.com/",
      alt_name: "Postman",
      color_code: "#FF6C37",
    }
  ],
};

// Experience Section
const experience = {
  title: "Experience",
  subtitle: "Work and Projects",
  description: "I have worked with evolving startups as a QA Specialist and Software Tester. I have also worked with established companies as a Senior QA Analyst. I enjoy solving complex testing challenges and delivering high-quality products.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior QA Analyst",
          company: "Tech Solutions Inc.",
          company_url: "https://www.example.com/",
          logo_path: "company_logo.png",
          duration: "Jan 2020 - Present",
          location: "Hyderabad, Telangana",
          description: "Leading QA efforts for enterprise software solutions. Improved testing efficiency by 30% through automation. Reduced production defects by 25% through comprehensive test planning.",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Personal Projects",
      experiences: [
        {
          title: "E-commerce API Testing",
          company: "Personal Project",
          company_url: "#",
          logo_path: "project_logo.png",
          duration: "2023",
          location: "",
          description: "Designed and executed comprehensive API test suites for an online shopping platform. Covered all critical endpoints including payment processing and order management.",
          color: "#9b1578",
        }
      ],
    },
  ],
};

// Projects Header
const projectsHeader = {
  title: "Projects",
  description: "My projects showcase my expertise in API testing, database validation, and quality assurance processes. I focus on delivering robust, reliable solutions that meet business requirements.",
  avatar_image_path: "projects_image.svg",
};

// Publications Header
const publicationsHeader = {
  title: "Publications",
  description: "Articles and research papers on software testing methodologies and best practices.",
  avatar_image_path: "publications_image.svg",
};

// Publications
const publications = {
  data: [
    {
      id: "testing-methodologies",
      name: "Modern API Testing Methodologies",
      createdAt: "2023-07-15T00:00:00Z",
      description: "Exploring advanced techniques for API validation",
      url: "https://example.com/publications/api-testing",
    },
    {
      id: "qa-best-practices",
      name: "Quality Assurance Best Practices",
      createdAt: "2023-03-22T00:00:00Z",
      description: "Implementing effective QA processes in agile teams",
      url: "https://example.com/publications/qa-best-practices",
    }
  ],
};

// Contact Information
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nasir.png",
    description: "Connect with me for QA consulting, API testing projects, or to discuss quality assurance strategies. I'm available for freelance opportunities and full-time positions.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "I document my testing experiences and share insights on software quality assurance.",
    link: "https://your-blog.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Location",
    subtitle: "Hyderabad, Telangana, India",
    locality: "Hyderabad",
    country: "India",
    region: "Telangana",
    postalCode: "500001",
    streetAddress: "Hitech City",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/example",
  },
  phoneSection: {
    title: "Phone",
    subtitle: "+91 9876543210",
  },
};

// API Showcase
const apiShowcase = {
  title: "API Testing Projects",
  apis: [
    {
      name: "Payment Gateway Testing",
      description: "Comprehensive API validation for payment processing system",
      endpoints: ["/process-payment", "/refund", "/status"],
      technologies: ["Postman", "Newman", "JavaScript"],
      results: "Achieved 99.9% test coverage and reduced payment failures by 40%"
    },
    {
      name: "E-commerce API Validation",
      description: "End-to-end API testing for online shopping platform",
      endpoints: ["/products", "/cart", "/checkout", "/orders"],
      technologies: ["RestAssured", "Java", "TestNG"],
      results: "Identified 15 critical defects before production deployment"
    }
  ],
};

// Personal Achievements
const personalAchievements = {
  title: "Personal Adventures",
  achievements: [
    {
      title: "Solo Bike Ride",
      description: "Noida to Darbhanga - 1130 Km",
      year: "2023",
      media: "bike_ride.jpg",
      lessons: "Demonstrated perseverance and meticulous planning skills"
    },
    {
      title: "Skydiving Experience",
      description: "Completed in Dubai",
      year: "2022",
      media: "skydiving.jpg",
      lessons: "Overcame fears and embraced calculated risks"
    }
  ],
};

// Books Collection
const booksCollection = {
  title: "My Bookshelf",
  books: [
    {
      title: "The Art of Software Testing",
      author: "Glenford J. Myers",
      status: "✅ Completed",
      category: "Professional",
      keyTakeaway: "Mastered fundamental testing principles and techniques"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "📖 Reading",
      category: "Programming",
      keyTakeaway: "Learning to write maintainable, efficient code"
    },
    {
      title: "The Mindful Path to Self-Compassion",
      author: "Christopher Germer",
      status: "✅ Completed",
      category: "Meditation",
      keyTakeaway: "Enhanced focus and emotional resilience"
    }
  ],
};

// Meditation Section
const meditationSection = {
  title: "Mindfulness Practice",
  practices: [
    {
      name: "Vipassana Meditation",
      duration: "Daily since 2019",
      description: "Regular practice enhances my focus during complex testing sessions and improves decision-making under pressure"
    },
    {
      name: "Breath Awareness",
      duration: "10 minutes daily",
      description: "Helps maintain calm during critical production issues"
    }
  ],
};

// Export all sections
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  apiShowcase,
  personalAchievements,
  booksCollection,
  meditationSection
};