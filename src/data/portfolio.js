import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiTypescript } from 'react-icons/si';

export const portfolioData = {
    hero: {
        name: "Daksh",
        title: "Full-Stack Developer",
        description: "I build accessible, pixel-perfect, performant, and responsive web experiences.",
        actions: [
            { label: "View Projects", href: "#projects", primary: true },
            { label: "Contact Me", href: "#contact", primary: false }
        ]
    },
    about: {
        title: "About Me",
        description: "I'm a driven developer with a knack for solving complex problems and making the final product feel effortless. I blend modern web technologies with a practical, Gen-Z mindset—clean UI, smart logic, and zero overcomplication. I'm constantly exploring, building, and leveling up, aiming to create work that’s not just functional but genuinely exciting to use. Innovation, clarity, and momentum define how I build.",
        stats: [
            { label: "Years Experience", value: "3+" },
            { label: "Projects Completed", value: "50+" },
            { label: "Clients Satisfied", value: "20+" }
        ]
    },
    skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Express", icon: SiExpress, color: "#000000" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
    projects: [
        {
            title: "Astro-Hive",
            description: "AstroHive is an AI-powered, distributed assistant system designed to manage and support autonomous space missions. It uses modular OPEA-compliant microservices to create intelligent agents that operate at three mission layers: rovers, satellites, and Earth-based control stations.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            links: { demo: "#", repo: "https://github.com/daksh-stack/astro-hive.git" }
        },
        {
            title: "Fashionate",
            description: "A fashion search engine that gave the users to get the best price they could get across various platforms. We used Web scrapping to get the data from the platforms available online and show the most affordable price of the product. We also worked on an AI feature- ‘AI outfit try-on’. It basically helped the user to try the outfit virtually.",
            tags: ["Next.js", "TypeScript", "Tailwind"],
            links: { demo: "#", repo: "#" }
        },
        {
            title: "Code-Trackr",
            description: "CodeTrackr is a browser extension. This extension provides users with tools and features to streamline their coding workflow, track their progress, and manage their coding resources effectively.",
            tags: ["React", "API Integration", "Chart.js"],
            links: { demo: "#", repo: "https://github.com/daksh-stack/Code-Trackr.git" }
        }
    ],
    contact: {
        email: "dakshhardiya34@gmail.com",
        socials: [
            { label: "GitHub", href: "https://github.com/daksh-stack" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/daksh-hardiya" },
            { label: "Twitter", href: "https://x.com/HardiyaDaksh" }
        ]
    },
    experience: [
        {
            company: "Cosmox Blogs",
            role: "Technical Article Writer",
            duration: "Mar 2025 – Present",
            type: "Remote",
            description: [
                "Authored multiple articles on science, technology, and education, blending research with accessible writing.",
                "Topics include Stars and Nebulae: Mist to Mystery, Sustainable Space Exploration and much more.",
                "Demonstrated strong analytical, writing, and knowledge sharing skills.",
                "Published works highlight ability to simplify complex concepts for broader audiences."
            ]
        }
    ]
};
