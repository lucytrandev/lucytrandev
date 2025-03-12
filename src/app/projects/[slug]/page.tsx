import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw"; // Important
import { notFound } from 'next/navigation';

export default async function ProjectPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const projectsDir = path.join(process.cwd(), "projects");
    const fullPath = path.join(projectsDir, `${slug}.md`);

    if (!fs.existsSync(fullPath)) {
        return notFound();
    }

    const rawMarkdown = fs.readFileSync(fullPath, "utf8");
    const { content, data } = matter(rawMarkdown);

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            <article className="prose dark:prose-invert max-w-none">
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                    {content}
                </ReactMarkdown>
            </article>
        </div>
    );
}

export async function generateStaticParams() {
    const projectsDir = path.join(process.cwd(), "projects");
    const filenames = fs.readdirSync(projectsDir);

    return filenames
        .filter((filename) => filename.endsWith(".md"))
        .map((filename) => ({
            slug: filename.replace(/\.md$/, ""),
        }));
}
