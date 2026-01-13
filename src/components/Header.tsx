import React from 'react'
import { Button } from './ui/button';
import { BookOpen, ChevronDown } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

interface HeaderProps {
    scrollToSection?: (id: string) => void;
    setIsProductsOpen: (open: boolean) => void;
    isProductsOpen: boolean;
    variant?: 'landing' | 'product';
}

const Header = ({ scrollToSection, setIsProductsOpen, isProductsOpen, variant = 'landing' }: HeaderProps) => {
    const navigate = useNavigate();
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const handleLogoClick = () => {
        if (variant === 'product') {
            window.location.href = '/';
        } else {
            window.scrollTo(0, 0);
        }
    };

    const handleSectionClick = (sectionId: string) => {
        if (isHomePage) {
            // If already on home page, just scroll
            scrollToSection?.(sectionId);
        } else {
            // If on another page, navigate to home with hash
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <header className={`fixed top-0 w-full z-50 ${variant === 'product' ? 'bg-white border-gray-200' : 'bg-background/80'} backdrop-blur-md border-b border-border`}>
            <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
                {variant === 'product' ? (
                    <Link to="/" className="text-gray-600 hover:text-gray-800 text-xl font-bold tracking-tighter cursor-pointer">
                        Aazham Tech Labs
                    </Link>
                ) : (
                    <div className="text-xl font-bold tracking-tighter cursor-pointer" onClick={handleLogoClick}>
                        Aazham Tech Labs
                    </div>
                )}
                <nav className="hidden md:flex space-x-1 items-center">
                    {variant === 'landing' ? (
                        <>
                            <Link to="/" className='text-gray-100 px-2 py-1 rounded-sm bg-none hover:bg-gray-800'>Home</Link>

                            {/* Products Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsProductsOpen(true)}
                                onMouseLeave={() => setIsProductsOpen(false)}
                            >
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-1"
                                >
                                    Products
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                                </Button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 mt-1 w-72 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl shadow-black/20 overflow-hidden transition-all duration-300 ${isProductsOpen
                                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                                        : 'opacity-0 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="p-2">
                                        <Link
                                            to="/products/coursecraft-lms"
                                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/10 transition-colors group"
                                        >
                                            <div>
                                                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                                                    Coursecraft LMS
                                                </div>
                                                <div className="text-sm text-muted-foreground">
                                                    Build & sell online courses
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="border-t border-border p-2">
                                        <div className="text-xs text-muted-foreground px-3 py-2">
                                            More products coming soon...
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button variant="ghost" onClick={() => handleSectionClick('services')}>Services</Button>
                            <Button variant="ghost" onClick={() => handleSectionClick('about')}>About</Button>
                            <Button variant="ghost" onClick={() => handleSectionClick('contact')}>Contact</Button>
                        </>
                    ) : (
                        <>
                            <Link to="/">
                                <Button className='text-gray-600 bg-none hover:bg-gray-100 hover:text-gray-800' variant="ghost">Home</Button>
                            </Link>

                            {/* Products Dropdown */}
                            <div
                                className="relative"
                                onMouseEnter={() => setIsProductsOpen(true)}
                                onMouseLeave={() => setIsProductsOpen(false)}
                            >
                                <Button
                                    variant="ghost"
                                    className="flex items-center gap-1 text-gray-600 bg-none hover:bg-gray-100 hover:text-gray-800"
                                >
                                    Products
                                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
                                </Button>

                                {/* Dropdown Menu */}
                                <div
                                    className={`absolute top-full left-0 mt-1 w-72 bg-white/95 backdrop-blur-xl border border-gray-200 border-border rounded-xl shadow-2xl shadow-black/20 overflow-hidden transition-all duration-300 ${isProductsOpen
                                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                                        : 'opacity-0 -translate-y-2 pointer-events-none'
                                        }`}
                                >
                                    <div className="p-2">
                                        <Link
                                            to="/products/coursecraft-lms"
                                            className="flex items-start gap-3 p-3 rounded-lg"
                                        >
                                            <div>
                                                <div className="font-semibold text-gray-600">
                                                    Coursecraft LMS
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    Build & sell online courses
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="border-t border-gray-200 border-border p-2">
                                        <div className="text-xs text-muted-foreground px-3 py-2">
                                            More products coming soon...
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Button className='text-gray-600 bg-none hover:bg-gray-100 hover:text-gray-800' variant="ghost" onClick={() => scrollToSection?.('features')}>Features</Button>
                            <Button className='text-gray-600 bg-none hover:bg-gray-100 hover:text-gray-800' variant="ghost" onClick={() => scrollToSection?.('pricing')}>Pricing</Button>
                        </>
                    )}
                </nav>
                <div className="flex gap-2">
                    {variant === 'landing' ? (
                        <Link to="/book-meeting">
                            <Button>Book a Meeting</Button>
                        </Link>
                    ) : (
                        <>
                            
                            <Button onClick={() => scrollToSection?.('cta')}>Get Started</Button>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;