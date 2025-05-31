import React from 'react';

const NewsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border rounded p-4">
            <h3 className="text-xl font-semibold mb-2">AI Ethics Initiative Launched</h3>
            <p className="text-sm text-gray-600">April 5, 2025</p>
            <p>The Turing announces new research into responsible AI practices with leading institutions.</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="text-xl font-semibold mb-2">New Fellowship Programme Open</h3>
            <p className="text-sm text-gray-600">March 28, 2025</p>
            <p>Applications are now open for the 2025 Turing AI Fellowship programme.</p>
          </div>
          <div className="border rounded p-4">
            <h3 className="text-xl font-semibold mb-2">Annual Conference Announced</h3>
            <p className="text-sm text-gray-600">March 20, 2025</p>
            <p>Join us this June for our annual conference on data science innovation and impact.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;