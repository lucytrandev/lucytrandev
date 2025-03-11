import Image from "next/image";

export default function ServicesSection() {
    return (
        <div className="lg:w-1/3 text-center lg:text-left">
            {/* Heading + Arrow + Subtext */}
            <div className="mb-6">
                <div className="flex items-center justify-center lg:justify-start gap-2">
                    <h2 className="text-xl sm:text-4xl font-extrabold tracking-wide">
                        Services
                    </h2>
                    <svg
                        className="w-6 h-6 text-[#bc644b]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={6}
                    >
                        {/* Left arrow path */}
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
                    </svg>
                </div>
            </div>

            {/* Service Boxes (2 x 2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
                    className="flex items-center gap-4 bg-blue-900/70 text-white p-4 rounded-md shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                        <Image
                            src="/icons/bot.svg"
                            alt="AI/ML Icon"
                            width={24}
                            height={24}
                            className="text-[#94c1ab]"
                        />
                    </div>
                    <p className="font-semibold">AI Trading Bot</p>
                </div>

                <div
                    className="flex items-center gap-4 bg-blue-900/70 text-white p-4 rounded-md shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                        <Image
                            src="/icons/web.svg"
                            alt="AI/ML Icon"
                            width={24}
                            height={24}
                            className="text-[#94c1ab]"
                        />
                    </div>
                    <p className="font-semibold">Web Development</p>
                </div>

                <div
                    className="flex items-center gap-4 bg-blue-900/70 text-white p-4 rounded-md shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                        <Image
                            src="/icons/aiml.svg"
                            alt="AI/ML Icon"
                            width={24}
                            height={24}
                            className="text-[#94c1ab]"
                        />
                    </div>
                    <p className="font-semibold">AI / Machine Learning</p>
                </div>

                <div
                    className="flex items-center gap-4 bg-blue-900/70 text-white p-4 rounded-md shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white">
                        <Image
                            src="/icons/feelance.svg"
                            alt="AI/ML Icon"
                            width={24}
                            height={24}
                            className="text-[#94c1ab]"
                        />
                    </div>
                    <p className="font-semibold">Freelancing</p>
                </div>
            </div>
        </div>
    );
}
