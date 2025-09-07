import { Brain, Activity, Eye, Stethoscope, Microscope, MessageCircle, MapPin, ChevronRight, Sparkles, Shield, Zap, Star, Users, Award, TrendingUp, Atom } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Testimonial rotation
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const diagnosticServices = [
    {
      id: 'brain',
      title: 'Brain Tumor Detection',
      description: 'Advanced MRI scan analysis using deep learning neural networks',
      icon: Brain,
      gradient: 'from-violet-500 via-purple-500 to-indigo-600',
      bgGradient: 'from-violet-50 to-purple-100',
      route: '/brain',
      accuracy: '98.7%',
      processingTime: '12s'
    },
    {
      id: 'chest',
      title: 'Pneumonia Detection',
      description: 'Chest X-ray analysis for respiratory conditions and diseases',
      icon: Activity,
      gradient: 'from-blue-500 via-cyan-500 to-teal-600',
      bgGradient: 'from-blue-50 to-cyan-100',
      route: '/chest',
      accuracy: '97.3%',
      processingTime: '8s'
    },
    {
      id: 'skin',
      title: 'Skin Disease Analysis',
      description: 'Dermatological condition identification and classification',
      icon: Stethoscope,
      gradient: 'from-pink-500 via-rose-500 to-red-600',
      bgGradient: 'from-pink-50 to-rose-100',
      route: '/skin',
      accuracy: '96.8%',
      processingTime: '6s'
    },
    {
      id: 'eye',
      title: 'Retinal Disease Detection',
      description: 'Advanced eye scan analysis for retinal disorders',
      icon: Eye,
      gradient: 'from-emerald-500 via-green-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-green-100',
      route: '/eye',
      accuracy: '99.1%',
      processingTime: '10s'
    },
    {
      id: 'cancer',
      title: 'Cancer Detection',
      description: 'Tissue analysis for lung and colon cancer screening',
      icon: Microscope,
      gradient: 'from-red-500 via-orange-500 to-amber-600',
      bgGradient: 'from-red-50 to-orange-100',
      route: '/cancer',
      accuracy: '95.4%',
      processingTime: '15s'
    },
    {
      id: 'chatbot',
      title: 'AI Medical Assistant',
      description: 'Get instant medical guidance and personalized recommendations',
      icon: MessageCircle,
      gradient: 'from-teal-500 via-cyan-500 to-blue-600',
      bgGradient: 'from-teal-50 to-cyan-100',
      route: '/chatbot',
      accuracy: '24/7',
      processingTime: '1s'
    },
    {
      id: 'hospital',
      title: 'Hospital Finder',
      description: 'Find specialized hospitals and clinics near your location',
      icon: MapPin,
      gradient: 'from-amber-500 via-yellow-500 to-orange-600',
      bgGradient: 'from-amber-50 to-yellow-100',
      route: '/hospital',
      accuracy: 'Live',
      processingTime: '3s'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'AI analysis in under 30 seconds with 99%+ accuracy rates',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Military-grade encryption with zero data retention policy',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Atom,
      title: 'Quantum AI',
      description: 'Next-generation neural networks trained on 10M+ cases',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Radiologist, Stanford Medical',
      content: 'This AI platform has revolutionized our diagnostic workflow. Accuracy is phenomenal.',
      rating: 5
    },
    {
      name: 'Dr. Michael Rodriguez',
      role: 'Oncology Director, Mayo Clinic',
      content: 'The cancer detection module caught cases we might have missed. Truly impressive.',
      rating: 5
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Dermatology Specialist, Johns Hopkins',
      content: 'Skin analysis results are incredibly precise. This is the future of medicine.',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Accuracy Rate', value: '99.2%', icon: Award },
    { label: 'Cases Analyzed', value: '2.1M+', icon: TrendingUp },
    { label: 'Medical Centers', value: '500+', icon: Users },
    { label: 'Countries', value: '50+', icon: Star }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
     
      {/* Dynamic Mouse-Following Gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15), transparent 50%)`
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-600/20 to-teal-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
      </div>

      {/* Hero Section */}
      <div className={`relative z-10 transition-all duration-1500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="container mx-auto px-6 py-20">
          
          {/* Top Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl rounded-full border border-white/10 shadow-2xl">
              <Sparkles className="w-5 h-5 mr-3 text-blue-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold">
                World's Most Advanced Medical AI Platform
              </span>
              <div className="ml-3 px-3 py-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full text-xs text-black font-bold">
                LIVE
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white">
                MEDICAL
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
                AI REVOLUTION
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Harness the power of quantum-enhanced artificial intelligence for instant medical diagnosis. 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-semibold"> 
                Transform healthcare with cutting-edge technology.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button 
                className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 overflow-hidden"
                onClick={() => window.location.href = '/brain'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                <span className="relative flex items-center">
                  Start AI Diagnosis
                  <Zap className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>
              
              <button 
                className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-2xl shadow-xl hover:bg-white/10 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
                onClick={() => window.location.href = '/about'}
              >
                Watch Demo
              </button>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index}
                  className={`text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`relative group p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-105 transition-all duration-700 overflow-hidden ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className={`relative w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="relative text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                    {feature.title}
                  </h3>
                  <p className="relative text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* AI Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
                AI DIAGNOSTIC SUITE
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Seven revolutionary AI models, each specialized for specific medical conditions
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {diagnosticServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div 
                    key={service.id}
                    onClick={() => window.location.href = service.route}
                    className={`group cursor-pointer relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-blue-500/30 transform hover:-translate-y-4 hover:scale-105 transition-all duration-700 overflow-hidden ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-all duration-700`} />
                    
                    {/* Icon with Glow */}
                    <div className={`relative w-16 h-16 bg-gradient-to-br ${service.bgGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                      <Icon className={`w-8 h-8 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                    </div>
                    
                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-500">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors">
                        {service.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="flex justify-between text-xs">
                        <span className="text-green-400 font-semibold">↗ {service.accuracy}</span>
                        <span className="text-blue-400 font-semibold">⚡ {service.processingTime}</span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="absolute top-6 right-6 w-5 h-5 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div className="relative mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4">
                TRUSTED BY WORLD-CLASS DOCTORS
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <blockquote className="text-2xl text-gray-300 italic mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  
                  <div>
                    <div className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
                
                {/* Testimonial Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial ? 'bg-blue-400 w-8' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl">
              <div className="bg-black rounded-3xl px-12 py-8">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
                  Ready to Experience the Future?
                </h3>
                <p className="text-gray-300 mb-6">Join thousands of medical professionals already using our AI platform</p>
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
    </div>
  );
}