const projectsData = [
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
                        { label: "Role", value: "Academic Group Project" }
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
    { year: "2018", projects: [], placeholder: "Empty shelf (for now)." },
    { year: "2019", projects: [], placeholder: "More books coming soon." },
    { year: "2024", projects: [], placeholder: "Reserved for 2024 projects." },
    { year: "2025", projects: [], placeholder: "Future ideas live here." }
];
