import React from 'react';

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Research</h3>
            <p>Driving world-leading research in AI and data science across disciplines.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p>Bringing together academia, industry and government to solve real-world problems.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Training the next generation of researchers and practitioners in AI and data science.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;