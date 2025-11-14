import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-linear-to-b from-blue-50 to-white py-20">
      <Helmet>
        <title>Fraud Innovations | Home</title>
      </Helmet>

      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-blue-700 mb-4"
        >
         Investigating Corporate Misconduct
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-gray-600 text-lg max-w-2xl mx-auto mb-8"
        >
          Turning confusing experiences into clear patterns so people can protect their time, effort, and skills.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl shadow-md hover:bg-blue-700"
          onClick={()=>navigate("/ventures")}
        >
          Learn More
        </motion.button>
      </div>

      {/* Ventures Section */}
      <div className="mt-20 max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Fake Hiring Funnels</h3>
          <p className="text-gray-600 text-sm">
            An investigation into fraudulent job pipelines designed to exploit
            applicants through fake assessments, paid onboarding, and ghost
            operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Corporate Scam Reports</h3>
          <p className="text-gray-600 text-sm">
            Documentation of scam patterns inside emerging and mid-sized
            companies, highlighting red flags, risk factors, and user-impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg"
        >
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Fraud Innovation Lab</h3>
          <p className="text-gray-600 text-sm">
            A growing research initiative to expose deceptive digital practices
            and build tools that improve online trust.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;