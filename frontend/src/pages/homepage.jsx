import {
  Brain,
  Activity,
  Eye,
  Stethoscope,
  Microscope,
  MessageCircle,
  MapPin,
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
  Star,
  Users,
  Award,
  TrendingUp,
  Atom,
  ChevronLeft,
} from "lucide-react";
import { useState, useEffect } from "react";
import ParticlesBackground from "../components/ParticlesBackground.jsx";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Testimonial rotation
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  const diagnosticServices = [
    {
      id: "brain",
      title: "Brain Tumor Detection",
      description:
        "Advanced MRI scan analysis using deep learning neural networks",
      icon: Brain,
      color: "#6366f1", // Indigo
      bgColor: "#f0f9ff", // Light blue background
      route: "/brain",
      accuracy: "98.7%",
      processingTime: "12s",
    },
    {
      id: "chest",
      title: "Pneumonia Detection",
      description:
        "Chest X-ray analysis for respiratory conditions and diseases",
      icon: Activity,
      color: "#0ea5e9", // Sky blue
      bgColor: "#f0f9ff",
      route: "/chest",
      accuracy: "97.3%",
      processingTime: "8s",
    },
    {
      id: "skin",
      title: "Skin Disease Analysis",
      description: "Dermatological condition identification and classification",
      icon: Stethoscope,
      color: "#e11d48", // Rose
      bgColor: "#fdf2f8",
      route: "/skin",
      accuracy: "96.8%",
      processingTime: "6s",
    },
    {
      id: "eye",
      title: "Retinal Disease Detection",
      description: "Advanced eye scan analysis for retinal disorders",
      icon: Eye,
      color: "#059669", // Emerald
      bgColor: "#ecfdf5",
      route: "/eye",
      accuracy: "99.1%",
      processingTime: "10s",
    },
    {
      id: "cancer",
      title: "Cancer Detection",
      description: "Tissue analysis for lung and colon cancer screening",
      icon: Microscope,
      color: "#dc2626", // Red
      bgColor: "#fef2f2",
      route: "/cancer",
      accuracy: "95.4%",
      processingTime: "15s",
    },
    {
      id: "chatbot",
      title: "AI Medical Assistant",
      description:
        "Get instant medical guidance and personalized recommendations",
      icon: MessageCircle,
      color: "#0891b2", // Cyan
      bgColor: "#ecfeff",
      route: "/chatbot",
      accuracy: "24/7",
      processingTime: "1s",
    },
    {
      id: "hospital",
      title: "Hospital Finder",
      description: "Find specialized hospitals and clinics near your location",
      icon: MapPin,
      color: "#d97706", // Amber
      bgColor: "#fffbeb",
      route: "/hospital",
      accuracy: "Live",
      processingTime: "3s",
    },
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "AI analysis in under 30 seconds with 99%+ accuracy rates",
      color: "#f59e0b", // Yellow
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Enterprise-grade protection for sensitive medical data.",
      color: "#10b981", // Green
    },
    {
      icon: Atom,
      title: "Quantum AI",
      description: "AI trained on millions of real-world medical records.",
      color: "#8b5cf6", // Violet
    },
  ];

  const testimonials = [
    {
      name: "Dr. Ayesha Khan",
      role: "Consultant Radiologist, Allied Hospital, Faisalabad",
      content:
        "This AI diagnostic suite has greatly improved the speed and reliability of our MRI reporting. It saves precious time in critical cases.",
      rating: 5,
    },
    {
      name: "Dr. Imran Malik",
      role: "Oncologist, Shaukat Khanum Memorial Hospital",
      content:
        "The cancer detection system is remarkably accurate. It helps us identify cases at an earlier stage, which is life-saving for patients.",
      rating: 5,
    },
    {
      name: "Dr. Sara Ahmed",
      role: "Dermatologist, Jinnah Hospital Lahore",
      content:
        "AI-powered skin analysis is very useful in daily practice. The precision is outstanding and assists in faster patient care.",
      rating: 5,
    },
  ];

  const stats = [
    { label: "Accuracy Rate", value: "99.2%", icon: Award },
    { label: "Cases Analyzed", value: "2.1K+", icon: TrendingUp },
    { label: "Online Users", value: "500+", icon: Users },
    { label: "Countries", value: "50+", icon: Star },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Subtle Background Pattern */}
      <ParticlesBackground />

      {/* Subtle mouse-follow effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.1), transparent 50%)`,
        }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Hero Section */}
      <div
        className={`relative z-10 transition-all duration-1500 transform ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-20">
          {/* Top Badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-slate-800/80 backdrop-blur-xl rounded-full border border-slate-700 shadow-2xl">
              <Sparkles className="w-5 h-5 mr-3 text-[#00ffaa]" />
              <span className="text-[#00ffaa] font-semibold">
                World's Most Advanced Medical AI Platform
              </span>
              <div className="ml-3 px-3 py-1 bg-emerald-500 rounded-full text-xs text-white font-bold">
                LIVE
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none mb-8">
              <span className="block text-white">
                MEDICAL
              </span>
             <span className="block text-[#8b5cf6]">
  AI REVOLUTION
</span>

            </h1>

            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Harness the power of quantum-enhanced artificial intelligence for
              instant medical diagnosis.
              <span className="text-yellow-400 font-semibold">
                {" "}Transform healthcare with cutting-edge technology.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button
                className="group relative px-10 py-5 bg-rose-500 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-2xl transform hover:-translate-y-2 hover:scale-105 transition-all duration-500"
                onClick={() => (window.location.href = "/brain")}
              >
                <span className="flex items-center">
                  Start AI Diagnosis
                  <Zap className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                </span>
              </button>

              <button
                className="px-10 py-5 bg-slate-800 backdrop-blur-xl border border-slate-700 text-white font-semibold rounded-2xl shadow-xl hover:bg-slate-700 transform hover:-translate-y-2 transition-all duration-500"
                onClick={() => (window.location.href = "/about")}
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
                  className={`text-center p-6 bg-slate-800/80 backdrop-blur-xl rounded-2xl border border-slate-700 shadow-xl hover:shadow-2xl hover:bg-slate-800 transform hover:-translate-y-2 transition-all duration-500 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                  <div className="text-3xl font-black text-blue-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-slate-300 text-sm font-medium">
                    {stat.label}
                  </div>
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
                  className={`relative group p-8 bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 shadow-2xl hover:shadow-blue-500/10 hover:bg-slate-800 transform hover:-translate-y-3 hover:scale-105 transition-all duration-700 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 300}ms` }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                    style={{ backgroundColor: feature.color }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* AI Services Grid */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
                AI DIAGNOSTIC SUITE
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Seven revolutionary AI models, each specialized for specific
                medical conditions
              </p>
            </div>

            <div className="grid lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {diagnosticServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => (window.location.href = service.route)}
                    className={`group cursor-pointer relative p-8 bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700 shadow-2xl hover:shadow-blue-500/20 hover:bg-slate-800 transform hover:-translate-y-4 hover:scale-105 transition-all duration-700 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    {/* Icon */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg"
                      style={{ backgroundColor: service.color }}
                    >
                      <Icon className="w-8 h-8 text-white transition-colors duration-500" />
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 
                        className="text-xl font-bold mb-3 transition-all duration-500 group-hover:text-blue-400"
                        style={{ color: 'white' }}
                      >
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-4 group-hover:text-slate-300 transition-colors">
                        {service.description}
                      </p>

                      {/* Stats */}
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                          <TrendingUp className="w-4 h-4" /> {service.accuracy}
                        </span>
                        <span className="flex items-center gap-1 text-blue-400 font-semibold">
                          <Zap className="w-4 h-4" /> {service.processingTime}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ChevronRight className="absolute top-6 right-6 w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Testimonials */}
          <div className="relative mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                TRUSTED BY WORLD-CLASS DOCTORS
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-700 shadow-2xl">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-6 h-6 text-yellow-400 fill-current"
                        />
                      )
                    )}
                  </div>

                  <blockquote className="text-2xl text-slate-300 italic mb-8 leading-relaxed">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>

                  <div>
                    <div className="text-white font-bold text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-slate-400">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-700 hover:bg-slate-600 text-white transition"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>

                {/* Testimonial Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentTestimonial
                          ? "bg-blue-400 w-8"
                          : "bg-slate-600 w-2"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="inline-block p-1 bg-rose-600 rounded-3xl shadow-2xl">
              <div className="bg-slate-900 rounded-3xl px-12 py-8">
                <h3 className="text-3xl font-bold text-rose-400 mb-4">
                  Ready to Experience the Future?
                </h3>
                <p className="text-slate-300 mb-6">
                  Join thousands of medical professionals already using our AI
                  platform
                </p>
                <button
                  className="px-8 py-4 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  onClick={() => (window.location.href = "/contact")}
                >
                  Contact Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}