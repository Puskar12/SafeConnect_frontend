import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Careers.css";

const Careers = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://safe-connect-backend.vercel.app/api/jobs")
      .then((res) => setJobs(res.data))
      .catch(() => {
        
        setJobs([
          { _id: 1, title: "Frontend Developer", location: "Remote", description: "Work with React and Tailwind on UI components." },
          { _id: 2, title: "Backend Engineer", location: "Kestopur", description: "Build REST APIs with Node.js and MongoDB." },
        ]);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Join Our Team</h2>
      <p className="text-gray-700 mb-10">Explore exciting opportunities at Fraud Innovations.</p>

      <div className="grid md:grid-cols-2 gap-8">
        {jobs.map((job) => (
          <div key={job._id} className="border rounded-lg p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-blue-700">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="text-gray-600 mt-3">{job.description}</p>
            <button className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 cursor-pointer">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
