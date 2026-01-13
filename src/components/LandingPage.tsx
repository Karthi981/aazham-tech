import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import ServicesSection from "./ServicesSection"
import AboutSection from "./AboutSection"
import TechStackSection from "./TechStackSection"
import FooterSection from "./FooterSection"
import CTASection from "./CTASection"
import HeroSection from "./HeroSection"
import ContactSection from "./ContactSection"
import Header from "./Header"

const LandingPage = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const location = useLocation();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    // Handle hash navigation when component mounts or location changes
    useEffect(() => {
        const hash = location.hash.replace('#', '');
        if (hash) {
            // Delay to ensure DOM is ready, especially when navigating from another page
            const timer = setTimeout(() => {
                scrollToSection(hash);
            }, 200);
            return () => clearTimeout(timer);
        }
    }, [location.hash, location.pathname]);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
            <Header 
                scrollToSection={scrollToSection}
                setIsProductsOpen={setIsProductsOpen}
                isProductsOpen={isProductsOpen}
                variant="landing"
            />

            <main className="flex-1 mt-16">
                {/* Hero Section */}
                <section className="relative w-full py-6 overflow-hidden bg-gradient-to-br from-background via-teal-950/5 to-cyan-950/10">
                    {/* Animated Background */}


                    {/* Floating Gradient Orbs */}
                    <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-cyan-400/15 to-teal-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>

                    <HeroSection />
                </section>

                <TechStackSection />
                <ServicesSection />

                {/* Mid-Page CTA */}
                <CTASection
                    title="Ready to Transform Your Business?"
                    description="Let's discuss how our tailored solutions can accelerate your growth and drive measurable results."
                    primaryButtonText="Schedule Free Consultation"
                    primaryButtonAction={() => scrollToSection('contact')}
                    image1="/assets/images/cta_person_one_1767786038267.png"
                    image2="/assets/images/cta_person_two_1767786062109.png"
                    variant="light"
                />
                <AboutSection />
                <ContactSection />


            </main>

            <FooterSection />
        </div>
    )
}


export default LandingPage;