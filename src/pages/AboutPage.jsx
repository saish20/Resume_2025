import React from "react";
import TimelineCard from "../components/ExperienceCard";
import AskMeAnythingWidget from "../components/AskMeWidget";
import SkillsCard from "../components/SkillsCard";

export default function HomePage() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left: Sidebar */}
      <div className="w-1/5 flex flex-col items-center px-4 py-10 bg-white shadow-md">
        <img
          src="/profile.jpg"
          alt="Saish Mayekar"
          className="w-28 h-28 rounded-full border-4 border-white object-cover mb-4 shadow-lg"
        />
        <h1 className="text-xl font-bold mb-2">Saish Mayekar</h1>
        <p className="text-gray-700 text-sm text-center">
          Data Scientist & AI Engineer. I build intelligent systems using LLMs,
          cloud-native infrastructure, and ML across FS, healthcare, and retail.
        </p>

        <div className="flex mt-4 space-x-2">
          <a
            href="https://github.com/saish20"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-3 py-1 rounded text-sm"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/saish-mayekar-a9505121/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm"
          >
            LinkedIn
          </a>
        </div>

        <div className="mt-8">
          <a
            href="/Saish_Mayekar_Resume.pdf"
            download
            className="text-black font-semibold text-sm hover:underline"
          >
            📄 Download Resume
          </a>
        </div>
      </div>

      {/* Right: Main Content */}
      <section className="px-6 py-8 w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">My Journey</h2>

        {/* Top Grid */}
        <div className="grid grid-cols-3 gap-4 auto-rows-[250px]">
          <div className="bg-white rounded-lg p-4 shadow">
            <TimelineCard section="experience" />
          </div>

          <div className="bg-white rounded-lg p-4 shadow">
            <TimelineCard section="education" />
          </div>

          <div className="bg-white rounded-lg p-4 shadow flex flex-col row-span-2">
            <h3 className="text-lg font-semibold mb-3">Have questions about Saish?</h3>
            <p className="text-sm text-gray-600 mb-4">
              Curious about Saish’s journey in tech? Want to know what Saish has really worked on?
              From bold career moves to cutting-edge projects, ask me anything and get instant answers,
              straight from the source (well, almost).
            </p>
            <AskMeAnythingWidget />
          </div>

          {/* Skills Section (2-column span) */}
          <SkillsCard />
        </div>

        {/* Recent Projects (add spacing from above) */}
        <div className="bg-white rounded-lg p-4 shadow col-span-2 mt-4">
          <h3 className="text-lg font-semibold mb-4">Recent Side Projects</h3>

          {/* Project 1: Clinical Trials Research Assistant */}
          <div className="mb-6">
            <h4 className="text-md font-semibold text-blue-700 mb-1">
              Clinical Trials Research Assistant
            </h4>
            <p className="text-sm text-gray-700 mb-1">
              An AI-powered research agent to search clinical trials by condition/location, extract summarized insights using LLMs, and interactively query trial details — all through a Streamlit interface.
            </p>
            <div className="text-sm space-x-4 mt-1">
              <a
                href="https://github.com/saish20/clinical-trials-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://clinical-trials-agent-g98xw7jjgxjwf7j8wtxvhl.streamlit.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live App
              </a>
            </div>
          </div>

          {/* Project 2: AI Education Agent (placeholder) */}
          <div>
            <h4 className="text-md font-semibold text-blue-700 mb-1">
              AI-Education Agent
            </h4>
            <p className="text-sm text-gray-500 italic mb-1">
              Description coming soon.
            </p>
            <div className="text-sm space-x-4 mt-1">
              <a
                href="https://github.com/saish20/AI-Education_Agent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://ai-education-agent-1.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Live App
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
