import {
    Code,
    Cloud,
    Layout,
    Smartphone,
    Shield,
    Database,
} from "lucide-react";

const services = [
    {
        title: "Custom Software Development",
        description:
            "End-to-end software solutions tailored to your unique business needs. From concept to deployment, we build scalable applications that drive growth.",
        icon: <Code className="h-10 w-10 text-teal-600 mb-2" />,
        image: "/assets/images/software_development_1767785773118.png",
    },
    {
        title: "Cloud Infrastructure & DevOps",
        description:
            "Scalable, secure cloud architecture with automated deployment pipelines. Optimize your infrastructure for performance and cost-efficiency.",
        icon: <Cloud className="h-10 w-10 text-teal-600 mb-2" />,
        image: "/assets/images/cloud_infrastructure_1767785794792.png",
    },
    {
        title: "Enterprise Integration",
        description:
            "Seamless integration of legacy systems with modern platforms. Connect your entire tech ecosystem for unified operations.",
        icon: <Layout className="h-10 w-10 text-teal-600 mb-2" />,
        image: "/assets/images/enterprise_integration_1767785811735.png",
    },
    {
        title: "Mobile-First Solutions",
        description:
            "Native and cross-platform mobile applications for iOS and Android. Create exceptional mobile experiences your users will love.",
        icon: <Smartphone className="h-10 w-10 text-teal-600 mb-2" />,
        image: "/assets/images/mobile_app_solution_1767785829184.png",
    },
    {
        title: "Cybersecurity & Compliance",
        description:
            "Comprehensive security audits, implementation, and compliance management. Protect your business from evolving cyber threats.",
        icon: <Shield className="h-10 w-10 text-teal-600 mb-2" />,
        image: "/assets/images/cybersecurity_shield_1767785888431.png",
    },
    {
        title: "Data Engineering & Analytics",
        description:
            "Transform data into actionable insights with modern data pipelines. Make informed decisions with real-time analytics.",
        icon: <Database className="h-10 w-10 text-teal-600 mb-2" />,
        image: "/assets/images/data_analytics_1767785850369.png",
    },
];

const ServicesSection = () => {
    return (
        <section id="services" className="py-20 bg-muted/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold tracking-tight mb-4">Our Services</h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                        Comprehensive technology solutions designed to accelerate your digital transformation and drive measurable business results.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:gap-4 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer
                     transition-all duration-700 ease-in-out
                     h-[200px] lg:h-[260px]
                     lg:flex-[0.8] lg:hover:flex-[2]"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="absolute inset-0 h-full w-full object-cover
                         transition-transform duration-700
                         group-hover:scale-110"
                                />

                                {/* Gradient Overlay */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t
                         from-black/80 via-black/20 to-black/40
                         transition-all duration-700
                         group-hover:from-black/90
                         group-hover:via-black/40
                         group-hover:to-black/60"
                                />
                            </div>

                            {/* Content */}
                            <div className="relative h-full p-4 md:px-4 md:py-3 flex flex-col justify-between">
                                {/* Top Content */}
                                <div>

                                    <div
                                        className="text-white opacity-0 translate-y-4
                           transition-all duration-700
                           group-hover:opacity-100
                           group-hover:translate-y-0"
                                    >
                                        <p className="text-sm md:text-base font-light leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                                {/* Bottom Row */}
                                <div className="absolute bottom-[24px] left-4 md:left-4 right-4 md:right-6 text-white flex items-end justify-between">
                                    <h3 className="text-lg md:text-xl lg:text-xl font-semibold font-poppins leading-tight flex-1">
                                        {service.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Detailed Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    {/* Web App Development */}
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-teal-600">
                            Web App Development
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Elevate your business with our expert services. We specialize in creating tailored, high-performance web applications that streamline processes, engage users, and drive growth.
                        </p>
                    </div>

                    {/* Mobile App Development */}
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-teal-600">
                            Mobile App Development
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Innovative ideas meet skilled craftsmanship. Our mobile app development services are tailored to transform your concepts into captivating, user-friendly, and functional mobile applications.
                        </p>
                    </div>

                    {/* UI/UX Design */}
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-teal-600">
                            UI/UX Design
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our UI/UX design services are crafted to transform digital experiences into unforgettable journeys. From websites to apps, we blend creativity with user-centric design principles to captivate, engage, and inspire.
                        </p>
                    </div>

                    {/* Project Management & Support */}
                    <div>
                        <h3 className="text-2xl font-bold mb-3 text-teal-600">
                            Project Management & Support
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Our project management and support services ensure your projects are delivered on time, on budget, and with maximum efficiency. We bring clarity, organization, and expertise to every endeavor, making success the only outcome.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default ServicesSection;
