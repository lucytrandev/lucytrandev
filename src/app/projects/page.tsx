"use client";
import {useState, useMemo} from "react";
import ExperienceCard from "../../components/ExperienceCard";
import ExperienceFilter from "../../components/ExperienceFilter";
import AnimatedBackground from "../../components/AnimatedBackground";

export default function Experiences() {
    const experiences = useMemo(
        () => [
            {
                title: "Stock Analysis System",
                description: "Developed a stock analysis system as a freelance project on Upwork, providing tools and insights for stock market data.",
                imageUrl: "/images/stock-analysis.jpg",
                slug: "stock-analysis-system",
                tags: ["Stock Market", "Data Analysis", "Python"],
                brandLogoUrl: "/icons/upwork-logo.svg",
                filters: ["AI/Machine Learning", "Full-stack Web App", "Finance"]
            },
            {
                title: "Automated Crypto Trading Bot",
                description: "Developed a Python-based trading bot for Solana (SOL) on MEXC, using technical indicators and candlestick patterns.  Two versions: Venus (custom algorithms) and Orion (OpenAI API integration).",
                imageUrl: "/images/crypto.jpg",
                slug: "crypto-trading-bot",
                tags: ["Python", "Trading Bot", "Technical Indicators", "OpenAI"],
                brandLogoUrl: "",
                filters: ["Full-stack Web App", "AI/Machine Learning", "Finance"]
            },
            {
                title: "Charging Station Management System (OCPP)",
                description:
                    "Researched and implemented the OCPP protocol for a charging station management system, including UI development (AngularJS) and backend development (Java, JAX-RS/WS).",
                imageUrl: "/images/ev-charging.jpeg",
                slug: "ocpp-charging-station",
                tags: ["Java", "JAX-RS/WS", "Kubernetes", "Hibernate", "AngularJS", "Kafka", "Elasticsearch", "OCPP", "Backend", "Frontend", "CI/CD", "JavaScript", "HTML/CSS"],
                brandLogoUrl: "/icons/ntt-data-logo.svg",
                filters: ["Full-stack Web App"]
            },
            {
                title: "Database Monitoring Tools (Foglight)",
                description:
                    "Collaborated with Quest to develop features for database monitoring tools, including setup, UI design (Angular), and backend development (Java) for AWS DocumentDB, SAP HANA, and MongoDB Atlas.",
                imageUrl: "/images/database-monitoring.webp",
                slug: "database-monitoring-foglight",
                tags: ["Java", "Angular", "AWS", "MongoDB", "DocumentDB", "SAP HANA", "Database Monitoring", "Backend", "Frontend", "JavaScript", "HTML/CSS"],
                brandLogoUrl: "/icons/foglight.png",
                filters: ["Full-stack Web App", "Databases", "Cloud Computing"]
            },
            {
                title: "AI Model Training & Code Review",
                description:
                    "Contributed to training AI models by reviewing, improving, and creating coding questions, ensuring accuracy and clarity in both Vietnamese and English.",
                imageUrl: "/images/ai-tutor.webp",
                slug: "ai-model-training",
                tags: ["AI", "Code Review", "Model Training", "Vietnamese", "English"],
                filters: ["AI", "Code Review"],
                brandLogoUrl: "/icons/outliner.svg"
            },
            {
                title: "AI-Generated Anime Illustration Videos",
                description: "Built an AI-powered video generator to create anime-style visuals, overcoming video length limitations and enhancing resolution.",
                imageUrl: "/images/ai-anime.webp",
                slug: "ai-anime-video",
                tags: ["AI", "Video Generation", "Anime", "Image Processing", "Cinematic Techniques", "Python"],
                brandLogoUrl: "",
                filters: ["AI", "Video Generation"]
            },
            {
                title: "Palmprint Recognition System",
                description: "Developed a palmprint matching system using self-supervised learning (SimCLR inspired) with a ResNet-18 backbone and a Streamlit UI.",
                imageUrl: "/images/palmprint.png",
                slug: "palmprint-recognition",
                tags: ["AI", "Machine Learning", "Self-Supervised Learning", "Computer Vision", "ResNet", "Streamlit", "OpenCV", "Python"],
                brandLogoUrl: "",
                filters: ["AI/Machine Learning", "Image Processing"]
            },
            {
                title: "AI-Powered Seat Detection",
                description: "Developed an AI solution for TicketWindow.ca to auto-detect and count seats in venue images, using pre-trained models.",
                imageUrl: "/images/ai-seat.jpg",
                slug: "ai-seat-detection",
                tags: ["AI", "Image Processing", "Object Detection", "Pre-trained Models", "Python", "Gemini", "Google Cloud", "OpenAI"],
                brandLogoUrl: "/icons/ticketWindow.png",
                filters: ["AI", "Image Processing", "Object Detection"]
            },
            {
                title: "AI-Powered Ad Campaign Analysis",
                description: "Built an AI tool for a 48-hour hackathon to analyze Heineken's marketing campaign, using YOLOv8 for object detection and LAVA for sentiment analysis.",
                imageUrl: "/images/ai-ad.webp",
                slug: "ad-campaign-analysis",
                tags: ["AI", "YOLOv8", "LAVA", "Sentiment Analysis", "Object Detection", "Python", "Machine Learning"],
                brandLogoUrl: "",
                filters: ["AI/Machine Learning", "Object Detection", "Image Processing"]
            },
            {
                title: "AI-Powered Network Security System",
                description:
                    "Maintained and developed an AI-powered network security system, including building REST APIs (Java, Spring) and using Elasticsearch.",
                imageUrl: "/images/ai-network.jpeg",
                slug: "network-security-system",
                tags: ["Java", "Spring", "Docker", "Redis", "MySQL", "Kafka", "Elasticsearch", "REST API", "Network Security", "AI"],
                brandLogoUrl: "/icons/viettel.png",
                filters: ["Full-stack Web App", "AI"]
            },
            {
                title: "Learning Management System",
                description:
                    "Maintained the learning and marketing systems for Edumall and developed a real-time feature for tracking student speaking/listening status.",
                imageUrl: "/images/elearning.jpg",
                slug: "edumall-lms",
                tags: ["Node.js", "Ruby on Rails", "React.js", "NoSQL", "LMS", "Real-time", "JavaScript", "HTML/CSS"],
                brandLogoUrl: "/icons/topica.png",
                filters: ["Full-stack Web App", "Web Development"]
            },
            {
                title: "Service Exchange Platform Features",
                description:
                    "Developed new features for the Wehelp Vietnam service exchange platform, working on both backend (Java, Vert.x) and frontend (React.js).",
                imageUrl: "/images/service-exchange.jpg",
                slug: "wehelp-features",
                tags: ["Java", "Vert.x", "React.js", "Backend", "Frontend", "Javascript", "HTML/CSS"],
                brandLogoUrl: "/icons/vnpgroup.jpg",
                filters: ["Full-stack Web App", "Web Development"]
            },
            {
                title: "Sushi Restaurant Orders App UI/UX Design",
                description: "Designed the user interface and user experience for a mobile application using Figma, focusing on a clean and intuitive design.",
                imageUrl: "/images/app-design.jpg",
                slug: "mobile-app-ui-ux",
                tags: ["UI/UX", "Figma", "Mobile Design", "User Interface", "User Experience"],
                brandLogoUrl: "",
                filters: ["UI/UX Design"]
            },
            {
                title: "Responsive UI/UX Design for an Online Bookcase",
                description: "Created wireframes and high-fidelity mockups for a website using Figma, ensuring responsiveness across different screen sizes (mobile and tablet).",
                imageUrl: "/images/web-responsive.webp",
                slug: "website-ui-ux",
                tags: ["UI/UX", "Figma", "Web Design", "Responsive Design", "User Interface", "User Experience"],
                brandLogoUrl: "",
                filters: ["UI/UX Design"]
            }
        ],
        []
    );

    const [selectedFilterTags, setSelectedFilterTags] = useState<string[]>([]);

    // Extract unique tags from all experiences
    const allFilters = useMemo(() => {
        const filters = new Set<string>();
        experiences.forEach((exp) => {
            exp.filters.forEach((filter) => filters.add(filter));
        });
        return Array.from(filters).sort();
    }, [experiences]);

    // Filter experiences based on selected tags
    const filteredExperiences = useMemo(() => {
        if (selectedFilterTags.length === 0) return experiences;
        return experiences.filter((exp) =>
            selectedFilterTags.some((filter) => exp.filters.includes(filter))
        );
    }, [experiences, selectedFilterTags]);

    // Handle filter tag selection
    const handleTagSelect = (filter: string) => {
        setSelectedFilterTags((prev) =>
            prev.includes(filter) ? prev.filter((t) => t !== filter) : [...prev, filter]
        );
    };

    return (
        <main className="relative min-h-screen">
            <AnimatedBackground/>
            <div className="min-h-screen p-8 sm:p-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Experiences</h1>

                    {/* Filter */}
                    <ExperienceFilter
                        filters={allFilters}
                        selectedTags={selectedFilterTags}
                        onTagSelect={handleTagSelect}
                    />

                    {/* Display Experiences */}
                    {filteredExperiences.length === 0 ? (
                        <div className="text-center py-20 text-foreground/70">
                            No experiences found with the selected filters.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                            {filteredExperiences.map((exp, index) => (
                                <ExperienceCard
                                    key={index}
                                    title={exp.title}
                                    description={exp.description}
                                    imageUrl={exp.imageUrl}
                                    experienceUrl={`/projects/${exp.slug}`}
                                    tags={exp.tags}
                                    brandLogoUrl={exp.brandLogoUrl}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
