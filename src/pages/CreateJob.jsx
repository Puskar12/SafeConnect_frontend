import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CreateJob.css"

const CreateJob = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    location: "",
    applyLink: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (!token || role !== "hr") {
    alert("Access denied! HR only.");
    navigate("/login");
  }
}, [navigate]);


  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post("https://safe-connect-backend.vercel.app/api/jobs", job, {
        headers: { Authorization: `Bearer ${token}` }, // send token
      });
      setMessage("Job created successfully!");
      setJob({ title: "", description: "", location: "", applyLink: "" });
    } catch (err) {
      setMessage("Failed to create job.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Create New Job</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={job.title}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded mb-4 focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Job Location"
          value={job.location}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded mb-4 focus:ring-2 focus:ring-blue-500"
          required
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={job.description}
          onChange={handleChange}
          rows="5"
          className="w-full border border-gray-300 p-3 rounded mb-4 focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>

        <input
          type="text"
          name="applyLink"
          placeholder="Apply Link (optional)"
          value={job.applyLink}
          onChange={handleChange}
          className="w-full border border-gray-300 p-3 rounded mb-4 focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-5 rounded hover:bg-blue-700 transition"
        >
          Create Job
        </button>
      </form>

      {message && <p className="mt-4 text-center text-green-600">{message}</p>}
    </div>
  );
};

export default CreateJob;
