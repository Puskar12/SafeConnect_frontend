import React from 'react'
import "./Card.css"

function Card() {
  return (
    <> 
    <div className="space-y-10 px-6 md:px-12 lg:px-24 py-10">

      <div>
        <h1 className="text-3xl font-bold mb-4">Overview</h1>
        <p className="text-lg leading-relaxed">
          Fraud Innovation focuses on exposing deceptive practices and helping individuals recognize the tactics used to manipulate or exploit them. The goal is to bring clarity, awareness, and transparency to situations where people are misled under the name of opportunity, training, or employment.
        </p>
        <p className="text-lg leading-relaxed mt-3">
          Whether it’s unpaid work disguised as an internship or companies stretching ethical lines to get free labor, Fraud Innovation breaks down the patterns and reveals what’s really happening behind the scenes.
        </p>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">Our Framework</h1>
        <p className="text-lg leading-relaxed">
          Fraud Innovation uses structured approach to understand how modern exploitation takes shape. Instead of looking at incidents in isolation, we break them down into patterns, behaviors, and repeatable tactics used by deceptive companies. The goal is to make these tactics easier to recognize and harder to weaponize.Here’s how the framework works:
        </p>

        <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
          <li>Recruitment Message Analysis – Studying how companies hide their real intentions behind attractive job descriptions or internship offers.</li>
          <li>Pattern Detection – Tracking common traits across unpaid labor, misleading tasks, fake hiring funnels, and exaggerated claims.</li>
          <li>Behavior Mapping – Comparing what a company promises with what they actually do to highlight inconsistencies.</li>
          <li>Scenario Evaluation – Reviewing real applicant–employer interactions to understand where manipulation or exploitation starts.</li>
        </ul>

        <p className="text-lg leading-relaxed mt-3">
          This process turns scattered experiences into a clear structure you can actually understand and identify when it happens again.
        </p>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">Key Patterns</h1>
        <ul className="list-disc pl-6 text-lg leading-relaxed space-y-2">
          <li>False Hiring Promises – Companies attract candidates with the illusion of future employment without any real intention to hire.</li>
          <li>Free Labor Tasks – Real production work assigned under the label of “training” or “evaluation”.</li>
          <li>Shadow Internships – Rotating unpaid interns to handle real business operations without compensation.</li>
          <li>Spec Work Extraction – Collecting usable work from multiple applicants and quietly implementing the best results.</li>
        </ul>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-4">Community Value</h1>
        <p className="text-lg leading-relaxed">
          Fraud Innovation empowers students, interns, and early‑career professionals by helping them identify unfair practices before they get trapped in them. By sharing insights, highlighting patterns, and simplifying complex situations, it protects people’s time, effort, and skills.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          The mission is to make the modern work environment clearer, fairer, and harder for deceptive companies to exploit.
        </p>
      </div>

    </div>
    </>
  )
}

export default Card
