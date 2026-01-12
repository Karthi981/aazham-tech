import React from "react";

const HeroSection = () => {
    return (
        <div className="relative w-full overflow-hidden pt-12">
            <div className="relative h-[50vh]">
                <div className="relative h-full mx-auto transition-all duration-500 lg:max-w-7xl">
                    <div className="relative w-full h-full overflow-hidden transition-all duration-500 rounded-none lg:rounded-2xl">
                        <video
                            className="object-cover w-full h-full"
                            autoPlay
                            playsInline
                            muted
                            loop
                        >
                            <source src="/videos/hero-video-2.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-4">
                        <div className="w-[520px] max-md:w-[90vw] bg-gray-700/70 backdrop-blur-xs p-6 rounded-2xl">
                            <h1 className="mb-2 text-3xl font-semibold text-white max-md:text-2xl font-poppins">
                                We Help To Evolve
                            </h1>
                            <h2 className="mb-3 text-2xl font-medium text-white max-md:text-xl font-poppins">
                                Your Business
                            </h2>
                            <p className="text-base font-light text-white max-md:text-sm font-poppins leading-relaxed">
                                We deliver innovative digital solutions that drive growth,
                                enhance efficiency, and position your business for long-term
                                success in the digital age.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
