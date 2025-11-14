import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-blue-700 mb-6">About Fraud Innovation</h2>

      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        Fraud Innovation exists to help people recognize when an opportunity isn’t
        really an opportunity. Many students, interns, and job-seekers encounter
        misleading offers disguised as training, hiring, or career growth. Our work
        focuses on breaking down these situations so they’re easier to understand
        and even easier to avoid.
      </p>

      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
        We study how exploitative systems operate: from unpaid labor framed as
        "internships" to hiring funnels that never lead to real jobs. By examining
        messaging, company behavior, and real user experiences, we turn scattered
        incidents into clear, predictable patterns.
      </p>

      <h3 className="text-2xl font-semibold text-blue-600 mt-10 mb-4">What We Focus On</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
        <li>Identifying red flags in job postings and recruitment messages</li>
        <li>Analyzing exploitative internship structures and fake training programs</li>
        <li>Breaking down company actions to reveal hidden intentions</li>
        <li>Highlighting patterns of free labor extraction</li>
        <li>Documenting real cases of unfair practices to raise awareness</li>
      </ul>

      <h3 className="text-2xl font-semibold text-blue-600 mt-10 mb-4">Our Mission</h3>
      <p className="text-gray-700 leading-relaxed text-lg">
        We want people to feel informed, confident, and in control when navigating
        the job market. The more clarity someone has, the harder it is for companies
        to mislead or exploit them. Fraud Innovation helps build that clarity by
        exposing the tactics companies use and offering straightforward guidance on
        how to stay protected.
      </p>
    </div>
  );
};

export default About;