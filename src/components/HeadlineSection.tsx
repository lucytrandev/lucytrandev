"use client"
import Link from 'next/link';
import React from 'react';

import ServicesSection from "@/components/ServiceSections";
import Image from "next/image";

function HeadlineSection() {
    return (
        <section className="py-20 px-8 sm:px-20 bg-gradient-to-br from-background to-background/50">
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
                {/* Left Side: Headline */}
                <div className="lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                        Hi, I&#39;m <span className="text-primary text-headline">Lucy</span>
                    </h1>
                    <p className="text-lg text-foreground/70 leading-relaxed mt-4">
                        I&#39;m a full-stack software engineer building AI trading systems, web apps, and tailored software solutions. Passionate about turning ideas into real-world impact. Let&#39;s connect!
                    </p>
                    <div className="flex gap-4 mt-6 justify-center lg:justify-start">
                        <Link href="/contact">
                            <button
                                className="px-6 py-3 bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors">
                                Contact Me
                            </button>
                        </Link>
                        <Link href="/projects">
                            <button
                                className="px-6 py-3 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors">
                                View Projects
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="lg:w-1/3 hidden lg:block relative h-80">
                    <Image
                        src="/images/headline-middle.svg"
                        alt=""
                        fill
                        className="pointer-events-none object-contain"
                    />
                </div>
                <ServicesSection />
            </div>
        </section>
    );
}

export default HeadlineSection;