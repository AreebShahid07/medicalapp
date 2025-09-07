import React, { useState, useEffect } from "react";
import { 
    Brain, Activity, Eye, Stethoscope, Microscope, MessageCircle, 
    Sparkles, Shield, Zap, Award, Users, Globe, Target,
    ArrowLeft, ChevronRight, Star, TrendingUp, Heart,
    CheckCircle, Clock, Atom, Lightbulb, Rocket, Calendar
} from "lucide-react";

export default function AboutPage() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentMilestone, setCurrentMilestone] = useState(0);

    useEffect(() => {
        setIsLoaded(true);
        
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        
        window.addEventListener('mousemove', handleMouseMove);
        
        // Timeline animation
        const interval = setInterval(() => {
            setCurrentMilestone(prev => (prev + 1) % milestones.length);
        }, 3000);
        
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(interval);
        };
    }, []);

    const stats = [
        { label: 'Accuracy Rate', value: '99.2%', icon: Award, color: 'text-blue-400' },
        { label: 'Cases Analyzed', value: '2.1M+', icon: TrendingUp, color: 'text-green-400' },
        { label: 'Medical Centers', value: '500+', icon: Users, color: 'text-purple-400' },
        { label: 'Countries', value: '50+', icon: Globe, color: 'text-pink-400' }
    ];

    const features = [
        {
            icon: Atom,
            title: 'Quantum AI Engine',
            description: 'Revolutionary quantum-enhanced neural networks trained on millions of medical cases for unprecedented accuracy.',
            color: 'from-purple-400 to-pink-500'
        },
        {
            icon: Shield,
            title: 'HIPAA Compliant',
            description: 'Military-grade encryption with zero data retention policy ensures complete patient privacy and security.',
            color: 'from-green-400 to-emerald-500'
        },
        {
            icon: Zap,
            title: 'Lightning Fast',
            description: 'AI analysis completed in under 30 seconds with real-time processing and instant results delivery.',
            color: 'from-yellow-400 to-orange-500'
        },
        {
            icon: Brain,
            title: 'Deep Learning',
            description: 'Advanced convolutional neural networks specifically designed for medical imaging and diagnostic analysis.',
            color: 'from-blue-400 to-cyan-500'
        },
        {
            icon: Heart,
            title: 'Patient-Centric',
            description: 'Designed with patient care at the forefront, improving outcomes through early detection and precise diagnosis.',
            color: 'from-red-400 to-pink-500'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Serving healthcare providers worldwide with multilingual support and region-specific medical protocols.',
            color: 'from-teal-400 to-blue-500'
        }
    ];

    const team = [
        {
            name: 'Dr. Sarah Chen',
            role: 'Chief Medical Officer',
            specialty: 'Radiology & AI Ethics',
            image: 'SC',
            background: 'from-blue-500 to-purple-500'
        },
        {
            name: 'Dr. Michael Rodriguez',
            role: 'Head of AI Research',
            specialty: 'Machine Learning & Oncology',
            image: 'MR',
            background: 'from-green-500 to-teal-500'
        },
        {
            name: 'Dr. Emily Watson',
            role: 'Clinical Director',
            specialty: 'Dermatology & Pathology',
            image: 'EW',
            background: 'from-pink-500 to-red-500'
        },
        {
            name: 'Dr. James Liu',
            role: 'Technology Director',
            specialty: 'Computer Vision & AI',
            image: 'JL',
            background: 'from-indigo-500 to-purple-500'
        }
    ];

    const milestones = [
        { year: '2020', title: 'Founded', description: 'MedicalAI established with quantum computing research' },
        { year: '2021', title: 'First AI Model', description: 'Brain tumor detection algorithm achieved 95% accuracy' },
        { year: '2022', title: 'FDA Approval', description: 'Received FDA clearance for medical imaging analysis' },
        { year: '2023', title: 'Global Expansion', description: 'Launched in 25+ countries with HIPAA compliance' },
        { year: '2024', title: 'Quantum Breakthrough', description: 'Achieved 99%+ accuracy with quantum-enhanced AI' },
        { year: '2025', title: 'Future Vision', description: 'Leading the AI medical revolution worldwide' }
    ];

    const diagnosticServices = [
        { title: 'Brain Tumor Detection', icon: Brain, accuracy: '98.7%' },
        { title: 'Pneumonia Detection', icon: Activity, accuracy: '97.3%' },
        { title: 'Retinal Disease Detection', icon: Eye, accuracy: '99.1%' },
        { title: 'Skin Disease Analysis', icon: Stethoscope, accuracy: '96.8%' },
        { title: 'Cancer Detection', icon: Microscope, accuracy: '95.4%' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
            {/* Dynamic Background */}
            <div 
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15), transparent 50%)`
                }}
            />
            
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            {/* Floating Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                   
                    <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6 mt-10">
                        REVOLUTIONIZING
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                            HEALTHCARE
                        </span>
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        We're pioneering the future of medical diagnostics with quantum-enhanced artificial intelligence, 
                        delivering unprecedented accuracy and speed to healthcare providers worldwide.
                    </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div 
                                key={index}
                                className={`text-center p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-105 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${index * 200}ms` }}
                            >
                                <Icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Mission Statement */}
                <div className="max-w-4xl mx-auto mb-20">
                    <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-12 shadow-2xl">
                        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6 text-center">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed text-center mb-8">
                            To democratize access to world-class medical diagnostics through AI technology, ensuring every patient 
                            receives accurate, timely diagnosis regardless of geographic location or economic status.
                        </p>
                        <div className="flex justify-center">
                            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600/30 to-cyan-600/30 backdrop-blur-xl rounded-full border border-white/20">
                                <Target className="w-5 h-5 mr-2 text-teal-400" />
                                <span className="text-white font-semibold">Saving Lives Through Technology</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-center mb-12">
                        What Makes Us Different
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div 
                                    key={index}
                                    className={`p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-105 transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 150}ms` }}
                                >
                                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 hover:scale-110 hover:rotate-6 transition-all duration-500`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Timeline */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-center mb-12">
                        Our Journey
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400 rounded-full" />
                            
                            {milestones.map((milestone, index) => (
                                <div 
                                    key={index}
                                    className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-right' : 'pr-8'}`}>
                                        <div className={`p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl ${currentMilestone === index ? 'ring-2 ring-blue-400 shadow-blue-500/20' : ''} transition-all duration-500`}>
                                            <div className="text-2xl font-bold text-blue-400 mb-2">{milestone.year}</div>
                                            <div className="text-lg font-semibold text-white mb-2">{milestone.title}</div>
                                            <div className="text-gray-300 text-sm">{milestone.description}</div>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline Node */}
                                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-black ${currentMilestone === index ? 'scale-150 shadow-lg shadow-blue-500/50' : ''} transition-all duration-500`} />
                                    
                                    <div className="w-1/2" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-center mb-12">
                        Meet Our Team
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <div 
                                key={index}
                                className="text-center p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-105 transition-all duration-700"
                            >
                                <div className={`w-20 h-20 bg-gradient-to-r ${member.background} rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white`}>
                                    {member.image}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                <div className="text-blue-400 font-semibold mb-2">{member.role}</div>
                                <div className="text-gray-400 text-sm">{member.specialty}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Services Overview */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-center mb-12">
                        AI Diagnostic Services
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {diagnosticServices.map((service, index) => {
                            const Icon = service.icon;
                            return (
                                <div 
                                    key={index}
                                    className="p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl hover:shadow-blue-500/20 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
                                >
                                    <Icon className="w-8 h-8 text-blue-400 mb-4" />
                                    <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-300 text-sm">Accuracy:</span>
                                        <span className="text-green-400 font-bold">{service.accuracy}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <div className="inline-block p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl">
                        <div className="bg-black rounded-3xl px-12 py-8">
                            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                                Ready to Experience the Future?
                            </h3>
                            <p className="text-gray-300 mb-6">Join thousands of healthcare professionals using our AI platform</p>
                            <button 
                                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                                onClick={() => window.location.href = '/brain'}
                            >
                                Start Free Trial
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}