import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Ventures from "./pages/Ventures";
import Careers from "./pages/Careers";
import Signup from "./pages/Signup";
import CreateJob from "./pages/CreateJob";
import InvestorPortal from "./pages/InvestorPortal";
import Login from "./pages/Login";
import Contact from "./pages/Contact";
import ProtectedRoute from "./components/ProtectRoute"; 
import Card from "./components/Card";
import Card2 from "./components/Card2";
import "./App.css"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen  ">
        <Navbar />
        <main className=" grow pt-15 pb-20">
          <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Showcase" element={<Ventures />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />


            <Route
              path="/create-job"
              element={
                <ProtectedRoute allowedRole="hr">
                  <CreateJob />
                </ProtectedRoute>
              }
            />
            <Route
              path="/investor-portal"
              element={
                <ProtectedRoute allowedRole="investor">
                  <InvestorPortal />
                </ProtectedRoute>
              }
            />
            <Route path="/card" element={<Card />} />
            <Route path="/card2" element={<Card2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
