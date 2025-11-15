import React, { useState, useEffect } from "react";
import "./Ventures.css";
import ns from "../assets/ns.jpg"
import ionm from "../assets/ionm.png"
import { useNavigate } from "react-router-dom";

const Ventures = () => {
  const navigate = useNavigate();
  const [ventures, setVentures] = useState([]);
  useEffect(() => {
    
        setVentures([
          
          {
            _id: 1,
            name: "Internship Used as Free Labor",
            description:
              "Fraud Innovation focuses on exposing deceptive practices and helping individuals recognize the tactics used to manipulate them. The goal is simple: bring clarity, awareness, and transparency to situations where people are misled under name of opportunity, training, or employment.",
            image: ns,
            button:"Learn More",
            link:"/card",
          },
          {
            _id: 2,
            name: "Fake Hiring Funnels",
            description:
              "Fake hiring funnels are one of the most common corporate deception patterns today. They look professional from the outside — polished job listings, fast replies, and enthusiastic HR messages — but behind the scenes, there’s no real intention to hire anyone at all truly or genuinely.",
            image: ionm,
            button:"Learn More",
            link:"/card2",
          },
        ]);
      
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6">Shared Cases</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {ventures.map((v) => (
          <div
            key={v._id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition bg-white"
          >
            <img
              src= {v.image}
              alt={v.name}
              className="rounded mb-4 w-full h-100 object-contain"
            />
            <h3 className="text-xl font-bold text-blue-700 mb-1">{v.name}</h3>
            <p className="text-gray-600 mb-2">{v.description}</p>
            <button onClick={()=>{navigate(v.link)}} className="text-blue-700 font-bold cursor-pointer hover:text-blue-500 transition-transform">{v.button}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ventures;
