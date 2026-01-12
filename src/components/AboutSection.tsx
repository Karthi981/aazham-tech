import React from "react";

const AboutSection = () => {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Why Choose Us?</h2>
                </div>

                {/* Navigating Your Digital Success */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/assets/images/digital-success.jpeg"
                            alt="Navigating Your Digital Success"
                            className="rounded-lg shadow-lg w-full object-cover h-[350px]"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-3xl font-bold text-teal-600">
                            Navigating Your Digital Success
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We are not just consultants, we are your technology partners, navigating the ever-evolving digital landscape with you. Our vision encapsulates our unwavering commitment to empowering businesses through strategic technology guidance and innovation.
                        </p>
                    </div>
                </div>

                {/* Innovate – Transform – Succeed */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-20">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/assets/images/innovate-transform-succeed.jpeg"
                            alt="Innovate Transform Succeed"
                            className="rounded-lg shadow-lg w-full object-cover h-[350px]"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-3xl font-bold text-teal-600">
                            Innovate – Transform – Succeed
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We empower businesses to harness the latest technological advancements, driving transformation that leads to unparalleled success. Whether it's optimizing processes, enhancing customer experiences, or creating disruptive solutions, our focus is on propelling you forward.
                        </p>
                    </div>
                </div>
                {/* Customer-Centric Excellence */}
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <img
                            src="/assets/images/customer-centric-excellence.jpeg"
                            alt="Customer-Centric Excellence"
                            className="rounded-lg shadow-lg w-full object-cover h-[350px]"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-3xl font-bold text-teal-600">
                            Customer-Centric Excellence
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            We listen, understand, and collaborate closely to deliver tailored solutions that exceed expectations. Your success is our success, and we are committed to being a partner you can rely on.
                        </p>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
                    {/* Active Collaboration */}
                    <div className="relative group bg-secondary/50 hover:bg-secondary/80 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-5">
                            <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>

                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                            Active Collaboration
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Streamline your business operations effortlessly with transparent progress updates.
                        </p>
                    </div>

                    {/* Intuitive UI */}
                    <div className="relative group bg-secondary/50 hover:bg-secondary/80 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-5">
                            <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                            Intuitive UI
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            Our experts will help on your project design to redefine the UX.
                        </p>
                    </div>

                    {/* It's All About Quality */}
                    <div className="relative group bg-secondary/50 hover:bg-secondary/80 rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-5">
                            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                            </div>

                        </div>
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                            It's All About Quality
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-sm">
                            We make sure about the quality of service in the project delivery.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;