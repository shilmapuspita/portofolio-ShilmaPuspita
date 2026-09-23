export const techStack = [
  { name: "PHP", type: "php", tone: "blue" },
  { name: "Python", type: "python", tone: "blue" },
  { name: "JavaScript", type: "js", tone: "yellow" },
  { name: "Laravel", type: "laravel", tone: "red" },
  { name: "CodeIgniter 4", type: "codeigniter", tone: "coral" },
  { name: "Flask", type: "flask", tone: "green" },
  { name: "Bootstrap", type: "bootstrap", tone: "purple" },
  { name: "MySQL", type: "mysql", tone: "blue" },
  { name: "MongoDB", type: "mongo", tone: "green" },
  { name: "Git", type: "git", tone: "orange" },
  { name: "GitHub", type: "github", tone: "orange" },
  { name: "Black Box Testing", type: "black-box", tone: "cyan" },
  { name: "UAT", type: "uat", tone: "cyan" },
  { name: "Figma", type: "figma", tone: "pink" },
  { name: "Excel", type: "excel", tone: "green" },
  { name: "Word", type: "word", tone: "blue" },
];

export const projects = [
  {
    slug: "simsdm",
    title: "HR Management Information System (SIMSDM)",
    category: "Web Application",
    description:
      "Developed a web-based HR management system using Laravel to support administrative digitalization. Implemented core features including authentication, employee management, attendance tracking, leave requests, and role control. Designed a responsive interface with Bootstrap and validated application reliability through Black Box Testing and User Acceptance Testing (UAT).",
    tags: ["Laravel", "Bootstrap", "MySQL", "Git", "GitHub"],
    accent: "orange",
    number: "01",
    image: "/images/projects/simsdm.png",
    githubUrl: "https://github.com/shilmapuspita/SIMSDM-YayasanIndonesiaKhatam",

    gallery: [
      {
        src: "/images/projects/simsdm.png",
        alt: "Dashboard Admin SIMSDM",
        caption: "Dashboard Overview & Quick Stats",
      },
      {
        src: "/images/projects/absensi_simsdm.png",
        alt: "Halaman Absensi SIMSDM",
        caption: "Employee Attendance Management Page",
      },
      {
        src: "/images/projects/erd_simsdm.png",
        alt: "Entity Relationship Diagram SIMSDM",
        caption: "Database ERD Architecture",
      },
      {
        src: "/images/projects/usecase_simsdm.png",
        alt: "UML Use Case Diagram SIMSDM",
        caption: "System Use Case Diagram",
      },
    ],
  },
  {
    slug: "sistem-informasi-pkl",
    title: "Sistem Informasi PKL (Internship Information System)",
    category: "Information System",
    description:
      "Built a web-based internship administration system using CodeIgniter 4 to manage intern data at PT Industri Telekomunikasi Indonesia. Implemented data filtering, import/export tools, and modular sections covering student records, employee data, and division management, supported by structured MySQL database handling and Git version control.",
    tags: ["CodeIgniter 4", "MySQL", "Git", "GitHub"],
    accent: "cyan",
    number: "02",
    image: "/images/projects/sistempkl.png",

    githubUrl: "https://github.com/shilmapuspita/sistempkl",

    gallery: [
      {
        src: "/images/projects/sistempkl2.png",
        alt: "Halaman Login Sistem PKL",
        caption: "Authentication / Halaman Login",
      },
      {
        src: "/images/projects/sistempkl1.png",
        alt: "Halaman Awal Sistem PKL",
        caption: "Landing Page / Tampilan Awal",
      },
      {
        src: "/images/projects/sistempkl4.png",
        alt: "Informasi PT INTI Sistem PKL",
        caption: "Company Profile & Information PT INTI",
      },
      {
        src: "/images/projects/sistempkl5.png",
        alt: "Footer Sistem PKL",
        caption: "Website Footer & Navigation Section",
      },
    ],
  },
  {
    slug: "coffee-order",
    title: "BeanToDrinks Coffee Ordering Website",
    category: "E-Commerce Concept",
    description:
      "Developed a web-based beverage ordering platform using Python Flask, JavaScript, and Bootstrap. Designed a flexible MongoDB database structure for product, transaction, and user management, handled deployment workflows, and collaborated using Git and GitHub for structured team development.",
    tags: [
      "Python Flask",
      "JavaScript",
      "Bootstrap",
      "MongoDB",
      "Git",
      "GitHub",
    ],
    accent: "lime",
    number: "03",
    image: "/images/projects/beantodrinks.png",
    githubUrl: "https://github.com/shilmapuspita/Coffee-order",

    gallery: [
      {
        src: "/images/projects/beantodrinks.png",
        alt: "Tampilan Awal BeanToDrinks",
        caption: "Landing Page / Tampilan Awal",
      },
      {
        src: "/images/projects/beantodrinks3.png",
        alt: "Halaman Menu BeanToDrinks",
        caption: "Product Menu Catalog (Card Layout)",
      },
      {
        src: "/images/projects/beantodrinks4.png",
        alt: "Halaman Checkout BeanToDrinks",
        caption: "Checkout Page with Product Detail & Action Buttons",
      },
      {
        src: "/images/projects/beantodrinks5.png",
        alt: "Filosofi Logo BeanToDrinks",
        caption: "Logo Philosophy & Branding Meaning",
      },
    ],
  },
];

export const certificates = [
  {
    title: "Teaching Assistant — Data Structures & Algorithms",
    issuer: "STT Terpadu Nurul Fikri",
    year: "2025",
    code: "CRT / 01",
    image: "/images/certificates/asdos.jpg",
  },
  {
    title: "UI/UX Design And Development",
    issuer: "LearningX",
    year: "2024",
    code: "CRT / 02",
    image: "/images/certificates/uiux.jpg",
  },
  {
    title: "Full Stack Development (Very Good)",
    issuer: "Certification Program",
    year: "2024",
    code: "CRT / 03",
    image: "/images/certificates/fullstack.jpg",
  },
  {
    title:
      "SAP Analytics Cloud & SAP Build Apps (ASEAN Data Science Explorers)",
    issuer: "ASEAN Data Science Explorers",
    year: "2024",
    code: "CRT / 04",
    image: "/images/certificates/adse.jpg",
  },
  {
    title: "Cloud Practitioner Essentials (AWS Cloud)",
    issuer: "Dicoding",
    year: "2024",
    code: "CRT / 05",
    image: "/images/certificates/dicoding.jpg",
  },
  {
    title:
      "Olimpiade Bahasa dan Sains Se-Indonesia (OBSI) — Indonesian Language",
    issuer: "OBSI Competition",
    year: "2025",
    code: "CRT / 06",
    image: "/images/certificates/obsi.jpg",
  },
  {
    title: "Database Foundation",
    issuer: "Oracle",
    year: "2022",
    code: "CRT / 07",
    image: "/images/certificates/oracle.jpg",
  },
  {
    title: "Olimpiade Sains Pelajar Nasional (OSPAN) — English",
    issuer: "OSPAN National Competition",
    year: "2026",
    code: "CRT / 08",
    image: "/images/certificates/ospan.jpg",
  },
  {
    title: "Public Relations Staff — Senada Organization",
    issuer: "Senada Community",
    year: "2025",
    code: "CRT / 09",
    image: "/images/certificates/senada2.jpg",
  },
  {
    title: "Full Stack Web Development (MBKM Course Batch 7)",
    issuer: "MBKM",
    year: "2024",
    code: "CRT / 10",
    image: "/images/certificates/msib.jpg",
  },
  {
    title: "3D Game Animation",
    issuer: "LearningX",
    year: "2024",
    code: "CRT / 11",
    image: "/images/certificates/game.jpg",
  },
  {
    title: "Graphics Design",
    issuer: "Design Certification",
    year: "2023",
    code: "CRT / 12",
    image: "/images/certificates/design.jpg",
  },
  {
    title: "Event Staff — Islamic Youth Festival III",
    issuer: "Committee",
    year: "2024",
    code: "CRT / 13",
    image: "/images/certificates/iyf.jpg",
  },
  {
    title: "Staff Controller — Senada Organization",
    issuer: "Senada Community",
    year: "2024",
    code: "CRT / 14",
    image: "/images/certificates/senada.jpg",
  },
  {
    title: "Consumption Division — Senada Islamic Camp",
    issuer: "Senada Community",
    year: "2024",
    code: "CRT / 15",
    image: "/images/certificates/sic.jpg",
  },
];

export const experiences = [
  {
    date: "2025",
    role: "Frontend Developer Intern",
    place: "PT Kosan Kampus Propertindo",
    detail:
      "Built responsive web interfaces and optimized user journeys for boarding-house platforms, ensuring seamless navigation and clean interaction flows.",
    type: "internship",
    image: "/images/experience/kosan.jpeg",
    imagePosition: "center center",
  },
  {
    date: "2025",
    role: "IT & Product Development Intern",
    place: "PT Industri Telekomunikasi Indonesia (PT INTI)",
    detail:
      "Contributed to the development and maintenance of internal IT systems, ensuring clean user interfaces and functional digital workflows.",
    type: "internship",
    image: "/images/experience/maganginti.jpeg",
    imagePosition: "center center",
  },
  {
    date: "2026",
    role: "Teaching Assistant — Data Structures & Algorithms",
    place: "STT Terpadu Nurul Fikri",
    detail:
      "Supported lab sessions for Data Structures and Algorithms, mentored students through coding assignments, and handled comprehensive grading and assessment recaps.",
    type: "experience",
    image: "/images/experience/asdos.jpeg",
    imagePosition: "center center",
  },
  {
    date: "2024 — 2025",
    role: "Public Relations Staff",
    place: "LDK SENADA",
    detail:
      "Managed internal and external communication channels, fostering strong community engagement and collaboration across student activity groups.",
    type: "organization",
    image: "/images/experience/senada2.jpeg",
    imagePosition: "center center",
  },
  {
    date: "2024",
    role: "Event Staff — Islamic Youth Festival (IYF)",
    place: "LDK SENADA",
    detail:
      "Managed event operations for the Islamic Youth Festival (IYF), coordinating competitions such as MHQ, THQ, and calligraphy contests to ensure a seamless participant experience.",
    type: "committee",
    image: "/images/experience/iyf.jpeg",
    imagePosition: "center center",
  },
  {
    date: "2023",
    role: "Master of Ceremony — Grow Up With Senada (GWS)",
    place: "LDK SENADA",
    detail:
      "Served as Master of Ceremonies for the Senada member orientation and leadership event, keeping the audience engaged and maintaining a positive event rhythm.",
    type: "event",
    image: "/images/experience/mc.jpeg",
    imagePosition: "34% center",
  },
  {
    date: "2023 — 2024",
    role: "Treasurer",
    place: "LDK SENADA",
    detail:
      "Managed financial records, budgeting, and funding allocations for organizational activities, ensuring transparency and accountability in financial management.",
    type: "organization",
    image: "/images/experience/asdos.jpeg",
    imagePosition: "center center",
  },
  {
    date: "2024",
    role: "Master of Ceremony — Technical Meeting IYF 3",
    place: "LDK SENADA",
    detail:
      "Served as Master of Ceremonies for the IYF 3 Technical Meeting, managing the event flow and briefing participants with an engaging, well-paced approach.",
    type: "event",
    image: "/images/experience/mc2.png",
    imagePosition: "center center",
  },
];
