import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-bold text-blue-600">
          The Alan Turing Institute
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/research" className="hover:text-blue-500">Research</a></li>
            <li><a href="/about" className="hover:text-blue-500">About</a></li>
            <li><a href="/news" className="hover:text-blue-500">News</a></li>
            <li><a href="/contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;