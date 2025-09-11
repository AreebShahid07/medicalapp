import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Sparkles,
  Shield,
  Zap,
  ArrowLeft,
  ChevronRight,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
  Brain,
  Activity,
  Eye,
  Stethoscope,
  Microscope,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Headphones,
  Users,
  Globe,
  Award,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

export default function ContactPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    category: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
        category: "general",
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed responses within 24 hours",
      contact: "contact@medicalai.com",
      color: "from-blue-500 to-cyan-500",
      available: "24/7",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+1 (555) 123-4567",
      color: "from-green-500 to-emerald-500",
      available: "Mon-Fri 9AM-6PM PST",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Instant support for urgent queries",
      contact: "Available on website",
      color: "from-purple-500 to-pink-500",
      available: "24/7",
    },
    {
      icon: MapPin,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "San Francisco, CA 94105",
      color: "from-orange-500 to-red-500",
      available: "Mon-Fri 9AM-5PM PST",
    },
  ];

  const departments = [
    {
      title: "Technical Support",
      description: "AI diagnostics, integrations, and platform issues",
      email: "support@medicalai.com",
      icon: Zap,
      color: "text-blue-400",
    },
    {
      title: "Sales & Partnerships",
      description: "Pricing, demos, and institutional partnerships",
      email: "sales@medicalai.com",
      icon: Users,
      color: "text-green-400",
    },
    {
      title: "Medical Affairs",
      description: "Clinical questions and research collaborations",
      email: "medical@medicalai.com",
      icon: Stethoscope,
      color: "text-purple-400",
    },
    {
      title: "Compliance & Security",
      description: "HIPAA, data privacy, and security inquiries",
      email: "compliance@medicalai.com",
      icon: Shield,
      color: "text-pink-400",
    },
  ];

  const socialLinks = [
    {
      icon: Twitter,
      href: "#",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    { icon: Youtube, href: "#", label: "YouTube", color: "hover:text-red-500" },
  ];

  const faqs = [
    {
      question: "How accurate are your AI diagnostic tools?",
      answer:
        "Our AI models achieve 95-99% accuracy rates across different diagnostic categories, validated through extensive clinical trials.",
    },
    {
      question: "Is the platform HIPAA compliant?",
      answer:
        "Yes, we maintain full HIPAA compliance with military-grade encryption and zero data retention policies.",
    },
    {
      question: "How quickly can I get diagnostic results?",
      answer:
        "Most analyses are completed within 10-30 seconds, with results delivered instantly to your dashboard.",
    },
    {
      question: "Do you offer integration with existing systems?",
      answer:
        "Yes, we provide comprehensive APIs and support for integration with major EMR and PACS systems.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <ParticlesBackground />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.15), transparent 50%)`,
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
        <div
          className={`text-center mb-16 transition-all duration-1500 transform ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
        

          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6 mt-10">
            GET IN
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              TOUCH
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your healthcare practice? Our team of AI
            specialists and medical experts is here to help you get started.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className={`p-6 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-3 hover:scale-105 transition-all duration-700 ${
                  isLoaded
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {method.description}
                </p>
                <div className="text-blue-400 font-semibold text-sm mb-2">
                  {method.contact}
                </div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {method.available}
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <MessageSquare className="w-8 h-8 mr-3 text-blue-400" />
              Send us a Message
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                <span className="text-green-300">
                  Message sent successfully! We'll get back to you within 24
                  hours.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="Dr. John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                    placeholder="john.smith@hospital.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Hospital or Clinic Name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                >
                  <option value="general" className="bg-gray-800">
                    General Inquiry
                  </option>
                  <option value="technical" className="bg-gray-800">
                    Technical Support
                  </option>
                  <option value="sales" className="bg-gray-800">
                    Sales & Partnerships
                  </option>
                  <option value="medical" className="bg-gray-800">
                    Medical Affairs
                  </option>
                  <option value="compliance" className="bg-gray-800">
                    Compliance & Security
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="How can we help you?"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300"
                  placeholder="Please describe your inquiry in detail..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Departments & Info */}
          <div className="space-y-8">
            {/* Departments */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">
                Direct Department Contact
              </h2>
              <div className="space-y-4">
                {departments.map((dept, index) => {
                  const Icon = dept.icon;
                  return (
                    <div
                      key={index}
                      className="p-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-start">
                        <Icon className={`w-6 h-6 ${dept.color} mr-3 mt-1`} />
                        <div className="flex-1">
                          <h3 className="font-semibold text-white mb-1">
                            {dept.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-2">
                            {dept.description}
                          </p>
                          <div className="text-blue-400 text-sm font-medium">
                            {dept.email}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-400" />
                Office Hours
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Monday - Friday</span>
                  <span className="text-white font-semibold">
                    9:00 AM - 6:00 PM PST
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Saturday</span>
                  <span className="text-white font-semibold">
                    10:00 AM - 4:00 PM PST
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Sunday</span>
                  <span className="text-gray-400">Closed</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-white/10">
                  <span className="text-gray-300">Emergency Support</span>
                  <span className="text-green-400 font-semibold">24/7</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-6">Follow Us</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-gray-400 ${social.color} hover:scale-110 hover:bg-white/20 transition-all duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
              <p className="text-gray-400 text-sm mt-4">
                Stay updated with the latest AI medical breakthroughs and
                platform updates.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20 p-6 shadow-xl"
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location Map Placeholder */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-center mb-12">
            Visit Our Office
          </h2>
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl rounded-3xl border border-white/30 p-8 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  MedicalAI Headquarters
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                    123 Innovation Drive, Suite 500
                    <br />
                    San Francisco, CA 94105, USA
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 mr-3 text-green-400" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 mr-3 text-purple-400" />
                    visit@medicalai.com
                  </div>
                </div>
                <div className="mt-6">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                    Schedule a Visit
                  </button>
                </div>
              </div>
              <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-sm">Interactive Map</div>
                  <div className="text-xs">Coming Soon</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 rounded-3xl shadow-2xl">
            <div className="bg-black rounded-3xl px-12 py-8">
              <div className="flex items-center justify-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-2xl font-bold text-white">
                  Emergency Support
                </h3>
              </div>
              <p className="text-gray-300 mb-4">
                Critical system issues or urgent medical AI support needed?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+15551234567"
                  className="px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors"
                >
                  Call Emergency Line
                </a>
                <a
                  href="mailto:emergency@medicalai.com"
                  className="px-6 py-3 bg-orange-600 text-white font-bold rounded-xl hover:bg-orange-700 transition-colors"
                >
                  Emergency Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
