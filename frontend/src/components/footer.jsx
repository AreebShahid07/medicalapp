import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
} from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";

export default function Footer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) =>
      setMousePosition({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setIsVisible(window.scrollY > 200);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const socialLinks = [
    { icon: Twitter, href: "https://www.X.com/", label: "Twitter", color: "hover:text-blue-400" },
    { icon: Facebook,  href: "https://www.facebook.com/",label: "Facebook", color: "hover:text-blue-600" },
    { icon: Linkedin,  href: "https://www.linkedin.com/",label: "Linkedin", color: "hover:text-blue-500" },
    { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram", color: "hover:text-pink-500" },
    { icon: Youtube,  href: "https://www.youtube.com/",label: "Youtube", color: "hover:text-red-500" },
  ];

  const quickLinks = [
    { title: "About Us", href: "/about" },
    { title: "Contact", href: "/contact" },
    { title: "Brain", href: "/brain" },
    { title: "Eye", href: "/eye" },
    { title: "Skin", href: "/skin" },
    { title: "Cancer", href: "/cancer" },
    { title: "Chest", href: "/chest" },
    { title: "AI Chatbot", href: "/chatbot" },
    { title: "Hospital ", href: "/hospital" },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Base Gradient Background */}
      <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-black"></div>

      {/* Dynamic Mouse Glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.25), rgba(147,51,234,0.2), transparent 60%)`,
        }}
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Scroll to Top */}
      {isVisible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 hover:scale-110 transition-all duration-500"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}

      {/* Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Top Gradient Divider */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-12"></div>

        <div className="grid md:grid-cols-3 gap-12 md:divide-x md:divide-transparent">
          {/* About */}
          <div className="pr-6 relative">
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
            <p className="text-gray-300 leading-relaxed">
              Revolutionizing healthcare with quantum-enhanced AI diagnostics.
              Faster, more precise, and secure.
            </p>

            {/* Vertical Divider Line */}
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-pink-500/50"></div>
          </div>

          {/* Quick Links */}
          <div className="px-6 relative">
            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-6 text-gray-300">
              {quickLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  className="relative group font-medium transition"
                >
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {link.title}
                  </span>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Vertical Divider Line */}
            <div className="hidden md:block absolute top-0 right-0 h-full w-px bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-blue-500/50"></div>
          </div>

          {/* Contact */}
          <div className="pl-6">
            <h3 className="text-lg font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Contact
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400" /> areeb.pro.07@gmail.com
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-green-400" /> +92 336 6675390
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-pink-400" /> Faisalabad, Pakistan
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              {socialLinks.map(({ icon: Icon, href, label, color }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-gray-400 ${color} hover:scale-110 hover:bg-white/20 transition-all duration-300`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
        </div>
         <div className="text-center text-sm text-gray-400 mt-5">
          © {new Date().getFullYear()} MedicalAI. Powered by Quantum AI Technology
        </div>
        {/* Bottom Gradient Divider */}
        <div className="h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mt-5 "></div>
      </div>
    </footer>
  );
}
