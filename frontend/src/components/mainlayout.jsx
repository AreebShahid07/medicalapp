import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "./footer";

export default function MainLayout() {
  return (
    <>
     
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer/>
    </>
  );
}