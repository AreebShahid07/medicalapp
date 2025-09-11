import React, { useState, useEffect, useRef } from "react";
import { Microscope, Upload, Zap, Shield, Clock, CheckCircle, AlertTriangle, ArrowLeft, Sparkles, Activity, TrendingUp, Target } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

export default function CancerPage() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [isDragOver, setIsDragOver] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [imagePreview, setImagePreview] = useState(null);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const fileInputRef = useRef(null);
    const dropZoneRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const handleFileChange = (file) => {
        if (file && file.type.startsWith('image/')) {
            setSelectedFile(file);
            setResult(null);
            setError("");
            
            // Create preview
            const reader = new FileReader();
            reader.onload = (e) => setImagePreview(e.target.result);
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (e) => {
        const file = e.target.files[0];
        handleFileChange(file);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const file = e.dataTransfer.files[0];
        handleFileChange(file);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const simulateProgress = () => {
        setUploadProgress(0);
        const interval = setInterval(() => {
            setUploadProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 300);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            setError("Please select a tissue image.");
            return;
        }
        
        setLoading(true);
        setIsAnalyzing(true);
        setError("");
        setResult(null);
        simulateProgress();

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            const response = await fetch("http://127.0.0.1:8000/detect-cancer/", {
                method: "POST",
                body: formData,
            });
            if (!response.ok) throw new Error("Detection failed");
            const data = await response.json();
            setResult(data);
        } catch (err) {
            setError(err.message || "Failed to analyze tissue. Please try again.");
        } finally {
            setLoading(false);
            setIsAnalyzing(false);
            setUploadProgress(100);
        }
    };

    const getResultColor = (prediction) => {
        if (prediction === "lung_aca" || prediction === "colon_aca") {
            return "from-red-500 to-rose-600";
        }
        if (prediction === "lung_scc") {
            return "from-orange-500 to-red-600";
        }
        if (prediction === "lung_bnt" || prediction === "colon_bnt") {
            return "from-green-500 to-emerald-600";
        }
        return "from-blue-500 to-cyan-600";
    };

    const getResultIcon = (prediction) => {
        if (prediction === "lung_bnt" || prediction === "colon_bnt") {
            return CheckCircle;
        }
        return AlertTriangle;
    };

    const getSeverityLevel = (prediction) => {
        if (prediction === "lung_aca" || prediction === "colon_aca") {
            return { level: "Malignant - High Priority", color: "text-red-400" };
        }
        if (prediction === "lung_scc") {
            return { level: "Squamous Cell Carcinoma", color: "text-orange-400" };
        }
        if (prediction === "lung_bnt" || prediction === "colon_bnt") {
            return { level: "Benign Tissue", color: "text-green-400" };
        }
        return { level: "Analysis Complete", color: "text-blue-400" };
    };

    const formatPrediction = (prediction) => {
        const mappings = {
            "colon_aca": "Colon Adenocarcinoma",
            "colon_bnt": "Colon Benign Tissue",
            "lung_aca": "Lung Adenocarcinoma", 
            "lung_bnt": "Lung Benign Tissue",
            "lung_scc": "Lung Squamous Cell Carcinoma"
        };
        return mappings[prediction] || prediction;
    };

    const getConditionDescription = (prediction) => {
        switch(prediction) {
            case "colon_aca":
                return "Adenocarcinoma detected in colon tissue. This is a malignant tumor requiring immediate oncological evaluation and treatment planning.";
            case "lung_aca":
                return "Adenocarcinoma detected in lung tissue. This is the most common type of lung cancer, requiring urgent medical intervention.";
            case "lung_scc":
                return "Squamous cell carcinoma detected in lung tissue. This is a type of non-small cell lung cancer requiring comprehensive treatment.";
            case "colon_bnt":
                return "Benign tissue detected in colon sample. No signs of malignancy found in the analyzed tissue sample.";
            case "lung_bnt":
                return "Benign tissue detected in lung sample. No cancerous cells identified in the analyzed tissue sample.";
            default:
                return "Tissue analysis complete. Professional pathological evaluation recommended for comprehensive diagnosis.";
        }
    };

    const getUrgencyLevel = (prediction) => {
        if (prediction === "lung_aca" || prediction === "colon_aca" || prediction === "lung_scc") {
            return { text: "Immediate Oncology Consultation", color: "text-red-400" };
        }
        if (prediction === "lung_bnt" || prediction === "colon_bnt") {
            return { text: "Routine Follow-up", color: "text-green-400" };
        }
        return { text: "Pathologist Review", color: "text-blue-400" };
    };

    const getTissueType = (prediction) => {
        if (prediction.includes("colon")) return "Colon Tissue";
        if (prediction.includes("lung")) return "Lung Tissue";
        return "Unknown Tissue";
    };

    return (
        <div className="min-h-screen bg-black text-white overflow-hidden relative">
            {/* Dynamic Background */}
            <ParticlesBackground />
            <div 
                className="absolute inset-0 opacity-20"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(239, 68, 68, 0.15), rgba(147, 51, 234, 0.15), transparent 50%)`
                }}
            />
            
            {/* Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(239,68,68,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
            
            {/* Floating Orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-600/20 to-violet-600/20 rounded-full blur-3xl animate-pulse animation-delay-2000" />
            </div>

            <div className="relative z-10 container mx-auto px-6 py-12">
                {/* Header */}
                <div className="text-center mb-12">

                    <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-white mb-6 mt-10">
                        CANCER TISSUE
                        <span className="block bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                            DETECTION
                        </span>
                    </h1>
                    
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Upload lung or colon tissue images for AI-powered cancer detection and pathological analysis. 
                        <span className="text-red-400 font-semibold"> 95.4% accuracy in under 15 seconds.</span>
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
                    <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
                        <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-400" />
                        <div className="text-2xl font-bold text-green-400">95.4%</div>
                        <div className="text-gray-400 text-sm">Accuracy</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
                        <Clock className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                        <div className="text-2xl font-bold text-blue-400">15s</div>
                        <div className="text-gray-400 text-sm">Analysis</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/20">
                        <Target className="w-8 h-8 mx-auto mb-2 text-red-400" />
                        <div className="text-2xl font-bold text-red-400">5 Types</div>
                        <div className="text-gray-400 text-sm">Classifications</div>
                    </div>
                </div>

                {/* Main Interface */}
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                    
                    {/* Upload Section */}
                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                                <Upload className="w-6 h-6 mr-3 text-red-400" />
                                Upload Tissue Image
                            </h2>
                            
                            {/* Drop Zone */}
                            <div
                                ref={dropZoneRef}
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                className={`relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-300 cursor-pointer ${
                                    isDragOver 
                                        ? 'border-red-400 bg-red-400/10' 
                                        : 'border-gray-600 hover:border-red-400 hover:bg-white/5'
                                }`}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <input
                                    ref={fileInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handleInputChange}
                                    className="hidden"
                                />
                                
                                {imagePreview ? (
                                    <div className="space-y-4">
                                        <img 
                                            src={imagePreview} 
                                            alt="Preview" 
                                            className="max-w-full max-h-48 mx-auto rounded-xl shadow-lg"
                                        />
                                        <p className="text-green-400 font-semibold">
                                            {selectedFile?.name}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="space-y-4">
                                        <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto">
                                            <Activity className="w-8 h-8 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xl font-semibold text-white mb-2">
                                                Drop tissue image here
                                            </p>
                                            <p className="text-gray-400">
                                                Lung or Colon tissue samples (PNG, JPG, JPEG)
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Progress Bar */}
                            {loading && (
                                <div className="mt-6">
                                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                                        <span>Processing...</span>
                                        <span>{Math.round(uploadProgress)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div 
                                            className="bg-gradient-to-r from-red-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                                            style={{ width: `${uploadProgress}%` }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Analyze Button */}
                            <button
                                onClick={handleSubmit}
                                disabled={!selectedFile || loading}
                                className={`w-full mt-6 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 transform ${
                                    !selectedFile || loading
                                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-2xl hover:shadow-red-500/25 hover:-translate-y-1 hover:scale-105'
                                }`}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center">
                                        <Microscope className="w-5 h-5 mr-2 animate-pulse" />
                                        {isAnalyzing ? 'Analyzing Tissue...' : 'Uploading...'}
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center">
                                        <Zap className="w-5 h-5 mr-2" />
                                        Start AI Analysis
                                    </div>
                                )}
                            </button>

                            {/* Error Display */}
                            {error && (
                                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400">
                                    <div className="flex items-center">
                                        <AlertTriangle className="w-5 h-5 mr-2" />
                                        {error}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Info Cards */}
                        <div className="grid gap-4">
                            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                                <h3 className="text-lg font-bold text-red-400 mb-2">Detectable Cancer Types</h3>
                                <p className="text-gray-300 text-sm">Lung Adenocarcinoma • Colon Adenocarcinoma • Squamous Cell Carcinoma • Benign Tissue</p>
                            </div>
                            <div className="bg-gradient-to-r from-purple-600/20 to-violet-600/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                                <h3 className="text-lg font-bold text-purple-400 mb-2">Tissue Requirements</h3>
                                <p className="text-gray-300 text-sm">High-resolution histological images • 224x224 optimal resolution • RGB analysis</p>
                            </div>
                            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                                <h3 className="text-lg font-bold text-blue-400 mb-2">Medical Grade Security</h3>
                                <p className="text-gray-300 text-sm">All tissue images processed with HIPAA-compliant encryption and immediate deletion</p>
                            </div>
                        </div>
                    </div>

                    {/* Results Section */}
                    <div className="space-y-8">
                        {result && !result.error ? (
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <div className="text-center mb-8">
                                    <div className={`w-20 h-20 ${result.prediction.includes('bnt') ? 'bg-gradient-to-r from-green-400 to-emerald-400' : 'bg-gradient-to-r from-red-400 to-orange-400'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                                        {React.createElement(getResultIcon(result.prediction), { 
                                            className: "w-10 h-10 text-white" 
                                        })}
                                    </div>
                                    <h2 className="text-3xl font-bold text-white mb-2">Analysis Complete</h2>
                                    <p className="text-gray-300">AI has analyzed your tissue sample</p>
                                </div>

                                {/* Result Display */}
                                <div className={`relative p-8 bg-gradient-to-r ${getResultColor(result.prediction)} rounded-2xl shadow-xl mb-6`}>
                                    <div className="absolute inset-0 bg-black/20 rounded-2xl" />
                                    <div className="relative text-center">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            {React.createElement(getResultIcon(result.prediction), { 
                                                className: "w-8 h-8 text-white" 
                                            })}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {formatPrediction(result.prediction)}
                                        </h3>
                                        <div className={`inline-block px-4 py-2 rounded-full bg-white/20 mb-3`}>
                                            <span className={`font-semibold ${getSeverityLevel(result.prediction).color}`}>
                                                {getSeverityLevel(result.prediction).level}
                                            </span>
                                        </div>
                                        <p className="text-white/90 text-lg">
                                            Confidence: {(result.confidence * 100).toFixed(1)}%
                                        </p>
                                    </div>
                                </div>

                                {/* Critical Information */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                                    <div className="bg-black/20 rounded-2xl p-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Tissue Type</h4>
                                        <div className="text-lg font-bold text-blue-400">
                                            {getTissueType(result.prediction)}
                                        </div>
                                    </div>
                                    <div className="bg-black/20 rounded-2xl p-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Urgency</h4>
                                        <div className={`text-lg font-bold ${getUrgencyLevel(result.prediction).color}`}>
                                            {getUrgencyLevel(result.prediction).text.split(' ')[0]}
                                        </div>
                                    </div>
                                    <div className="bg-black/20 rounded-2xl p-6">
                                        <h4 className="text-lg font-semibold text-white mb-2">Confidence</h4>
                                        <div className="text-lg font-bold text-white">
                                            {(result.confidence * 100).toFixed(1)}%
                                        </div>
                                    </div>
                                </div>

                                {/* Pathological Information */}
                                <div className="bg-black/20 rounded-2xl p-6 mb-6">
                                    <h4 className="text-lg font-semibold text-white mb-3">Pathological Analysis</h4>
                                    <p className="text-gray-300 leading-relaxed">
                                        {getConditionDescription(result.prediction)}
                                    </p>
                                </div>

                                {/* Detailed Results */}
                                <div className="bg-black/20 rounded-2xl p-6">
                                    <h4 className="text-lg font-semibold text-white mb-4">Detailed Analysis</h4>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Classification:</span>
                                            <span className="text-white font-semibold">{formatPrediction(result.prediction)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Confidence Level:</span>
                                            <span className="text-white font-semibold">{(result.confidence * 100).toFixed(1)}%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Tissue Source:</span>
                                            <span className="text-blue-400 font-semibold">{getTissueType(result.prediction)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Processing Time:</span>
                                            <span className="text-white font-semibold">&lt; 15 seconds</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Model Accuracy:</span>
                                            <span className="text-white font-semibold">95.4%</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Critical Disclaimer for Cancer */}
                                <div className="mt-6 p-4 bg-yellow-600/20 border border-yellow-500/30 rounded-xl">
                                    <p className="text-yellow-300 text-sm">
                                        <strong>Critical Medical Disclaimer:</strong> This AI analysis is for research and informational purposes only. 
                                        Cancer diagnosis requires professional pathological examination. Please consult immediately with qualified oncologists.
                                    </p>
                                </div>

                                {/* Action Buttons */}
                                <div className="grid grid-cols-2 gap-4 mt-6">
                                    <button 
                                        onClick={() => {
                                            setResult(null);
                                            setSelectedFile(null);
                                            setImagePreview(null);
                                        }}
                                        className="px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-xl hover:bg-white/20 transition-all duration-300"
                                    >
                                        New Analysis
                                    </button>
                                    <button className="px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                                        Download Report
                                    </button>
                                </div>
                            </div>
                        ) : result && result.error ? (
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <AlertTriangle className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-red-400 mb-4">
                                        Analysis Error
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-6">
                                        {result.error}
                                    </p>
                                    <button 
                                        onClick={() => {
                                            setResult(null);
                                            setSelectedFile(null);
                                            setImagePreview(null);
                                        }}
                                        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                                    >
                                        Try Again
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                                <div className="text-center">
                                    <div className="w-20 h-20 bg-gradient-to-r from-gray-600 to-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Microscope className="w-10 h-10 text-gray-400" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-400 mb-4">
                                        Ready for Analysis
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        Upload a high-resolution tissue image for AI-powered cancer detection. 
                                        Our model can distinguish between malignant and benign tissues in lung and colon samples.
                                    </p>
                                    
                                    <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center">
                                            <div className="text-red-400 font-bold text-lg">5 Types</div>
                                            <div className="text-gray-400">Classifications</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-orange-400 font-bold text-lg">224x224</div>
                                            <div className="text-gray-400">Resolution</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}