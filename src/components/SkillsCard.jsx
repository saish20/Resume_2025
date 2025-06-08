import React from "react";

const allSkills = [
  // Programming Languages
  "Python", "NumPy", "TensorFlow", "Scikit-learn", "R", "SQL",

  // Cloud Platforms
  "Azure", "Data Factory", "Azure ML", "SQL (Azure)", "Functions", "GCP", "BigQuery", "Vertex AI",

  // AI & ML
  "Machine Learning",
  "Natural Language Processing (NLP)",
  "Generative AI",
  "Large Language Models",
  "Data Mining",
  "Visualization",

  // Tools & Technologies
  "Tableau", "Power BI", "Google Looker", "Palantir Foundry",
  "Git", "Databricks", "Power Automate", "Power Apps"
];

export default function SkillsCard() {
  const Pill = ({ text }) => (
    <span className="bg-gray-100 px-3 py-1 rounded-full shadow-sm text-sm whitespace-nowrap">
      {text}
    </span>
  );

  return (
    <div className="col-span-2 bg-white rounded-lg p-6 shadow">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Skills</h3>
      <div className="flex flex-wrap gap-2">
        {allSkills.map((skill) => (
          <Pill key={skill} text={skill} />
        ))}
      </div>
    </div>
  );
}
