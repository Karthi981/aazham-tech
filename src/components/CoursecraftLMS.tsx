import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import {
    BookOpen,
    Users,
    DollarSign,
    BarChart3,
    Play,
    Shield,
    MessageSquare,
    Video,
    CheckCircle2,
    ChevronRight,
    Star,
    Layout,
    ArrowRight,
    GraduationCap,
    FileText,
    Settings,
    CreditCard,
    Target,
    TrendingUp,
    Percent
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const CoursecraftLMS = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleHomePageSectionClick = (sectionId: string) => {
        if (isHomePage) {
            // If already on home page, scroll to section
            scrollToSection(sectionId);
        } else {
            // If on another page, navigate to home with hash
            navigate(`/#${sectionId}`);
        }
    };

    const features = [
        {
            
            title: "Online course",
            description: "Turn your passion into profit! Create & sell engaging online courses with ease.",
            image: "/assets/images/lms/course-builder.jpg"
        },
        {
            
            title: "Advanced Lesson Builder",
            description: "Build engaging lessons with rich text, video embeds, downloadable resources, and interactive elements.",
            image: "/assets/images/lms/lesson-builder.jpg"
        },
        {
            
            title: "Quiz Builder",
            description: "Create quizzes with multiple question types, auto-grading, time limits, and detailed analytics.",
            image: "/assets/images/lms/quiz-builder.jpg"
        },
        {
            
            title: "Student Dashboard",
            description: "Students get a personalized dashboard to track progress, resume courses, and view certificates.",
            image: "/assets/images/lms/student-dashboard.jpg"
        },
        {
            title: "Course Catalog",
            description: "Organize your courses into a beautiful catalog with filtering and search.",
            image: "/assets/images/lms/archive-course-1.jpg"
        }
    ];

    const dashboardFeatures = [
        {
            icon: TrendingUp,
            title: "Progress Tracking",
            description: "Visual progress bars show exactly how far students have come in each course",
            value: "78%",
            label: "Average Completion"
        },
        {
            icon: Target,
            title: "Quiz Attempts",
            description: "Detailed quiz analytics with scores, attempts, and improvement tracking",
            value: "92%",
            label: "Pass Rate"
        },
        {
            icon: Percent,
            title: "Performance Analytics",
            description: "Comprehensive insights into student engagement and learning outcomes",
            value: "4.8★",
            label: "Student Satisfaction"
        }
    ];

    const paymentFeatures = [
        { icon: CreditCard, title: "PayPal Integration", description: "Accept payments worldwide with built-in PayPal support" },
        { icon: Shield, title: "Secure Checkout", description: "PCI-compliant payment processing" },
    ];

    const additionalFeatures = [
        { icon: Video, title: "Video Hosting", description: "Unlimited video storage with adaptive streaming" },
        { icon: MessageSquare, title: "Discussion Forums", description: "Built-in community features" },
        { icon: Settings, title: "Custom Branding", description: "White-label your learning portal" },
        ];

    const testimonials = [
        {
            quote: "CourseCraft LMS transformed our online education platform. The course builder is incredibly intuitive and our students love the dashboard.",
            author: "Sarah Chen",
            role: "CEO, EduTech Solutions",
            rating: 5
        },
        {
            quote: "The quiz builder with detailed analytics helped us improve our course completion rates by 40%. The PayPal integration made monetization effortless.",
            author: "Michael Roberts",
            role: "Director, Online Academy",
            rating: 5
        },
        {
            quote: "Student progress tracking is a game-changer. We can now see exactly where students struggle and optimize our content accordingly.",
            author: "Priya Sharma",
            role: "Founder, SkillBridge",
            rating: 5
        }
    ];

    const stats = [
        { value: "50K+", label: "Active Users" },
        { value: "10K+", label: "Courses Created" },
        { value: "99.9%", label: "Uptime" },
        { value: "24/7", label: "Support" }
    ];

    const topFeatures = features.slice(0, 2);
const bottomFeatures = features.slice(2, 5);

    return (
        <div className="min-h-screen bg-white text-gray-700 font-sans">
            <Header 
                scrollToSection={scrollToSection}
                setIsProductsOpen={setIsProductsOpen}
                isProductsOpen={isProductsOpen}
                variant="product"
            />

            <main className="pt-16">
                {/* Hero Section */}
                <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-blue-50/50">
                    
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <div className="flex flex-col gap-12 items-center">
                            <div className="w-full text-center items-center justify-center flex flex-col max-w-4xl">
                                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                                    <span className="text-gray-800">eLearning solution that works for you
                                    </span>
                                </h1>

                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    Teach anyone, anything, from anywhere. Your best bet to create, manage, and sell eLearning courses – all in one place!
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="py-3 rounded-full text-sm px-8 shadow-lg shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white">
                                        Get CourseCraft LMS Now
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                    <Button size="lg" variant="outline" className="bg-white text-sm px-8 border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800">
                                        <Play className="w-5 h-5 mr-2" />
                                        Watch Promo Video
                                    </Button>
                                </div>
                            </div>

                            {/* Hero Image */}
                            <div className="relative max-w-2xl mx-auto">
                            
                                <div className="relative overflow-hidden border border-gray-200">
                                    <img
                                        src="/assets/images/lms/course-builder.jpg"
                                        alt="CourseCraft LMS Course Builder"
                                        className="w-full max-h-80 object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="py-12 border-y border-gray-200 bg-gray-50/50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Features Section */}
                <section id="features" className="py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                                Everything You Need to <span className="text-blue-600">Succeed</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Build, launch, and scale your online education business with powerful tools
                            </p>
                        </div>

                        {/* Top Row – 2 Columns */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                            {topFeatures.map((feature, index) => (
                                <FeatureCard key={index} feature={feature} />
                            ))}
                            </div>

                            {/* Bottom Row – 3 Columns */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {bottomFeatures.map((feature, index) => (
                                <FeatureCard key={index} feature={feature} />
                            ))}
                        </div>

                    </div>
                </section>

                {/* Student Dashboard Highlight */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-sm mb-6">
                                <BarChart3 className="w-4 h-4" />
                                <span>Student Progress Tracking</span>
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                                Track Every <span className="text-blue-600">Learning Milestone</span>
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Give your students a powerful dashboard to track their progress, view quiz scores, and celebrate completions
                            </p>
                        </div>

                        <div className="mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                            {dashboardFeatures.map((feature, index) => (
                                <Card key={index} className="bg-white border-gray-200 p-6 hover:border-blue-300 transition-all">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                                            <feature.icon className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div className="text-2xl font-bold text-blue-600">{feature.value}</div>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm">{feature.description}</p>
                                    <div className="mt-3 text-xs text-gray-500">{feature.label}</div>
                                </Card>
                            ))}
                        </div>

                        {/* Dashboard Preview Image */}
                        <div className="relative max-w-3xl mx-auto">
                            
                            <div className="relative overflow-hidden border border-gray-200">
                                <img
                                    src="/assets/images/lms/student-dashboard.jpg"
                                    alt="Student Dashboard with Progress Tracking"
                                    className="w-full max-h-72 object-cover object-center"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Payment Integration */}
                <section className="py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-600 text-sm mb-6">
                                    <CreditCard className="w-4 h-4" />
                                    <span className="text-gray-600">Built-in Payments</span>
                                </div>
                                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                                    Accept Payments with <span className="text-blue-600">PayPal</span> & More
                                </h2>
                                <p className="text-gray-600 text-base mb-8 leading-relaxed">
                                    Start selling courses immediately with our integrated payment solutions.
                                    PayPal is built-in and ready to use — no complex setup required.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {paymentFeatures.map((feature, index) => (
                                        <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 border border-gray-200">
                                            <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                                                <feature.icon className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <div>
                                                <div className="font-semibold mb-1 text-gray-800">{feature.title}</div>
                                                <div className="text-sm text-gray-600">{feature.description}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative max-w-md mx-auto lg:max-w-none">
                                
                                <div className="relative overflow-hidden border border-gray-200">
                                    <img
                                        src="/assets/images/lms/course-page.jpg"
                                        alt="Course Page with Payment Options"
                                        className="w-full h-96 object-cover object-center"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* More Features Grid */}
                <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                                And <span className="text-blue-600">Much More</span>...
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Discover all the tools you need to create world-class learning experiences
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {additionalFeatures.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-300 transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                        <feature.icon className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1 text-gray-800">{feature.title}</h3>
                                        <p className="text-gray-600 text-sm">{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Additional Images Row */}
                        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                                <img
                                    src="/assets/images/lms/colors-and-customisation.jpg"
                                    alt="Customization Options"
                                    className="w-full h-full object-cover object-center"
                                />
                                
                            </div>
                            <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                                <img
                                    src="/assets/images/lms/archive-course.jpg"
                                    alt="Course Archive"
                                    className="w-full h-full object-cover object-center"
                                />
                                
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="py-20 lg:py-28">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                                Loved by <span className="text-blue-600">Educators</span> Worldwide
                            </h2>
                            <p className="text-gray-600 text-lg">
                                See what our customers are saying about CourseCraft LMS
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <Card key={index} className="bg-white border-gray-200 p-8">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                    <div>
                                        <div className="font-semibold text-gray-800">{testimonial.author}</div>
                                        <div className="text-gray-600 text-sm">{testimonial.role}</div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Pricing Section */}
                <section id="pricing" className="py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50/50 to-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-800">
                                Simple, Transparent <span className="text-blue-600">Pricing</span>
                            </h2>
                            <p className="text-gray-600 text-lg">
                                Choose the plan that fits your needs
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                            {/* Starter Plan */}
                            <Card className="bg-white border-gray-200 p-8">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Starter</h3>
                                <div className="text-4xl font-bold mb-4 text-gray-800">$29<span className="text-lg text-gray-600">/mo</span></div>
                                <ul className="space-y-3 mb-8">
                                    {["5 Courses", "100 Students", "Basic Analytics", "PayPal Payments", "Email Support"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="bg-white w-full border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-800">Get Started</Button>
                            </Card>

                            {/* Pro Plan */}
                            <Card className="bg-blue-50 border-blue-300 p-8 relative">
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                                    Most Popular
                                </div>
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Pro</h3>
                                <div className="text-4xl font-bold mb-4 text-gray-800">$79<span className="text-lg text-gray-600">/mo</span></div>
                                <ul className="space-y-3 mb-8">
                                    {["Unlimited Courses", "1,000 Students", "Advanced Analytics", "All Payment Gateways", "Priority Support", "Custom Branding"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                            </Card>

                            {/* Enterprise Plan */}
                            <Card className="bg-white border-gray-200 p-8">
                                <h3 className="text-xl font-bold mb-2 text-gray-800">Enterprise</h3>
                                <div className="text-4xl font-bold mb-4 text-gray-800">Custom</div>
                                <ul className="space-y-3 mb-8">
                                    {["Everything in Pro", "Unlimited Students", "White Label", "API Access", "Dedicated Support", "Custom Integrations"].map((item, i) => (
                                        <li key={i} className="flex items-center gap-2 text-gray-600">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button variant="outline" className="bg-white w-full border-gray-300 text-gray-600 hover:bg-gray-50 hover:text-gray-800">Contact Sales</Button>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section id="cta" className="py-20 lg:py-28">
                    <div className="mx-auto px-4 text-center">
                        <div className="relative">
                            <div className="relative bg-gray-50 rounded-3xl border border-gray-200 p-12 lg:p-16">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-800">
                                    Ready to Start <span className="text-blue-600">Teaching</span>?
                                </h2>
                                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
                                    Join thousands of educators who are already using CourseCraft LMS to create amazing learning experiences.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button size="lg" className="text-sm px-8 bg-blue-600 hover:bg-blue-700 text-white">
                                        Start Your Free Trial
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Button>
                                    <Button size="lg" variant="outline" className="bg-gray-100 text-sm px-8 border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-800">
                                        Contact Sales
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-gray-200 py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                            
                                <span className="text-xl font-bold text-gray-800">CourseCraft LMS</span>
                            </div>
                            <p className="text-gray-600 text-sm">
                                The most powerful and intuitive learning management system for modern educators.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-gray-800">Product</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li onClick={() => scrollToSection('features')} className="hover:text-blue-600 cursor-pointer transition-colors">Features</li>
                                <li onClick={() => scrollToSection('pricing')} className="hover:text-blue-600 cursor-pointer transition-colors">Pricing</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Integrations</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Updates</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-gray-800">Resources</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Documentation</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Tutorials</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Blog</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Community</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4 text-gray-800">Company</h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li onClick={() => handleHomePageSectionClick('about')} className="hover:text-blue-600 cursor-pointer transition-colors">About</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Careers</li>
                                <li onClick={() => handleHomePageSectionClick('contact')} className="hover:text-blue-600 cursor-pointer transition-colors">Contact</li>
                                <li className="hover:text-blue-600 cursor-pointer transition-colors">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-600 text-sm">
                            © 2026 CourseCraft LMS. All rights reserved. A product of Aazham Tech Labs.
                        </p>
                        <Link to="/" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
                            ← Back to Aazham Tech Labs
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default CoursecraftLMS;
