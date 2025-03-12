import AnimatedBackground from '@/components/AnimatedBackground';


import SkillBadge from "@/components/SkillBadge";
import HeadlineSection from "@/components/HeadlineSection";

interface Skill {
    name: string;
    icon: string;
}

interface SkillCategory {
    category: string;
    skills: Skill[];
}

const skillCategories: SkillCategory[] = [
    {
        category: "Backend Development",
        skills: [
            {name: "Java", icon: "/icons/java-icon.svg"},
            {name: "Python", icon: "/icons/python.svg"},
            {name: "Spring Boot", icon: "/icons/spring.svg"},
            {name: "Hibernate", icon: "/icons/hibernate.svg"},
            {name: "JAX-RS", icon: "/icons/jax-rs.svg"},
            {name: "RESTful APIs", icon: "/icons/api.svg"},
            {name: "Flask", icon: "/icons/flask.svg"},
            {name: "FastAPI", icon: "/icons/fastapi.svg"},
            {name: "SQL", icon: "/icons/sql.svg"},
            {name: "NoSQL", icon: "/icons/nosql.svg"},
        ]
    },
    {
        category: "Frontend Development",
        skills: [
            {name: "Angular", icon: "/icons/angular-svgrepo-com.svg"},
            {name: "React", icon: "/icons/react-svgrepo-com.svg"},
            {name: "TypeScript", icon: "/icons/typescript-svgrepo-com.svg"},
            {name: "JavaScript", icon: "/icons/javascript.svg"},
            {name: "HTML5", icon: "/icons/html5.svg"},
            {name: "CSS3", icon: "/icons/css.svg"},
            {name: "SASS/LESS", icon: "/icons/sass.svg"},
            {name: "Bootstrap", icon: "/icons/bootstrap.svg"},
            {name: "Tailwind CSS", icon: "/icons/tailwind.svg"},
            {name: "GraphQL (Basic)", icon: "/icons/graphql.svg"},
            {name: "Webpack", icon: "/icons/webpack.svg"},
            {name: "Vite", icon: "/icons/vite.svg"},
            {name: "Babel", icon: "/icons/babel.svg"},
            {name: "NPM", icon: "/icons/npm.svg"},
            {name: "Yarn", icon: "/icons/yarn.svg"},
        ]
    },
    {
        category: "Cloud & DevOps",
        skills: [
            {name: "AWS", icon: "/icons/aws.svg"},
            {name: "Docker", icon: "/icons/docker-svgrepo-com.svg"},
            {name: "CI/CD (GitLab)", icon: "/icons/gitlab.svg"},
            {name: "Google Cloud", icon: "/icons/google_cloud.svg"}
        ]
    },
    {
        category: "Databases",
        skills: [
            {name: "MySQL", icon: "/icons/mysql.svg"},
            {name: "MongoDB", icon: "/icons/mongodb.svg"},
            {name: "PostgreSQL", icon: "/icons/postgresql-svgrepo-com.svg"},
            {name: "SAP HANA", icon: "/icons/saphana.svg"},
            {name: "Elasticsearch", icon: "/icons/elasticsearch.svg"},
            {name: "DocumentDB", icon: "/icons/aws.svg"}
        ]
    },
    {
        category: "Testing & Automation",
        skills: [
            {name: "JUnit", icon: ""},
            {name: "Selenium", icon: "/icons/cucumber.svg"}
        ]
    },
    {
        category: "Machine Learning & AI",
        skills: [
            {name: "PyTorch", icon: "/icons/pytorch.svg"},
            {name: "TensorFlow", icon: "/icons/tensorflow.svg"},
            {name: "OpenCV", icon: "/icons/opencv.svg"}
        ]
    },
    {
        category: "UI/UX",
        skills: [
            {name: "Responsive Design", icon: "/icons/responsivedesign.svg"},
            {name: "Cross-Browser Compatibility", icon: "/icons/browser.svg"},
            {name: "UI/UX principles", icon: "/icons/uiux.svg"},
        ]
    },
    {
        category: "Other Skills",
        skills: [
            {name: "Computer Vision", icon: "/icons/computervision.svg"},
            {name: "Biometrics", icon: "/icons/finger-print.svg"},
            {name: "Image Processing", icon: "/icons/image-processing.svg"},
            {name: "OpenAI APIs", icon: "/icons/openai.svg"},
            {name: "Hugging Face", icon: "/icons/hugging_face.svg"},
            {name: "System Design", icon: "/icons/system-design.svg"},
            {name: "Agile Methodologies", icon: "/icons/agile.svg"}
        ]
    }
];

export default function Home() {
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground/>
            <HeadlineSection />
            {/* Skills Section */}
            <section className="py-20 px-8 sm:px-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8">Skills & Competencies</h2>

                    {/* Technical Skills */}
                    <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
                    {skillCategories.map((cat) => (
                        <div key={cat.category} className="mb-10">
                            <h4 className="text-xl font-semibold mb-4">{cat.category}</h4>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {cat.skills.map((skill) => (
                                    <SkillBadge
                                        key={skill.name}
                                        name={skill.name}
                                        icon={skill.icon}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Soft Skills */}
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <strong>Adaptability & Continuous Learning:</strong> Quick to learn new technologies and adapt to evolving requirements.
                            </li>
                            <li>
                                <strong>Problem Solving & Critical Thinking:</strong> Skilled at analyzing complex problems and finding effective solutions.
                            </li>
                            <li>
                                <strong>Time Management & Organization:</strong> Efficient in prioritizing tasks
                                and meeting deadlines.
                            </li>
                            <li>
                                <strong>Collaboration & Conflict Resolution:</strong> Works well with cross-functional
                                teams, resolves differences constructively.
                            </li>
                            <li>
                                <strong>Creativity & Innovation:</strong> Adept at introducing new ideas and improving
                                processes.
                            </li>
                            <li>
                                <strong>Attention to Detail:</strong> Meticulous in coding, testing, and documentation.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
