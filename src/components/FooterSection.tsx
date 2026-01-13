import { Facebook, Twitter, Linkedin, Instagram, Github, MapPin, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Link, useNavigate, useLocation } from "react-router-dom"

const FooterSection = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        if (isHomePage) {
            // If already on home page, scroll to section
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // If on another page, navigate to home with hash
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <footer className="bg-muted text-muted-foreground py-12 border-t border-border">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">
                <div className="col-span-1">
                    <h3 className="text-xl font-bold text-foreground mb-4">Aazham Tech Labs</h3>
                    <p className="mb-4">
                        Empowering businesses with innovative technology solutions. We build the future, today.
                    </p>
                    <div className="flex space-x-4">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-teal-600">
                            <Facebook className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-teal-600">
                            <Twitter className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-teal-600">
                            <Linkedin className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-teal-600">
                            <Instagram className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-teal-600">
                            <Github className="h-5 w-5" />
                        </Button>
                    </div>
                </div>

                <div>
                    <h4 className="font-bold text-foreground mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/#about" onClick={(e) => handleSectionClick(e, 'about')} className="hover:text-teal-600 transition-colors cursor-pointer">About Us</a></li>
                        <li><a href="/#services" onClick={(e) => handleSectionClick(e, 'services')} className="hover:text-teal-600 transition-colors cursor-pointer">Services</a></li>
                        <li><a href="#" className="hover:text-teal-600 transition-colors">Careers</a></li>
                        <li><a href="#" className="hover:text-teal-600 transition-colors">Blog</a></li>
                        <li><a href="/#contact" onClick={(e) => handleSectionClick(e, 'contact')} className="hover:text-teal-600 transition-colors cursor-pointer">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-foreground mb-4">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-teal-600 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-teal-600 transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-teal-600 transition-colors">Cookie Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-foreground mb-4">Contact Us</h4>
                    <div className="space-y-4 text-sm">
                        <div className="flex items-start gap-3">
                            <MapPin className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <p>123 Innovation Drive,</p>
                                <p>Tech Park, Phase 1,</p>
                                <p>Chennai, Tamil Nadu 600001</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Phone className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <p>+91 98765 43210</p>
                                <p className="text-xs mt-0.5">Mon-Fri 9:00 AM - 6:00 PM IST</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <Mail className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <p>hello@aazhamtech.com</p>
                                <p className="text-xs mt-0.5">We'll respond within 24 hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-border mt-12 pt-8 text-center text-sm">
                &copy; {new Date().getFullYear()} Aazham Tech Labs. All rights reserved.
            </div>
        </footer>
    )
}

export default FooterSection;