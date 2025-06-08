import React from "react";
import { experience } from "../data/experience";
import { education } from "../data/education";

export default function TimelineCard({ section }) {
  const data = section === "experience" ? experience : education;
  const color = section === "experience" ? "blue" : "green";
  const title = section === "experience" ? "Experience" : "Education";

  return (
    <div>
      <h3 className={`text-lg font-semibold mb-3 text-${color}-900`}>{title}</h3>
      <ul className="space-y-2">
        {data.map((item, index) => (
          <li
            key={index}
            className={`pl-4 relative text-${color}-700 font-medium text-sm`}
          >
            <span
              className={`absolute left-0 top-1 w-2 h-2 bg-${color}-600 rounded-full`}
            />
            {section === "experience" ? item.company : item.institution}
          </li>
        ))}
      </ul>
    </div>
  );
}
