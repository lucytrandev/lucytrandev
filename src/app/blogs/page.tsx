// blogs/page.tsx
"use client";
import {useMemo} from "react";
import BlogCard from "../../components/BlogCard"; // Renamed Component
import AnimatedBackground from "../../components/AnimatedBackground";

export default function Blogs() {  // Renamed component
    const blogs = useMemo(  // Renamed variable
        () => [
            {
                title: "Palmprint Recognition with Self-Supervised Learning",
                description: "Explore the development of a palmprint matching system using self-supervised learning (inspired by SimCLR). This post covers the ResNet-18 architecture, the Streamlit UI, and the challenges of working with unlabeled data.",
                imageUrl: "/images/palmprint-blog.webp",
                url: "https://www.kaggle.com/code/lucy2233/palmprint-recognition-for-authentication",
            },
        ],
        []
    );
    return (
        <main className="relative min-h-screen">
            <AnimatedBackground/>
            <div className="min-h-screen p-8 sm:p-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">Blogs</h1>
                    {/* Display Blogs */}
                    {blogs.length === 0 ? (
                        <div className="text-center py-20 text-foreground/70">
                            No blogs found with the selected filters.
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                            {blogs.map((blog, index) => (
                                <BlogCard
                                    key={index}
                                    title={blog.title}
                                    description={blog.description}
                                    imageUrl={blog.imageUrl}
                                    blogUrl={blog.url}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}