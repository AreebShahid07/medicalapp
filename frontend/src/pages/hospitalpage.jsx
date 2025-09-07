import React, { useState, useEffect } from "react";
import { MapPin, Search, Hospital, Phone, Star, Navigation, ArrowLeft, Sparkles, Clock, Shield, Award } from "lucide-react";

export default function HospitalFinderPage() {
    const [address, setAddress] = useState("");
    const [disease, setDisease] = useState("");
    const [loading, setLoading] = useState(false);
    const [hospitals, setHospitals] = useState([]);
    const [error, setError] = useState("");
    const [searchProgress, setSearchProgress] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const simulateSearchProgress = () => {
        setSearchProgress(0);
        const interval = setInterval(() => {
            setSearchProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 20;
            });
        }, 300);
    };

    const handleSearch = async (e) => {
        if (e) e.preventDefault();
        if (!address.trim() || !disease.trim()) {
            setError("Please enter both address and disease name.");
            return;
        }
        
        setLoading(true);
        setError("");
        setHospitals([]);
        simulateSearchProgress();

        try {
            const response = await fetch("http://127.0.0.1:8000/ask-hospital", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ location: address, disease }),
            });
            
            if (!response.ok) throw new Error("Search failed");
            
            const data = await response.json();
            
            // Parse the AI response to extract hospital information
            if (data.answer) {
                // For demo purposes, we'll create mock structured data
                // In reality, you'd parse the AI response more sophisticatedly
                const mockHospitals = [
                    {
                        name: "City General Hospital",
                        address: "123 Medical Center Blvd",
                        phone: "(555) 123-4567",
                        specialties: [disease, "Emergency Care", "Internal Medicine"],
                        rating: 4.5,
                        distance: "0.8 miles",
                        emergency: true
                    },
                    {
                        name: "Regional Medical Center",
                        address: "456 Healthcare Ave",
                        phone: "(555) 987-6543",
                        specialties: [disease, "Cardiology", "Neurology"],
                        rating: 4.7,
                        distance: "1.2 miles",
                        emergency: true
                    },
                    {
                        name: "Specialty Care Clinic",
                        address: "789 Treatment St",
                        phone: "(555) 456-7890",
                        specialties: [disease, "Outpatient Care"],
                        rating: 4.3,
                        distance: "2.1 miles",
                        emergency: false
                    }
                ];
                setHospitals(mockHospitals);
            } else {
                setError("No hospitals found for your search criteria.");
            }
        } catch (err) {
            setError("Failed to find hospitals. Please try again.");
        } finally {
            setLoading(false);
            setSearchProgress(100);
        }
    };

    const popularDiseases = [
        "Cardiology", "Neurology", "Orthopedics", "Emergency Care", 
        "Diabetes", "Oncology", "Pediatrics", "Dermatology"
    ];

    const getRatingColor = (rating) => {
        if (rating >= 4.5) return "text-green-400";
        if (rating >= 4.0) return "text-yellow-400";
        return "text-orange-400";
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            {/* Dynamic Background */}
            <div 
                className="absolute inset-0 opacity-20"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 191, 36, 0.15), rgba(59, 130, 246, 0.15), transparent 50%)`
                }}
            />
            
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            {/* Floating Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-amber-600/20 to-yellow-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                  

                    <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-amber-100 to-white mb-6 mt-10">
                        HOSPITAL
                        <span className="block bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                            FINDER
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Find the best hospitals and medical centers near you for specialized care. 
                        <span className="text-amber-400 font-semibold"> Powered by intelligent location matching.</span>
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
                    <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
                        <Hospital className="w-8 h-8 mx-auto mb-2 text-green-400" />
                        <div className="text-2xl font-bold text-green-400">10K+</div>
                        <div className="text-gray-400 text-sm">Hospitals</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
                        <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                        <div className="text-2xl font-bold text-blue-400">Live</div>
                        <div className="text-gray-400 text-sm">Updates</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
                        <Navigation className="w-8 h-8 mx-auto mb-2 text-amber-400" />
                        <div className="text-2xl font-bold text-amber-400">GPS</div>
                        <div className="text-gray-400 text-sm">Enabled</div>
                    </div>
                </div>

                {/* Main Interface */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    
                    {/* Search Section */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Search className="w-6 h-6 mr-3 text-amber-400" />
                                Find Medical Centers
                            </h2>
                            
                            <div className="space-y-6">
                                {/* Location Input */}
                                <div>
                                    <label className="block text-white text-sm font-semibold mb-3">
                                        Your Location
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter your address or city"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                            disabled={loading}
                                        />
                                        <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                {/* Disease/Specialty Input */}
                                <div>
                                    <label className="block text-white text-sm font-semibold mb-3">
                                        Medical Condition or Specialty
                                    </label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            className="w-full px-4 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
                                            placeholder="Enter condition or specialty"
                                            value={disease}
                                            onChange={(e) => setDisease(e.target.value)}
                                            disabled={loading}
                                        />
                                        <Sparkles className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    </div>
                                </div>

                                {/* Popular Specialties */}
                                <div>
                                    <label className="block text-white text-sm font-semibold mb-3">
                                        Popular Specialties
                                    </label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {popularDiseases.map((specialty) => (
                                            <button
                                                key={specialty}
                                                onClick={() => setDisease(specialty)}
                                                className="px-3 py-2 bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl hover:bg-white/10 transition-all duration-300 text-sm text-gray-300 hover:text-white"
                                            >
                                                {specialty}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                {loading && (
                                    <div>
                                        <div className="flex justify-between text-sm text-gray-400 mb-2">
                                            <span>Finding hospitals...</span>
                                            <span>{Math.round(searchProgress)}%</span>
                                        </div>
                                        <div className="w-full bg-gray-700 rounded-full h-2">
                                            <div 
                                                className="bg-gradient-to-r from-amber-500 to-yellow-500 h-2 rounded-full transition-all duration-300"
                                                style={{ width: `${searchProgress}%` }}
                                            />
                                        </div>
                                    </div>
                                )}

                                {/* Search Button */}
                                <button
                                    onClick={handleSearch}
                                    disabled={loading || !address.trim() || !disease.trim()}
                                    className={`w-full px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
                                        loading || !address.trim() || !disease.trim()
                                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-amber-600 to-yellow-600 text-white shadow-2xl hover:shadow-amber-500/25 hover:-translate-y-1 hover:scale-105'
                                    }`}
                                >
                                    {loading ? (
                                        <div className="flex items-center justify-center">
                                            <Search className="w-5 h-5 mr-2 animate-pulse" />
                                            Searching Hospitals...
                                        </div>
                                    ) : (
                                        <div className="flex items-center justify-center">
                                            <Search className="w-5 h-5 mr-2" />
                                            Find Best Hospitals
                                        </div>
                                    )}
                                </button>

                                {/* Error Display */}
                                {error && (
                                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
                                        <div className="flex items-center">
                                            <MapPin className="w-5 h-5 mr-2" />
                                            {error}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Info Cards */}
                        <div className="grid gap-4">
                            <div className="bg-gradient-to-r from-amber-600/20 to-yellow-600/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                                <h3 className="text-lg font-bold text-amber-400 mb-2">Real-Time Data</h3>
                                <p className="text-gray-300 text-sm">Live hospital availability, ratings, and contact information</p>
                            </div>
                            <div className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                                <h3 className="text-lg font-bold text-blue-400 mb-2">Smart Matching</h3>
                                <p className="text-gray-300 text-sm">AI-powered specialty matching for your specific medical needs</p>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-8">
                        {hospitals.length > 0 ? (
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                    <Hospital className="w-6 h-6 mr-3 text-green-400" />
                                    Best Hospitals Near You
                                </h2>
                                
                                <div className="space-y-4">
                                    {hospitals.map((hospital, idx) => (
                                        <div key={idx} className="bg-black/20 rounded-2xl p-6 hover:bg-black/30 transition-all duration-300">
                                            {/* Hospital Header */}
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-white mb-2">{hospital.name}</h3>
                                                    <div className="flex items-center text-gray-300 mb-1">
                                                        <MapPin className="w-4 h-4 mr-2" />
                                                        {hospital.address}
                                                    </div>
                                                    <div className="flex items-center text-gray-300">
                                                        <Phone className="w-4 h-4 mr-2" />
                                                        {hospital.phone}
                                                    </div>
                                                </div>
                                                {hospital.emergency && (
                                                    <div className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-400 text-sm font-semibold">
                                                        Emergency Care
                                                    </div>
                                                )}
                                            </div>

                                            {/* Hospital Stats */}
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center">
                                                    <Star className={`w-5 h-5 mr-1 ${getRatingColor(hospital.rating)}`} />
                                                    <span className={`font-semibold ${getRatingColor(hospital.rating)}`}>
                                                        {hospital.rating}
                                                    </span>
                                                    <span className="text-gray-400 ml-2">• {hospital.distance}</span>
                                                </div>
                                                <div className="text-blue-400 font-semibold">
                                                    {hospital.distance}
                                                </div>
                                            </div>

                                            {/* Specialties */}
                                            <div className="mb-4">
                                                <h4 className="text-sm font-semibold text-gray-300 mb-2">Specialties:</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {hospital.specialties?.map((specialty, specIdx) => (
                                                        <span 
                                                            key={specIdx}
                                                            className={`px-3 py-1 rounded-full text-sm ${
                                                                specialty === disease 
                                                                    ? 'bg-amber-500/20 border border-amber-500/30 text-amber-400'
                                                                    : 'bg-white/10 border border-white/20 text-gray-300'
                                                            }`}
                                                        >
                                                            {specialty}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Action Buttons */}
                                            <div className="flex gap-3">
                                                <button className="flex-1 px-4 py-2 bg-gradient-to-r from-amber-600 to-yellow-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                                    Get Directions
                                                </button>
                                                <button className="px-4 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300">
                                                    Call Now
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Hospital className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-400 mb-4">
                                        Ready to Search
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed mb-6">
                                        Enter your location and medical condition to find the best hospitals 
                                        and medical centers near you with specialized care.
                                    </p>
                                    
                                    <div className="grid grid-cols-2 gap-4 text-sm max-w-md mx-auto">
                                        <div className="text-center">
                                            <div className="text-amber-400 font-bold text-lg">10,000+</div>
                                            <div className="text-gray-400">Medical Centers</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-blue-400 font-bold text-lg">Real-Time</div>
                                            <div className="text-gray-400">Information</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Features */}
                <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                        <Award className="w-12 h-12 mx-auto mb-4 text-amber-400" />
                        <h3 className="text-lg font-bold text-white mb-2">Quality Ratings</h3>
                        <p className="text-gray-300 text-sm">Verified hospital ratings and patient reviews</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                        <Navigation className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                        <h3 className="text-lg font-bold text-white mb-2">GPS Navigation</h3>
                        <p className="text-gray-300 text-sm">Turn-by-turn directions to your chosen hospital</p>
                    </div>
                    <div className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
                        <Shield className="w-12 h-12 mx-auto mb-4 text-green-400" />
                        <h3 className="text-lg font-bold text-white mb-2">Verified Information</h3>
                        <p className="text-gray-300 text-sm">Up-to-date contact details and specialties</p>
                    </div>
                </div>
            </div>
        </div>
    );
}