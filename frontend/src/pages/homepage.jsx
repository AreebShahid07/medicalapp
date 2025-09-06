// src/pages/Home.jsx
import { Brain, Activity, Eye, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex flex-col">

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
          AI-Powered <span className="text-sky-600">Medical Diagnosis</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Upload Brain MRIs, Chest X-rays, Skin images, or Eye scans.  
          Get instant AI-based diagnostic predictions to assist doctors and patients.
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
          <Link
            to="/brain"
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition group"
          >
            <Brain className="w-10 h-10 text-sky-600 group-hover:scale-110 transition" />
            <span className="mt-3 font-semibold text-gray-700">Brain</span>
          </Link>

          <Link
            to="/chest"
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition group"
          >
            <Activity className="w-10 h-10 text-sky-600 group-hover:scale-110 transition" />
            <span className="mt-3 font-semibold text-gray-700">Chest</span>
          </Link>

          <Link
            to="/skin"
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition group"
          >
            <Stethoscope className="w-10 h-10 text-sky-600 group-hover:scale-110 transition" />
            <span className="mt-3 font-semibold text-gray-700">Skin</span>
          </Link>

          <Link
            to="/eye"
            className="flex flex-col items-center bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition group"
          >
            <Eye className="w-10 h-10 text-sky-600 group-hover:scale-110 transition" />
            <span className="mt-3 font-semibold text-gray-700">Eye</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
