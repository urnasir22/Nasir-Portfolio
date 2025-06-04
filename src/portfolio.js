// 1. WEBSITE SETTINGS (No changes needed here)
const settings = {
  isSplash: true, // This controls if your photo shows on the homepage
};

// 2. SEO SETTINGS (Update with your info)
const seo = {
  title: "Md Nasir - Senior Software Quality Analyst",
  description: "Quality Assurance professional with 6.7 years of experience...", // Keep your full description
  og: {
    title: "Md Nasir Portfolio",
    type: "website",
    url: "https://urnasir-portfolio.com", // Your domain when you have it
  },
};

// 3. HOME PAGE (Update with your info)
const greeting = {
  title: "Md Nasir",
  logo_name: "MdNasir",
  nickname: "QA Expert", // Changed from "API Guru"
  subTitle: "Quality Assurance professional with 6.7 years of experience...", // Keep your full description
  resumeLink: "https://drive.google.com/your-resume-link", // Your resume link
  portfolio_repository: "https://github.com/urnasir22/postman-api-portfolio",
};

// 4. SOCIAL MEDIA (Update with your links)
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/urnasir22",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/md-nasir-11440560/", // Fixed the link
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
    link: "https://twitter.com/urnasir", // Update if different
    fontAwesomeIcon: "fa-twitter",
    backgroundColor: "#1DA1F2",
  },
];

// 5. SKILLS SECTION (Updated for QA focus)
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

// 6. EXPERIENCE SECTION (Temporary - you'll update later)
const experience = {
  title: "Experience",
  subtitle: "Work and Projects",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior QA Analyst",
          company: "Your Company",
          duration: "YYYY - Present", // Update dates later
          location: "Hyderabad, Telangana",
          description: "I'll update this section with my experience details soon.",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Projects",
      experiences: [
        {
          title: "API Testing Project",
          company: "Personal Project",
          duration: "2023",
          location: "",
          description: "I'll add my project details here soon.",
          color: "#9b1578",
        }
      ],
    },
  ],
};

// 7. CONTACT SECTION (Update with your info)
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "nasir.png", // Your photo filename
    description: "Connect with me for QA consulting and testing projects.",
  },
  addressSection: {
    title: "Location",
    subtitle: "Hyderabad, Telangana",
  },
};

// 8. API SHOWCASE (Add your API projects here)
const apiShowcase = {
  title: "API Testing Projects",
  apis: [
    {
      name: "Payment Gateway Testing",
      description: "Comprehensive API validation for payment processing",
      endpoints: ["/process-payment", "/refund", "/status"],
      technologies: ["Postman", "Newman", "JavaScript"],
    },
    {
      name: "E-commerce API Validation",
      description: "End-to-end API testing for online shopping platform",
      endpoints: ["/products", "/cart", "/checkout"],
      technologies: ["RestAssured", "Java", "TestNG"],
    }
  ],
};

// 9. PERSONAL ACHIEVEMENTS (Add your adventures here)
const personalAchievements = {
  title: "Personal Adventures",
  achievements: [
    {
      title: "Solo Bike Ride",
      description: "Noida to Darbhanga - 1130 Km",
      year: "2023",
      media: "bike_ride.jpg" // Your photo filename
    },
    {
      title: "Skydiving Experience",
      description: "Completed in Dubai",
      year: "2022",
      media: "skydiving.jpg" // Your photo filename
    }
  ],
};

// 10. BOOKS COLLECTION (Add your books here)
const booksCollection = {
  title: "My Bookshelf",
  books: [
    {
      title: "The Art of Software Testing",
      author: "Glenford J. Myers",
      status: "✅ Completed",
      category: "Professional"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      status: "📖 Reading",
      category: "Programming"
    },
    {
      title: "The Mindful Path to Self-Compassion",
      author: "Christopher Germer",
      status: "✅ Completed",
      category: "Meditation"
    }
  ],
};

// 11. MEDITATION SECTION (Add your meditation info)
const meditationSection = {
  title: "Mindfulness Practice",
  practices: [
    {
      name: "Vipassana Meditation",
      duration: "Daily since 2019",
      description: "Enhances focus and clarity in testing processes"
    }
  ],
};

// 12. EXPORT ALL SECTIONS
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  experience,
  contactPageData,
  apiShowcase,
  personalAchievements,
  booksCollection,
  meditationSection
};