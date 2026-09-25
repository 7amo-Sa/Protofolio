// ===================================================
// EDIT YOUR PORTFOLIO DATA HERE
// ===================================================
// All text, projects, services, skills, experience,
// testimonials, and social links are managed directly
// from this file without editing the HTML structure.
// ===================================================

const portfolioData = {
    // ===============================================
    // PERSONAL INFORMATION
    // ===============================================
    personalInfo: {
        name: "Mohamed Sayed",
        firstName: "Mohamed",
        lastName: "Sayed",
        role: "Flutter Developer",
        year: 2026,
        heroGreeting: "Hello, I'm",
        heroDescription: "Passionate Flutter Developer focused on building modern, responsive, and high-performance mobile applications with clean UI and scalable solutions. Started my software development journey in 2026, building real-world projects and learning modern architectures with Dart & Flutter.",
        profileImage: "assets/images/profile.jpg",
        aboutImage: "assets/images/about.jpg",
        email: "mohamed.sayedd.dev@gmail.com",
        whatsapp: "https://wa.me/201061675235",
        whatsappDisplay: "+20 106 167 5235",
        location: "Egypt / Available Worldwide (Remote)",
        availability: "Available for Junior & Freelance Roles",
        slogan: "Building digital experiences that make a difference."
    },

    // ===============================================
    // ANIMATED TYPING TEXTS (HERO)
    // ===============================================
    typingTexts: [
        "Flutter Developer",
        "Mobile App Developer",
        "Dart Enthusiast",
        "Problem Solver"
    ],

    // ===============================================
    // SOCIAL LINKS
    // Clickable links opening in a new tab
    // ===============================================
    socialLinks: {
        github: "https://github.com/7amo-Sa",
        linkedin: "https://www.linkedin.com/in/mohamed-sayed--dev/",
        whatsapp: "https://wa.me/201061675235",
        email: "mailto:mohamed.sayedd.dev@gmail.com"
    },

    // ===============================================
    // ABOUT ME
    // ===============================================
    about: {
        paragraphs: [
            "I’m an enthusiastic Flutter Developer who embarked on my software development journey in 2026.",
            "I focus on creating clean interfaces, responsive layouts, and maintainable application architecture using Dart and Flutter.",
            "I’m constantly building real-world demo apps, solving coding challenges, and mastering modern mobile architectures to deliver top-quality mobile experiences."
        ],
        stats: [
            {
                number: "2026",
                label: "Started Journey",
                icon: "fa-solid fa-calendar-check"
            },
            {
                number: "5+",
                label: "Demo Projects",
                icon: "fa-solid fa-layer-group"
            },
            {
                number: "100%",
                label: "Dedication & Passion",
                icon: "fa-solid fa-fire"
            },
            {
                number: "Flutter",
                label: "Core Focus",
                icon: "fa-solid fa-code"
            }
        ]
    },

    // ===============================================
    // EXPERIENCE (TIMELINE)
    // Clear, realistic 2026 journey from training to building apps
    // ===============================================
    experience: [
        {
            position: "Junior Flutter Developer (Projects & Practice)",
            company: "Self-Driven & Practice",
            date: "2026 — Present",
            description: "Building responsive cross-platform mobile applications in Flutter & Dart. Integrating RESTful APIs, implementing clean UI designs, and testing state management solutions.",
            technologies: ["Flutter", "Dart", "BLoC", "REST APIs", "Git"]
        },
        {
            position: "Mobile App Development Trainee",
            company: "Flutter Intensive Training",
            date: "2026",
            description: "Comprehensive training in Flutter SDK, widget hierarchies, asynchronous Dart programming, custom UI components, and animations.",
            technologies: ["Flutter", "Dart OOP", "Clean Code", "Animations"]
        },
        {
            position: "Mobile UI/UX Implementation (Practice)",
            company: "Design to Code Lab",
            date: "2026",
            description: "Converting high-fidelity Figma and mobile prototypes into pixel-perfect Flutter screens with smooth 60fps micro-interactions.",
            technologies: ["Figma", "Flutter", "Responsive UI", "Material 3"]
        },
        {
            position: "State Management & Architecture Exploration",
            company: "Project Based",
            date: "2026",
            description: "Practicing industry-standard architectural patterns including BLoC, Cubit, and Provider with clean repository structure.",
            technologies: ["BLoC", "Cubit", "Provider", "Clean Architecture"]
        },
        {
            position: "API & Backend Integration Projects",
            company: "Demo Projects Lab",
            date: "2026",
            description: "Integrating Firebase Authentication, Cloud Firestore, and external REST APIs using Dio and JSON serialization.",
            technologies: ["Firebase", "Dio", "JSON Parsing", "REST API"]
        },
        {
            position: "Foundations & Problem Solving",
            company: "Computer Science & Dart",
            date: "2026",
            description: "Studying OOP design principles, algorithms, data structures, and Git version control workflows for mobile development.",
            technologies: ["Dart", "Data Structures", "OOP", "GitHub"]
        }
    ],

    // ===============================================
    // SKILLS (PROGRESS BARS & CATEGORIES)
    // ===============================================
    skills: [
        {
            category: "Programming & Concepts",
            icon: "fa-solid fa-terminal",
            items: [
                { name: "Dart", percentage: 90 },
                { name: "Flutter", percentage: 92 },
                { name: "OOP", percentage: 85 },
                { name: "Clean Architecture", percentage: 80 },
                { name: "Data Structures & Algorithms", percentage: 75 }
            ]
        },
        {
            category: "Flutter Development",
            icon: "fa-solid fa-mobile-screen-button",
            items: [
                { name: "Responsive Layouts", percentage: 95 },
                { name: "Custom Widgets & Canvas", percentage: 88 },
                { name: "Flutter Animations", percentage: 85 },
                { name: "Platform Method Channels", percentage: 75 },
                { name: "Material 3 & Cupertino", percentage: 90 }
            ]
        },
        {
            category: "Design Patterns",
            icon: "fa-solid fa-cubes",
            items: [
                { name: "BLoC / Cubit Pattern", percentage: 88 },
                { name: "Provider State Management", percentage: 90 },
                { name: "Riverpod Pattern", percentage: 78 },
                { name: "Repository Pattern", percentage: 82 },
                { name: "MVVM / MVC Architecture", percentage: 82 }
            ]
        },
        {
            category: "Firebase",
            icon: "fa-solid fa-fire",
            items: [
                { name: "Firebase Authentication", percentage: 90 },
                { name: "Cloud Firestore Database", percentage: 85 },
                { name: "Cloud Messaging (FCM Push)", percentage: 80 },
                { name: "Firebase Storage", percentage: 82 },
                { name: "Crashlytics & Remote Config", percentage: 75 }
            ]
        },
        {
            category: "Local Storage",
            icon: "fa-solid fa-database",
            items: [
                { name: "Hive NoSQL", percentage: 88 },
                { name: "SQLite / SQFlite", percentage: 82 },
                { name: "SharedPreferences", percentage: 92 },
                { name: "Flutter Secure Storage", percentage: 85 },
                { name: "Hydrated BLoC Caching", percentage: 80 }
            ]
        },
        {
            category: "Other Skills",
            icon: "fa-solid fa-sliders",
            items: [
                { name: "RESTful APIs & Dio", percentage: 90 },
                { name: "Git, GitHub & Version Control", percentage: 88 },
                { name: "Unit & Widget Testing", percentage: 75 },
                { name: "App Store & Play Store Deployment", percentage: 78 },
                { name: "Performance Profiling", percentage: 80 }
            ]
        }
    ],

    // ===============================================
    // FEATURED PROJECTS (DEMO PROJECTS ONLY)
    // Add/remove items here to automatically update cards
    // ===============================================
    projects: [
        {
            id: "proj-1",
            title: "E-Commerce App",
            label: "Demo Project",
            type: "Demo Project 01",
            description: "A modern e-commerce mobile application concept featuring dynamic product filtering, seamless cart management, dark mode with neon accents, and interactive checkout flow.",
            image: "assets/images/project-1.jpg",
            technologies: ["Flutter", "Dart", "Firebase", "BLoC", "Stripe API"],
            github: "#",
            demo: "#"
        },
        {
            id: "proj-2",
            title: "Movies App",
            label: "Demo Project",
            type: "Demo Project 02",
            description: "A movie browsing and trailer streaming application concept with TMDb API integration, hero animations, offline watchlist persistence, and cinema ticket booking interface.",
            image: "assets/images/project-2.jpg",
            technologies: ["Flutter", "REST API", "Dio", "Hive", "Hero Animations"],
            github: "#",
            demo: "#"
        },
        {
            id: "proj-3",
            title: "AI Chat App",
            label: "Demo Project",
            type: "Demo Project 03",
            description: "A sleek conversational AI assistant concept featuring glowing audio waveform visualizer, Markdown code highlighting, prompt presets, and responsive chat bubble streams.",
            image: "assets/images/project-3.jpg",
            technologies: ["Flutter", "Dart", "OpenAI API", "Audio Waveform", "Riverpod"],
            github: "#",
            demo: "#"
        },
        {
            id: "proj-4",
            title: "Smart Chess",
            label: "Demo Project",
            type: "Demo Project 04",
            description: "A smart chess mobile game concept featuring real-time engine evaluation graph, interactive move validation, custom neon piece themes, and local game timers.",
            image: "assets/images/project-4.jpg",
            technologies: ["Flutter", "Custom Canvas", "Stockfish Engine", "Provider"],
            github: "#",
            demo: "#"
        }
    ],

    // ===============================================
    // TESTIMONIALS (DEMO TESTIMONIALS ONLY)
    // ===============================================
    testimonials: [
        {
            name: "Tariq K.",
            role: "Product Manager (Demo)",
            company: "Digital Ventures",
            stars: 5,
            tag: "Demo Testimonial",
            text: "Mohamed delivered exceptionally clean, responsive Flutter screens with incredible attention to detail. His code architecture and BLoC state management made scaling our mobile app effortless.",
            avatar: "assets/images/avatar-1.jpg"
        },
        {
            name: "Sarah R.",
            role: "Startup Founder (Demo)",
            company: "TechNova Apps",
            stars: 5,
            tag: "Demo Testimonial",
            text: "Working with Mohamed was a fantastic experience. He transformed our complex Figma design into a fast, 60fps Flutter app with flawless animations and responsive tablet layouts.",
            avatar: "assets/images/avatar-2.jpg"
        },
        {
            name: "Michael L.",
            role: "Lead Engineer (Demo)",
            company: "Apex Mobile Studio",
            stars: 5,
            tag: "Demo Testimonial",
            text: "Great communication, disciplined clean architecture, and prompt delivery. He tackled our offline-first caching and REST API integrations with zero issues.",
            avatar: "assets/images/avatar-3.jpg"
        }
    ],

    // ===============================================
    // MY SERVICES (14 SERVICES)
    // ===============================================
    services: [
        {
            number: "01",
            icon: "fa-solid fa-mobile-screen",
            title: "Flutter App Development",
            description: "End-to-end cross-platform iOS and Android mobile applications built from scratch with clean, scalable Dart code."
        },
        {
            number: "02",
            icon: "fa-solid fa-palette",
            title: "UI Implementation",
            description: "Transforming Figma, Adobe XD, and Sketch prototypes into pixel-perfect, interactive, and responsive Flutter interfaces."
        },
        {
            number: "03",
            icon: "fa-solid fa-network-wired",
            title: "API Integration",
            description: "Connecting mobile applications to RESTful and GraphQL backend endpoints with robust error handling and caching via Dio."
        },
        {
            number: "04",
            icon: "fa-solid fa-fire",
            title: "Firebase Integration",
            description: "Full Firebase suite setup including Authentication, Cloud Firestore, Realtime DB, Cloud Storage, and FCM Push Notifications."
        },
        {
            number: "05",
            icon: "fa-solid fa-diagram-project",
            title: "State Management",
            description: "Architecting predictable and testable app states using industry-standard BLoC, Cubit, Provider, or Riverpod."
        },
        {
            number: "06",
            icon: "fa-solid fa-laptop-code",
            title: "Responsive UI",
            description: "Crafting fluid adaptive layouts that look and feel native across phones, foldables, and large screen tablets."
        },
        {
            number: "07",
            icon: "fa-solid fa-shield-halved",
            title: "Authentication",
            description: "Implementing secure authentication mechanisms: Email/Password, Google Sign-In, Apple ID, Biometrics, and OAuth2."
        },
        {
            number: "08",
            icon: "fa-solid fa-database",
            title: "Local Storage",
            description: "Fast offline-first data caching and persistence using Hive, SQLite (sqflite), SharedPreferences, and Secure Storage."
        },
        {
            number: "09",
            icon: "fa-solid fa-bug",
            title: "Bug Fixing",
            description: "Diagnosing, tracking, and resolving complex Flutter UI glitches, state desyncs, crashes, and asynchronous exceptions."
        },
        {
            number: "10",
            icon: "fa-solid fa-gauge-high",
            title: "Performance Optimization",
            description: "Profiling frame render times, eliminating jank, reducing app bundle size, and ensuring smooth 60fps/120fps animations."
        },
        {
            number: "11",
            icon: "fa-solid fa-rocket",
            title: "App Deployment",
            description: "Configuring keystores, app icons, splash screens, signing configs, and publishing apps to Google Play Store & Apple App Store."
        },
        {
            number: "12",
            icon: "fa-solid fa-code",
            title: "Code Refactoring",
            description: "Modernizing Flutter codebases into modular Clean Architecture with SOLID principles and reusable widgets."
        },
        {
            number: "13",
            icon: "fa-solid fa-wand-magic-sparkles",
            title: "Custom Mobile Apps",
            description: "Tailored application concepts for e-commerce, media, productivity, utilities, and portfolio presentations."
        },
        {
            number: "14",
            icon: "fa-solid fa-comments",
            title: "Technical Consultation",
            description: "Advising on tech stack decisions, project feasibility, architecture roadmaps, and Flutter best practices for your team."
        }
    ],

    // ===============================================
    // CONTACT INFORMATION
    // ===============================================
    contact: {
        whatsappCard: {
            title: "Let's Talk on WhatsApp",
            description: "Have a project idea? Send me a message.",
            buttonText: "Message Me",
            link: "https://wa.me/201061675235"
        },
        emailCard: {
            title: "Send Me an Email",
            description: "Let's discuss your next project.",
            buttonText: "Send Email",
            link: "mailto:mohamed.sayedd.dev@gmail.com"
        }
    }
};

window.portfolioData = portfolioData;
