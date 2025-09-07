import React, { useState, useEffect } from "react";
import { 
    Brain, Activity, Eye, Stethoscope, Microscope, MessageCircle, MapPin, 
    Sparkles, Shield, Zap, Mail, Phone, MapPin as Location, 
    Twitter, Facebook, Linkedin, Instagram, Youtube, 
    ArrowUp, Heart, Award, Users, Globe,
    ChevronRight, Star, Clock, CheckCircle
} from "lucide-react";

export default function Footer() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleScroll = () => {
            const scrolled = window.scrollY;
            setIsVisible(scrolled > 200);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const diagnosticServices = [
        { title: 'Brain Tumor Detection', icon: Brain, route: '/brain' },
        { title: 'Pneumonia Detection', icon: Activity, route: '/chest' },
        { title: 'Retinal Disease Detection', icon: Eye, route: '/eye' },
        { title: 'Skin Disease Analysis', icon: Stethoscope, route: '/skin' },
        { title: 'Cancer Detection', icon: Microscope, route: '/cancer' }
    ];

    const aiServices = [
        { title: 'AI Medical Assistant', icon: MessageCircle, route: '/chatbot' },
        { title: 'Hospital Finder', icon: MapPin, route: '/hospital' }
    ];

    const companyLinks = [
        { title: 'About Us', route: '/about' },
        { title: 'Our Team', route: '/team' },
        { title: 'Careers', route: '/careers' },
        { title: 'News & Press', route: '/news' },
        { title: 'Partnerships', route: '/partners' }
    ];

    const supportLinks = [
        { title: 'Help Center', route: '/help' },
        { title: 'Documentation', route: '/docs' },
        { title: 'API Reference', route: '/api' },
        { title: 'System Status', route: '/status' },
        { title: 'Contact Support', route: '/support' }
    ];

    const legalLinks = [
        { title: 'Privacy Policy', route: '/privacy' },
        { title: 'Terms of Service', route: '/terms' },
        { title: 'Medical Disclaimer', route: '/disclaimer' },
        { title: 'HIPAA Compliance', route: '/hipaa' },
        { title: 'Cookie Policy', route: '/cookies' }
    ];

    const socialLinks = [
        { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
        { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-500' },
        { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
        { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:text-red-500' }
    ];

    const certifications = [
        { icon: Shield, title: 'HIPAA Compliant', subtitle: 'Healthcare Data Protection' },
        { icon: Award, title: 'ISO 27001 Certified', subtitle: 'Information Security' },
        { icon: CheckCircle, title: 'FDA Approved', subtitle: 'Medical Device Classification' },
        { icon: Globe, title: 'GDPR Compliant', subtitle: 'EU Data Protection' }
    ];

    const handleNavigation = (route) => {
        window.location.href = route;
    };
return (
        <>
            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-110 transition-all duration-500"
                >
                    <ArrowUp className="w-5 h-5 text-white" />
                </button>
            )}

            {/* Footer */}
            <footer className="relative bg-black text-white overflow-hidden">
                {/* Dynamic Background */}
                <div 
                    className="absolute inset-0 opacity-20"
                    style={{
                        background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1), transparent 50%)`
                    }}
                />
                
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
                
                {/* Floating Orbs */}
                <div className="absolute inset-0">
                    <div className="absolute top-20 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
                </div>

                <div className="relative z-10">
                    {/* Newsletter Section */}
                    <div className="border-b border-white/10">
                        <div className="container mx-auto px-6 py-16">
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl mb-8">
                                    <Sparkles className="w-5 h-5 mr-3 text-blue-400" />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                                        Stay Updated with Medical AI
                                    </span>
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
                                    JOIN THE REVOLUTION
                                </h2>
                                
                                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                                    Get the latest updates on AI medical breakthroughs, new diagnostic tools, and exclusive access to beta features.
                                </p>
                                
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                                    <div className="relative flex-1 w-full">
                                        <input
                                            type="email"
                                            placeholder="Enter your email address"
                                            className="w-full px-6 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                                        />
                                        <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                    <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300 whitespace-nowrap">
                                        Subscribe Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Footer Content */}
                    <div className="container mx-auto px-6 py-16">
                        <div className="grid lg:grid-cols-5 gap-12">
                            
                            {/* Company Info */}
                            <div className="lg:col-span-2">
                                <div className="flex items-center mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4">
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
                                
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Revolutionizing healthcare with quantum-enhanced AI diagnostics. Our cutting-edge platform delivers 99%+ accuracy in medical imaging analysis, helping doctors make faster, more precise diagnoses.
                                </p>
                                
                                <div className="flex items-center space-x-6 mb-6">
                                    {socialLinks.map((social, index) => {
                                        const Icon = social.icon;
                                        return (
                                            <a
                                                key={index}
                                                href={social.href}
                                                aria-label={social.label}
                                                className={`w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 hover:bg-white/20 transition-all duration-300`}
                                            >
                                                <Icon className="w-5 h-5" />
                                            </a>
                                        );
                                    })}
                                </div>

                                {/* Contact Info */}
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-300">
                                        <Mail className="w-4 h-4 mr-3 text-blue-400" />
                                        contact@medicalai.com
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <Phone className="w-4 h-4 mr-3 text-green-400" />
                                        +1 (555) 123-4567
                                    </div>
                                    <div className="flex items-center text-gray-300">
                                        <Location className="w-4 h-4 mr-3 text-pink-400" />
                                        San Francisco, CA 94105
                                    </div>
                                </div>
                            </div>

                            {/* AI Diagnostics */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-6 flex items-center">
                                    <Zap className="w-5 h-5 mr-2 text-blue-400" />
                                    AI Diagnostics
                                </h3>
                                <ul className="space-y-3">
                                    {diagnosticServices.map((service, index) => {
                                        const Icon = service.icon;
                                        return (
                                            <li key={index}>
                                                <button
                                                    onClick={() => handleNavigation(service.route)}
                                                    className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                                                >
                                                    <Icon className="w-4 h-4 mr-2 text-gray-500 group-hover:text-blue-400 transition-colors" />
                                                    {service.title}
                                                    <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <h4 className="text-md font-semibold text-white mt-8 mb-4 flex items-center">
                                    <MessageCircle className="w-4 h-4 mr-2 text-teal-400" />
                                    AI Services
                                </h4>
                                <ul className="space-y-3">
                                    {aiServices.map((service, index) => {
                                        const Icon = service.icon;
                                        return (
                                            <li key={index}>
                                                <button
                                                    onClick={() => handleNavigation(service.route)}
                                                    className="flex items-center text-gray-300 hover:text-white transition-all duration-300 group"
                                                >
                                                    <Icon className="w-4 h-4 mr-2 text-gray-500 group-hover:text-teal-400 transition-colors" />
                                                    {service.title}
                                                    <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                                                </button>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-6">Company</h3>
                                <ul className="space-y-3">
                                    {companyLinks.map((link, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => handleNavigation(link.route)}
                                                className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                                            >
                                                {link.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <h4 className="text-md font-semibold text-white mt-8 mb-4">Support</h4>
                                <ul className="space-y-3">
                                    {supportLinks.map((link, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => handleNavigation(link.route)}
                                                className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                                            >
                                                {link.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h3 className="text-lg font-bold text-white mb-6">Legal & Privacy</h3>
                                <ul className="space-y-3">
                                    {legalLinks.map((link, index) => (
                                        <li key={index}>
                                            <button
                                                onClick={() => handleNavigation(link.route)}
                                                className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1"
                                            >
                                                {link.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Certifications Section */}
                    <div className="border-t border-white/10">
                        <div className="container mx-auto px-6 py-12">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-2">
                                    Trusted & Certified
                                </h3>
                                <p className="text-gray-400">Enterprise-grade security and compliance standards</p>
                            </div>
                            
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                                {certifications.map((cert, index) => {
                                    const Icon = cert.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 hover:bg-white/15 transition-all duration-300"
                                        >
                                            <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                                            <div className="text-white font-semibold text-sm mb-1">{cert.title}</div>
                                            <div className="text-gray-400 text-xs">{cert.subtitle}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/10">
                        <div className="container mx-auto px-6 py-8">
                            <div className="flex flex-col md:flex-row items-center justify-between">
                                <div className="flex items-center mb-4 md:mb-0">
                                    <div className="text-gray-400 text-sm">
                                        © 2025 MedicalAI. All rights reserved. 
                                        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                                            Powered by Quantum AI Technology
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                                        <span className="text-green-400 text-xs font-semibold">System Operational</span>
                                    </div>
                                    
                                    <div className="flex items-center text-gray-400 text-xs">
                                        <Clock className="w-3 h-3 mr-1" />
                                        Last updated: {new Date().toLocaleDateString()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}