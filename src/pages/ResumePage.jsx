import React from "react";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="bg-[#0D1117] p-4 flex justify-center space-x-8 font-bold text-white text-sm tracking-wide uppercase">
        <a href="/about" className="hover:text-green-400">About</a>
        <a
          href="/resume"
          className="relative text-green-400 after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:bg-green-400"
        >
          Resume
        </a>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center p-10">
        <h1 className="text-5xl font-bold mb-6">RESUME</h1>

        <div className="mb-8">
          <a
            href="/Saish_Mayekar_Resume.pdf"
            download
            className="inline-block bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
          >
            📄 Download Resume
          </a>
        </div>

        <section className="mb-10 max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Professional Summary</h2>
          <p className="text-gray-700">
            Experienced Data Scientist and AI Engineer with a strong track record of delivering AI-powered solutions, agentic applications, and cloud-native systems across Azure and GCP. Proven ability to lead technical delivery, build scalable pipelines, and drive strategic innovation.
          </p>
        </section>

        <section className="mb-10 max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li>PA Consulting – Consultant (Mar 2022 – Present)</li>
            <li>IBM – Advisory System Analyst (Apr 2020 – Oct 2020)</li>
            <li>Deloitte – Consultant (Jun 2018 – Apr 2020)</li>
            <li>Accenture – Application Development Senior Analyst (Sep 2014 – Jun 2018)</li>
          </ul>
        </section>

        <section className="mb-10 max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
          <ul className="grid grid-cols-2 gap-2 text-gray-700">
            <li>Python, R, SQL</li>
            <li>TensorFlow, Scikit-learn, NLP, LLMs</li>
            <li>Azure (ADF, ML, SQL), GCP (BigQuery, Vertex AI)</li>
            <li>Power BI, Tableau, Looker, Palantir Foundry</li>
            <li>Power Apps, Power Automate</li>
            <li>Git, Databricks, Streamlit</li>
          </ul>
        </section>

        <section className="mb-10 max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
          <p className="text-gray-700">Microsoft Azure Data Scientist Associate</p>
        </section>

        <section className="max-w-3xl w-full">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul className="text-gray-700 space-y-2">
            <li><strong>University of Sheffield</strong> – MSc Data Analytics (Sep 2021)</li>
            <li><strong>Mumbai University</strong> – BE Electronics and Telecommunication (Aug 2014)</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
