// components/ExperienceCard.tsx

import Image from "next/image";
import Link from "next/link";

interface ExperienceCardProps {
    title: string;
    description: string;
    imageUrl: string;
    experienceUrl: string;
    tags: string[];
    brandLogoUrl?: string;
}

export default function ExperienceCard({
                                           title,
                                           description,
                                           imageUrl,
                                           experienceUrl,
                                           tags,
                                           brandLogoUrl
                                       }: ExperienceCardProps) {
    return (
        <Link href={experienceUrl}>
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

                    {/* Brand Logo in the top-right corner */}
                    {brandLogoUrl && (
                        <div className="absolute top-2 right-2">
                            <div
                                className="flex items-center justify-center w-20 h-12 bg-white px-2 py-1 rounded-md border border-gray-300">
                                <Image
                                    src={brandLogoUrl}
                                    alt="Brand Logo"
                                    width={60}
                                    height={36}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-4 flex-grow">
                    <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
                    <p className="text-foreground/70 text-sm leading-relaxed">{description}</p>

                    {/* Tag Chips */}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="
                  px-2 py-1
                  text-xs
                  rounded-full
                  bg-foreground/10
                  text-foreground/80
                  border border-foreground/20
                "
                            >
                {tag}
              </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
