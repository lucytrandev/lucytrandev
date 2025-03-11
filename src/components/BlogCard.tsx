// components/BlogCard.tsx

import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
    title: string;
    description: string;
    imageUrl: string;
    blogUrl: string;
    brandLogoUrl?: string;
}

export default function BlogCard({  // Renamed Component
                                     title,
                                     description,
                                     imageUrl,
                                     blogUrl,
                                 }: BlogCardProps) {
    return (
        <Link href={blogUrl} target={'_blank'}>
            <div
                className="
          flex flex-col h-full
          group relative
          bg-background/80
          backdrop-blur-sm
          border border-foreground/10
          rounded-xl
          overflow-hidden
          transition-all duration-300
          hover:shadow-2xl hover:scale-[1.02]
        "
            >
                {/* Image Section */}
                <div className="relative h-48 md:h-64">
                    <Image
                        src={imageUrl}
                        alt={title}
                        width={400}
                        height={300}
                        className="
              w-full h-full object-cover
              transition-transform duration-300
              group-hover:scale-110
            "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"/>

                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-grow">
                    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                    <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>
                </div>
            </div>
        </Link>
    );
}