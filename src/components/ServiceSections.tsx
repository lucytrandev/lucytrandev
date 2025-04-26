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
                </div>
            </div>

            {/* Service Boxes (2 x 2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div
                    className="flex items-center gap-4 bg-[#26344c] text-white p-4 rounded-md shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#35435b]">
                        <Image
                            src="/icons/bot.svg"
                            alt="AI/ML Icon"
                            width={24}
                            height={24}
                            className="brightness-0 invert"
                        />
                    </div>
                    <p className="font-semibold">AI Trading Bot</p>
                </div>

                <div
                    className="flex items-center gap-4 bg-[#26344c] text-white p-4 rounded-md shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#35435b]">
                        <Image
                            src="/icons/web.svg"
                            alt="AI/ML Icon"
                            width={24}
                            height={24}
                            className="brightness-0 invert"
                        />
                    </div>
                    <p className="font-semibold">Web Development</p>
                </div>

                <div
                    className="flex items-center gap-4 bg-[#26344c] text-white p-4 rounded-md shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#35435b]">
                        <Image
                            src="/icons/aiml.svg"
                            alt="AI/ML Icon"
                            width={24}
                            height={24}
                            className="brightness-0 invert"
                        />
                    </div>
                    <p className="font-semibold">AI / Machine Learning</p>
                </div>

                <div
                    className="flex items-center gap-4 bg-[#26344c] text-white p-4 rounded-md shadow hover:shadow-lg transition">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#35435b]">
                        <Image
                            src="/icons/feelance.svg"
                            alt="AI/ML Icon"
                            width={24}
                            height={24}
                            className="brightness-0 invert"
                        />
                    </div>
                    <p className="font-semibold">Freelancing</p>
                </div>
            </div>
        </div>
    );
}
