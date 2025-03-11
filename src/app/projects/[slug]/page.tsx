// app/projects/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {serialize} from "next-mdx-remote/serialize";
import {notFound} from 'next/navigation';
import MDXDisplay from "@/app/projects/[slug]/MDXDisplay";

export default async function ProjectPage({params}: { params: { slug: string } }) {
    const slug = params.slug;
    const projectsDir = path.join(process.cwd(), "projects");
    const fullPath = path.join(projectsDir, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
        return notFound();
    }

    const rawMdx = fs.readFileSync(fullPath, "utf8");
    const {content, data} = matter(rawMdx);
    const mdxSource = await serialize(content);

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
            {/* Render the MDX content using the client component */}
            <MDXDisplay source={mdxSource}/>
        </div>
    );
}

export async function generateStaticParams() {
    const projectsDir = path.join(process.cwd(), "projects");
    const filenames = fs.readdirSync(projectsDir);

    const paths = filenames
        .filter((filename) => filename.endsWith(".mdx"))
        .map((filename) => ({
            slug: filename.replace(/\.mdx$/, ""),
        }));

    return paths;
}