export const projectsData = [
    {
        year: "2016",
        projects: [
            {
                id: "restaurant",
                title: "Restaurant ordering & Management Project",
                type: "restaurant",
                label: "Restaurant System",
                details: {
                    year: "2016",
                    meta: ["Full restaurant system", "A-level (A2) coursework"],
                    title: "Restaurant ordering & Management Project",
                    description: [
                        "For my A-level (A2) Computing coursework, I built a complete restaurant ordering and management website using HTML, CSS, Classic ASP and MS SQL. The project met 44 assessment objectives and earned a mark of 97%.",
                        "The system mirrors how a real restaurant works, with separate roles and permissions for customers, chefs, waiters and an admin/manager."
                    ],
                    features: [
                        "<strong>Customers</strong> can place orders online, see their order history, view the menu, and update their personal and login details.",
                        "<strong>Chefs</strong> see all incoming orders (online and waiter-entered) and mark items as prepared.",
                        "<strong>Waiters</strong> take, edit and update orders in the restaurant while viewing the live menu.",
                        "<strong>Admin / Manager</strong> can track orders and revenue by day/month, analyse item popularity with charts (most/least ordered items), calculate profit, manage members, and maintain the menu."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "HTML, CSS, Classic ASP, MS SQL" },
                        { label: "Role", value: "Solo A-level project" }
                    ],
                    github: "https://github.com/KLV96/Restaurant-ordering-and-Management-Project",
                    repoDisplay: "github.com/KLV96/Restaurant-ordering-and-Management-Project"
                }
            }
        ]
    },
    {
        year: "2017",
        projects: [
            {
                id: "nuforc",
                title: "NUFORC Project",
                type: "nuforc",
                label: "NUFORC Project",
                details: {
                    year: "2017",
                    meta: ["Java Application", "API Integration", "GUI Design"],
                    title: "NUFORC Project",
                    description: [
                        "A comprehensive Java application developed to visualize and analyze UFO sighting data from the National UFO Reporting Center (NUFORC) via the Ripley API.",
                        "The application features a custom-built GUI with interactive maps, statistical analysis tools, and detailed sighting reports, designed to provide a user-friendly interface for exploring the vast dataset."
                    ],
                    features: [
                        "<strong>Interactive Map</strong>: Visualizes UFO sightings on a scrollable map with clickable markers for detailed information.",
                        "<strong>Statistical Analysis</strong>: Displays customizable statistics about sightings, allowing users to browse and select different metrics.",
                        "<strong>Data Integration</strong>: Connects to the remote Ripley API to fetch and process live UFO sighting data.",
                        "<strong>User-Friendly GUI</strong>: Features a multi-panel interface with smooth scrolling and persistent user preferences."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "Java, Swing, Ripley API" },
                        { label: "Role", value: "Academic Group Project" }
                    ],
                    github: "https://github.com/KLV96/NUFORC_Project",
                    repoDisplay: "github.com/KLV96/NUFORC_Project"
                }
            },
            {
                id: "ai-planning",
                title: "AI Planning with PDDL",
                type: "standard",
                label: "AI Planning",
                details: {
                    year: "2017",
                    meta: ["PDDL", "AI Planning", "Optimization"],
                    title: "AI Planning with PDDL",
                    description: [
                        "The purpose of this project was for us to use our understanding of Planning Domain Definition Language (PDDL) to model a real world scenario in which AI planning could possibly be used to significantly improve the outcome of a task.",
                        "Our problem entails a police force being dispatched to travel to and resolve a number of incidents over a network of locations. We decided that this is suitable for a planner because it would allow the police to more efficiently schedule their officers, minimizing resources like time, fuel, and personnel."
                    ],
                    features: [
                        "<strong>Real-World Modeling</strong>: Modeled a police dispatch scenario over a network of locations.",
                        "<strong>Resource Optimization</strong>: Focused on minimizing time, fuel, and personnel usage.",
                        "<strong>Efficient Scheduling</strong>: Automated the allocation of officers to incidents, alleviating administrative burden."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "PDDL" },
                        { label: "Role", value: "Academic Group Project" },
                        { label: "Grade", value: "89%" }
                    ],
                    github: "#",
                    repoDisplay: "Private / Coursework"
                }
            },
            {
                id: "car-seat-covers",
                title: "Car Seat Covers Project",
                type: "car",
                label: "Seat Covers",
                details: {
                    year: "2017",
                    meta: ["E-commerce", "PHP & MySQL", "Chat System"],
                    title: "Car Seat Covers Project",
                    description: [
                        "During my summer holiday, I taught myself PHP and applied my database knowledge to build a dynamic website for an overseas company selling Mercedes-Benz seat covers.",
                        "The project features a dual-user system (Customer & Admin) with order processing and a custom-built chat system for direct communication."
                    ],
                    features: [
                        "<strong>Role-Based Access</strong>: Secure login for Customers and Administrators with distinct permissions.",
                        "<strong>Live Chat System</strong>: Integrated messaging allowing customers to communicate directly with the admin.",
                        "<strong>Order Management</strong>: Admins can view, filter (e.g., weekly orders), and manage customer orders.",
                        "<strong>User Administration</strong>: Full control for admins to manage customer accounts and credentials."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "PHP, MySQL, HTML5, CSS" },
                        { label: "Role", value: "Freelance / Self-taught" }
                    ],
                    github: "https://github.com/KLV96/Car-Seat-Covers-Project",
                    repoDisplay: "github.com/KLV96/Car-Seat-Covers-Project"
                }
            },
            {
                id: "task-manager",
                title: "Task Management App",
                type: "standard",
                label: "Task Manager",
                details: {
                    year: "2017",
                    meta: ["JavaFX", "TDD / JUnit", "Desktop App"],
                    title: "Task Management Desktop Application",
                    description: [
                        "In my second year of university, I worked in a team of 5 to create a desktop application for task management using Java and JavaFX.",
                        "We adopted a Test Driven Development (TDD) approach, utilizing JUnit to rigorously test our code and ensure high reliability."
                    ],
                    features: [
                        "<strong>Task Management</strong>: Create, edit, and organize tasks in a desktop interface.",
                        "<strong>JavaFX UI</strong>: A responsive graphical user interface built with JavaFX.",
                        "<strong>Test Driven Development</strong>: Built using TDD principles with JUnit for robust error handling and logic verification.",
                        "<strong>Team Collaboration</strong>: Developed collaboratively using Git for version control."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "Java, JavaFX, JUnit" },
                        { label: "Role", value: "Team of 5 / Developer" }
                    ],
                    github: "https://github.com/KLV96/task_management_desktop_application",
                    repoDisplay: "github.com/KLV96/task_management_desktop_application"
                }
            }

        ]
    },
    {
        year: "2018",
        projects: [
            {
                id: "pediatric-game",
                title: "Pediatric Hospital Game",
                type: "hospital",
                label: "Hospital Game",
                details: {
                    year: "2018",
                    meta: ["Android App", "Unity / C#", "Deployed"],
                    title: "Chelsea & Westminster Hospital Game",
                    description: [
                        "We were a team of 10 assigned to create an Android application game for the Chelsea & Westminster Hospital. The game follows a linear playthrough simulating a child's visit and medical examination.",
                        "The design is based on actual hospital rooms, using real staff images and actors to provide a realistic experience for children undergoing treatment. The hospital chose our project for deployment out of 4 candidates."
                    ],
                    features: [
                        "<strong>Realistic Simulation</strong>: Modeled after real hospital rooms to familiarize children with the environment.",
                        "<strong>Linear Playthrough</strong>: Guides children through the process of a hospital visit.",
                        "<strong>Real-world Integration</strong>: Uses images of actual staff and actors for authenticity.",
                        "<strong>Deployed Solution</strong>: Selected by the hospital for actual use by patients."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "C#, Unity" },
                        { label: "Grade", value: "89%" },
                        { label: "Role", value: "Academic Group Project" }
                    ],
                    github: "https://github.com/RaihanSharif/Pediatric_game",
                    repoDisplay: "github.com/RaihanSharif/Pediatric_game",
                    demo: "https://drive.google.com/file/d/11af29EQ6jNmG9cixLoRv3ucdClD8MpNn/view"
                }
            },
            {
                id: "angular-datepicker",
                title: "AngularJS Date Range Picker",
                type: "standard",
                label: "Date Picker",
                details: {
                    year: "2018",
                    meta: ["AngularJS", "Mobile First", "UI Component"],
                    title: "AngularJS Date Range Picker",
                    description: [
                        "While working for Charitable Bookings, I needed a mobile-friendly date range picker but couldn't find a suitable existing solution, so I built a custom one from scratch.",
                        "Developed using HTML, CSS (Bootstrap), and JavaScript (jQuery, AngularJS), it focuses on providing a seamless experience on mobile devices."
                    ],
                    features: [
                        "<strong>Mobile Optimized</strong>: Designed specifically for touch interfaces and small screens where standard pickers fail.",
                        "<strong>Date Range Selection</strong>: Intuitive UI for selecting start and end dates with visual feedback.",
                        "<strong>Framework Integration</strong>: Built as an AngularJS directive for easy reuse across the application.",
                        "<strong>Custom Styling</strong>: Leverages Bootstrap for a clean, responsive layout."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "AngularJS, jQuery, Bootstrap" },
                        { label: "Role", value: "Work Project" }
                    ],
                    github: "https://github.com/KLV96/angularjs-dateRangePicker-datePicker",
                    repoDisplay: "github.com/KLV96/angularjs-dateRangePicker...",
                    demo: "https://jsfiddle.net/KLV96/qhe4n591/"
                }
            }
        ]
    },
    {
        year: "2019",
        projects: [
            {
                id: "audience-game",
                title: "Audience Participation Game",
                type: "game",
                label: "Audience Game",
                details: {
                    year: "2019",
                    meta: ["Unity / C#", "Python / Tweepy", "ML-Agents"],
                    title: "Audience Participation Game",
                    description: [
                        "I built a 3D game that integrates with Twitter (via Tweepy) to allow live audience interaction. Viewers can vote on game events like weapon choice, monster spawning, and difficulty levels using specific hashtags.",
                        "The project also utilizes Machine Learning (Unity ML-Agents) to train monster AI, creating distinct difficulty models based on training duration."
                    ],
                    features: [
                        "<strong>Live Interaction</strong>: Python script fetches real-time tweets to control game flow and spawn enemies.",
                        "<strong>Voting System</strong>: Audience votes decide the player's equipment and the challenges they face.",
                        "<strong>ML-Driven AI</strong>: Monsters are trained using Reinforcement Learning to offer adaptive difficulty.",
                        "<strong>In-Game Socials</strong>: Displays audience tweets and chosen colors directly in the game scene."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "Unity, Python, ML-Agents" },
                        { label: "Role", value: "Solo Academic Project" }
                    ],
                    github: "#",
                    repoDisplay: "Private / Coursework"
                }
            }
        ]
    },
    {
        year: "2024",
        projects: [
            {
                id: "apollo-group",
                title: "Apollo Group",
                type: "standard",
                label: "Apollo Group",
                details: {
                    year: "2024",
                    meta: ["React.js", "Node.js", "Bilingual"],
                    title: "Apollo Group Corporate Website",
                    description: [
                        "Designed and built a bilingual corporate website for a leading service provider in Prague. The platform features a responsive design, an interactive car rental catalog, and integrated contact services.",
                        "Built using React.js, Node.js, and Bootstrap to ensure performance and scalability."
                    ],
                    features: [
                        "<strong>Bilingual Support</strong>: Seamless switching between languages to cater to a diverse client base.",
                        "<strong>Interactive Catalog</strong>: Dynamic car rental catalog with filtering and detailed views.",
                        "<strong>Responsive Design</strong>: Fully optimized for mobile, tablet, and desktop devices.",
                        "<strong>Performance</strong>: High-speed loading and smooth transitions powered by React.js."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "React.js, Node.js, Bootstrap" },
                        { label: "Role", value: "Freelance Project" }
                    ],
                    website: "https://apollogroup.cz/",
                    github: "#",
                    repoDisplay: "Private / Client Work"
                }
            }
        ]
    },
    {
        year: "2025",
        projects: [
            {
                id: "valar-trade",
                title: "Valar Trade",
                type: "standard",
                label: "Valar Trade",
                details: {
                    year: "2025",
                    meta: ["Next.js 15", "React 19", "E-commerce"],
                    title: "Valar Trade E-commerce Platform",
                    description: [
                        "Built and launched a bilingual e-commerce website (Czech/Arabic) for a client in the Czech Republic, specializing in authentic Middle Eastern products.",
                        "Developed using Next.js 15 and React 19, featuring server-side rendering (SSR), dynamic internationalization (i18n), and a fully responsive Bootstrap 5 interface."
                    ],
                    features: [
                        "<strong>Custom Shopping Cart</strong>: Implemented a custom cart system with discount codes and postal service integration.",
                        "<strong>Bilingual Support</strong>: Dynamic internationalization (i18n) for Czech and Arabic languages.",
                        "<strong>Automated Deployment</strong>: Created shell scripts for automated deployment and database updates on VPS.",
                        "<strong>Full Stack</strong>: Managed full database integration and payment gateway support."
                    ],
                    metaGrid: [
                        { label: "Stack", value: "Next.js 15, React 19, Bootstrap 5" },
                        { label: "Role", value: "Freelance / Full Stack" }
                    ],
                    website: "https://valartrade.cz/",
                    github: "#",
                    repoDisplay: "Private / Client Work"
                }
            }
        ]
    }
];
