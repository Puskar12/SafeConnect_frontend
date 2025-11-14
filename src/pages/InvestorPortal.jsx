import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InvestorPortal = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "investor") {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-blue-600 mb-4">Investor Portal</h2>
      <p className="text-gray-700 mb-6">
        Welcome! Access pitch decks, company growth reports, and more.
      </p>

      <div className="bg-white border rounded-lg p-6 shadow">
        <h3 className="text-xl font-bold text-blue-700 mb-3">Pitch Decks</h3>
        <ul className="list-disc list-inside text-gray-600">
          <li><a href="#" className="text-blue-600 underline">Fraud AI Pitch Deck (PDF)</a></li>
          <li><a href="#" className="text-blue-600 underline">Growth Strategy Overview</a></li>
        </ul>
      </div>
    </div>
  );
};

export default InvestorPortal;
