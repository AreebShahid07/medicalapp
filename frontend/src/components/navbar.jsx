import React, { useState, useEffect } from "react";
import { Brain, Activity, Eye, Stethoscope, Microscope, MessageCircle, MapPin, Home, Menu, X, Sparkles, Shield, Zap, User, Settings, LogOut } from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const diagnosticServices = [
        {
            id: 'brain',
            title: 'Brain Tumor Detection',
            description: 'Advanced MRI scan analysis',
            icon: Brain,
            gradient: 'from-purple-500 to-indigo-600',
            route: '/brain'
        },
        {
            id: 'chest',
            title: 'Pneumonia Detection',
            description: 'Chest X-ray analysis',
            icon: Activity,
            gradient: 'from-blue-500 to-cyan-600',
            route: '/chest'
        },
        {
            id: 'eye',
            title: 'Retinal Disease Detection',
            description: 'Advanced eye scan analysis',
            icon: Eye,
            gradient: 'from-emerald-500 to-green-600',
            route: '/eye'
        },
        {
            id: 'skin',
            title: 'Skin Disease Analysis',
            description: 'Dermatological condition ID',
            icon: Stethoscope,
            gradient: 'from-pink-500 to-rose-600',
            route: '/skin'
        },
        {
            id: 'cancer',
            title: 'Cancer Detection',
            description: 'Tissue analysis for cancer',
            icon: Microscope,
            gradient: 'from-red-500 to-orange-600',
            route: '/cancer'
        }
    ];

    const aiServices = [
        {
            id: 'chatbot',
            title: 'AI Medical Assistant',
            description: 'Get instant medical guidance',
            icon: MessageCircle,
            gradient: 'from-teal-500 to-cyan-600',
            route: '/chatbot'
        },
        {
            id: 'hospital',
            title: 'Hospital Finder',
            description: 'Find specialized hospitals',
            icon: MapPin,
            gradient: 'from-amber-500 to-yellow-600',
            route: '/hospital'
        }
    ];

    const handleNavigation = (route) => {
        window.location.href = route;
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <>
            {/* Dynamic Background Overlay for Dropdowns */}
            {activeDropdown && (
                <div 
                    className="fixed inset-0 z-40 opacity-20"
                    style={{
                        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15), transparent 50%)`
                    }}
                />
            )}

            {/* Main Navbar */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                isScrolled 
                    ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl' 
                    : 'bg-transparent'
            }`}>
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        
                        {/* Logo Section */}
                        <div 
                            onClick={() => handleNavigation('/')}
                            className="flex items-center cursor-pointer group"
                        >
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <div className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                                    MedicalAI
                                </div>
                                <div className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold -mt-1">
                                    QUANTUM DIAGNOSTICS
                                </div>
                            </div>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-8">
                            
                            {/* Home Link */}
                            <button
                                onClick={() => handleNavigation('/')}
                                className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-xl"
                            >
                                <Home className="w-4 h-4 mr-2" />
                                Dashboard
                            </button>

                            {/* Diagnostic Services Dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setActiveDropdown('diagnostic')}
                                    className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-xl"
                                >
                                    <Zap className="w-4 h-4 mr-2" />
                                    AI Diagnostics
                                </button>
                                
                                {activeDropdown === 'diagnostic' && (
                                    <div 
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-300"
                                    >
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                                <Sparkles className="w-5 h-5 mr-2 text-blue-400" />
                                                AI Diagnostic Tools
                                            </h3>
                                            <div className="space-y-3">
                                                {diagnosticServices.map((service) => {
                                                    const Icon = service.icon;
                                                    return (
                                                        <button
                                                            key={service.id}
                                                            onClick={() => handleNavigation(service.route)}
                                                            className="w-full flex items-center p-4 hover:bg-white/10 rounded-2xl transition-all duration-300 group"
                                                        >
                                                            <div className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                                                                <Icon className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div className="text-left">
                                                                <div className="text-white font-semibold">{service.title}</div>
                                                                <div className="text-gray-400 text-sm">{service.description}</div>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* AI Services Dropdown */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setActiveDropdown('ai')}
                                    className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-xl"
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    AI Services
                                </button>
                                
                                {activeDropdown === 'ai' && (
                                    <div 
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-300"
                                    >
                                        <div className="p-6">
                                            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                                                <Sparkles className="w-5 h-5 mr-2 text-teal-400" />
                                                AI-Powered Services
                                            </h3>
                                            <div className="space-y-3">
                                                {aiServices.map((service) => {
                                                    const Icon = service.icon;
                                                    return (
                                                        <button
                                                            key={service.id}
                                                            onClick={() => handleNavigation(service.route)}
                                                            className="w-full flex items-center p-4 hover:bg-white/10 rounded-2xl transition-all duration-300 group"
                                                        >
                                                            <div className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                                                                <Icon className="w-5 h-5 text-white" />
                                                            </div>
                                                            <div className="text-left">
                                                                <div className="text-white font-semibold">{service.title}</div>
                                                                <div className="text-gray-400 text-sm">{service.description}</div>
                                                            </div>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* About Link */}
                            <button
                                onClick={() => handleNavigation('/about')}
                                className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-xl"
                            >
                                About
                            </button>

                            {/* Contact Link */}
                            <button
                                onClick={() => handleNavigation('/contact')}
                                className="flex items-center px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 hover:bg-white/10 rounded-xl"
                            >
                                Contact
                            </button>
                        </div>

                        {/* Right Section */}
                        <div className="hidden lg:flex items-center space-x-4">
                            {/* Security Badge */}
                            <div className="flex items-center px-3 py-2 bg-green-500/20 border border-green-500/30 rounded-full">
                                <Shield className="w-4 h-4 text-green-400 mr-2" />
                                <span className="text-green-400 text-sm font-semibold">HIPAA Secure</span>
                            </div>

                            {/* User Menu */}
                            <div className="relative">
                                <button
                                    onMouseEnter={() => setActiveDropdown('user')}
                                    className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300"
                                >
                                    <User className="w-5 h-5 text-white" />
                                </button>
                                
                                {activeDropdown === 'user' && (
                                    <div 
                                        onMouseLeave={() => setActiveDropdown(null)}
                                        className="absolute top-full right-0 mt-2 w-56 bg-black/90 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-2 duration-300"
                                    >
                                        <div className="p-4">
                                            <div className="flex items-center mb-4 pb-4 border-b border-white/10">
                                                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                                                    <User className="w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-semibold">Medical User</div>
                                                    <div className="text-gray-400 text-sm">Premium Account</div>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <button className="w-full flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300">
                                                    <Settings className="w-4 h-4 mr-3" />
                                                    Settings
                                                </button>
                                                <button className="w-full flex items-center px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300">
                                                    <LogOut className="w-4 h-4 mr-3" />
                                                    Sign Out
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden p-2 text-gray-300 hover:text-white transition-all duration-300"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 lg:hidden">
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
                    <div className="fixed top-0 right-0 bottom-0 w-80 bg-black/95 backdrop-blur-2xl border-l border-white/20 shadow-2xl">
                        <div className="p-6 pt-24">
                            {/* Mobile Logo */}
                            <div className="flex items-center mb-8 pb-6 border-b border-white/10">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-3">
                                    <Sparkles className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xl font-black text-white">MedicalAI</div>
                                    <div className="text-xs text-blue-400">QUANTUM DIAGNOSTICS</div>
                                </div>
                            </div>

                            {/* Mobile Navigation */}
                            <div className="space-y-4">
                                <button
                                    onClick={() => handleNavigation('/')}
                                    className="w-full flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                                >
                                    <Home className="w-5 h-5 mr-3" />
                                    Dashboard
                                </button>

                                {/* Mobile Diagnostic Services */}
                                <div className="space-y-2">
                                    <div className="text-white font-semibold mb-3 flex items-center">
                                        <Zap className="w-4 h-4 mr-2 text-blue-400" />
                                        AI Diagnostics
                                    </div>
                                    {diagnosticServices.map((service) => {
                                        const Icon = service.icon;
                                        return (
                                            <button
                                                key={service.id}
                                                onClick={() => handleNavigation(service.route)}
                                                className="w-full flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                                            >
                                                <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mr-3`}>
                                                    <Icon className="w-4 h-4 text-white" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-medium">{service.title}</div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Mobile AI Services */}
                                <div className="space-y-2 pt-4 border-t border-white/10">
                                    <div className="text-white font-semibold mb-3 flex items-center">
                                        <MessageCircle className="w-4 h-4 mr-2 text-teal-400" />
                                        AI Services
                                    </div>
                                    {aiServices.map((service) => {
                                        const Icon = service.icon;
                                        return (
                                            <button
                                                key={service.id}
                                                onClick={() => handleNavigation(service.route)}
                                                className="w-full flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                                            >
                                                <div className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center mr-3`}>
                                                    <Icon className="w-4 h-4 text-white" />
                                                </div>
                                                <div className="text-left">
                                                    <div className="font-medium">{service.title}</div>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Mobile Other Links */}
                                <div className="pt-4 border-t border-white/10 space-y-2">
                                    <button
                                        onClick={() => handleNavigation('/about')}
                                        className="w-full flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                                    >
                                        About
                                    </button>
                                    <button
                                        onClick={() => handleNavigation('/contact')}
                                        className="w-full flex items-center px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-300"
                                    >
                                        Contact
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Security Badge */}
                            <div className="mt-8 flex items-center justify-center px-4 py-3 bg-green-500/20 border border-green-500/30 rounded-xl">
                                <Shield className="w-4 h-4 text-green-400 mr-2" />
                                <span className="text-green-400 font-semibold">HIPAA Secure Platform</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}