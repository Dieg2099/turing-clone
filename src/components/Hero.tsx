import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">AI & Data Science Research</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          The UK's national institute for artificial intelligence and data science.
        </p>
        <button className="mt-8 bg-white text-blue-900 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;