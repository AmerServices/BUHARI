import React from "react";
import { other } from "../data/other";

interface ContentBlock {
  type: "paragraph" | "heading" | "list" | string;
  text?: string;
  level?: number;
  items?: Record<string, string>;
}

const renderContent = (content: Record<string, ContentBlock>) => {
  return Object.values(content).map((block, index) => {
    switch (block.type) {
      case "paragraph":
        return (
          <p key={index} className="mb-4">
            {block.text}
          </p>
        );

      case "heading":
        if (block.level === 2) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold mt-8 mb-4 text-gray-900"
            >
              {block.text}
            </h2>
          );
        }
        return (
          <h3
            key={index}
            className="text-xl font-semibold mt-6 mb-3 text-gray-800"
          >
            {block.text}
          </h3>
        );

      case "list":
        return (
          <ul key={index} className="list-disc list-inside ml-6 mb-4">
            {Object.entries(block.items || {}).map(([key, item]) => (
              <li key={key}>{item}</li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  });
};

const Privacy = () => {

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-12 max-w-5xl mx-auto pt-44 md:pt-52 lg:pt-56 2xl:pt-64">
      {/* Terms Section */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-extrabold uppercase mb-6 text-gray-900">
          {other.privacy.heading}
        </h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          {renderContent(other.privacy.content)}
        </div>
      </section>
    </div>
  );
};

export default Privacy;
