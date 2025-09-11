import React, { useState, useEffect, useRef } from "react";
import {
  MessageCircle,
  Send,
  Bot,
  User,
  Sparkles,
  Stethoscope,
  Brain,
  Heart,
  Zap,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

export default function ChatbotPage() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const simulateTyping = (text, callback) => {
    setIsTyping(true);
    let currentText = "";
    let currentIndex = 0;

    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        currentText += text[currentIndex];
        callback(currentText);
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTyping(false);
      }
    }, 30);
  };

  const handleSend = async (e) => {
    if (e) e.preventDefault();
    if (!question.trim() || loading) return;

    const userMsg = {
      sender: "user",
      text: question,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    const currentQuestion = question;
    setQuestion("");

    try {
      const response = await fetch("http://127.0.0.1:8000/ask-medical", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: currentQuestion }),
      });

      if (!response.ok) throw new Error("Failed to get response");

      const data = await response.json();

      const botMsg = {
        sender: "bot",
        text: "",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isTyping: true,
      };

      setMessages((prev) => [...prev, botMsg]);

      simulateTyping(data.answer, (currentText) => {
        setMessages((prev) =>
          prev.map((msg, idx) =>
            idx === prev.length - 1
              ? {
                  ...msg,
                  text: currentText,
                  isTyping: currentText.length < data.answer.length,
                }
              : msg
          )
        );
      });
    } catch (err) {
      const errorMsg = {
        sender: "bot",
        text: "I apologize, but I'm experiencing technical difficulties. Please try again in a moment.",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        isError: true,
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const quickQuestions = [
    "What are the symptoms of diabetes?",
    "How can I lower my blood pressure?",
    "When should I see a doctor for a headache?",
    "What causes chest pain?",
    "How to improve heart health?",
    "Signs of a stroke to watch for?",
  ];

  const handleQuickQuestion = (quickQ) => {
    setQuestion(quickQ);
  };

  const formatMessage = (text) => {
    return text.split("\n").map((line, index) => {
      if (line.trim().startsWith("•") || line.trim().startsWith("-")) {
        return (
          <div key={index} className="flex items-start mb-2">
            <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <span>{line.replace(/^[•-]\s*/, "")}</span>
          </div>
        );
      }
      if (line.trim().length === 0) return <br key={index} />;
      return <div key={index} className="mb-2">{line}</div>;
    });
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dynamic Background */}
      <ParticlesBackground />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.15), rgba(59, 130, 246, 0.15), transparent 50%)`,
        }}
      />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12 flex flex-col">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-teal-100 to-white mb-4">
            AI MEDICAL
            <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              ASSISTANT
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Get instant medical guidance powered by advanced AI.
            <span className="text-teal-400 font-semibold">
              {" "}
              Ask questions, get expert insights 24/7.
            </span>
          </p>
        </div>

        {/* Chat Container */}
        <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl flex flex-col min-h-[600px]">
            {/* Chat Header */}
            <div className="p-6 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Dr. AI Assistant</h3>
                  <div className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Online • Ready to help
                  </div>
                </div>
                <div className="ml-auto flex space-x-2">
                  <Stethoscope className="w-5 h-5 text-teal-400" />
                  <Brain className="w-5 h-5 text-blue-400" />
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
              </div>
            </div>

            {/* Messages Container */}
            <div
              ref={chatContainerRef}
              className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
            >
              {messages.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Welcome to AI Medical Assistant
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Ask any medical question and get expert guidance instantly
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-2xl mx-auto">
                    {quickQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickQuestion(q)}
                        className="text-left p-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm text-gray-300 hover:text-white"
                      >
                        <Sparkles className="w-4 h-4 inline mr-2 text-teal-400" />
                        {q}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`flex items-start max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl ${
                      msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        msg.sender === "user"
                          ? "ml-3 bg-gradient-to-r from-blue-500 to-purple-500"
                          : "mr-3 bg-gradient-to-r from-teal-500 to-cyan-500"
                      }`}
                    >
                      {msg.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>

                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : msg.isError
                          ? "bg-red-500/20 border border-red-500/30 text-red-300"
                          : "bg-white/10 backdrop-blur-xl border border-white/20 text-gray-100"
                      } ${msg.isTyping ? "animate-pulse" : ""}`}
                    >
                      {msg.sender === "bot"
                        ? formatMessage(msg.text)
                        : msg.text}
                      <div
                        className={`text-xs mt-2 opacity-70 ${
                          msg.sender === "user"
                            ? "text-blue-200"
                            : "text-gray-400"
                        }`}
                      >
                        {msg.timestamp}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center mr-3">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-200"></div>
                          <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-400"></div>
                        </div>
                        <span className="text-gray-300 text-sm">
                          Dr. AI is thinking...
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all duration-300"
                    placeholder="Ask any medical question..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" &&
                      !loading &&
                      question.trim() &&
                      handleSend(e)
                    }
                    disabled={loading}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Sparkles className="w-5 h-5 text-gray-400" />
                  </div>
                </div>

                <button
                  onClick={handleSend}
                  disabled={loading || !question.trim()}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform ${
                    loading || !question.trim()
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105"
                  }`}
                >
                  {loading ? (
                    <Zap className="w-5 h-5 animate-pulse" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center mt-4 text-xs text-gray-400">
                <div className="w-4 h-4 mr-2 text-green-400">🔒</div>
                HIPAA Compliant • Your conversations are secure and private
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
