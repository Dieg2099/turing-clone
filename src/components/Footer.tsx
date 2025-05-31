import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">The Alan Turing Institute</h4>
            <p className="text-sm">
              British Library, 96 Euston Road, London, England, NW1 2DB, United Kingdom
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/sitemap" className="hover:underline">Putos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://twitter.com/AlanTuringInst"  className="hover:underline">Twitter</a></li>
              <li><a href="https://www.linkedin.com/company/the-alan-turing-institute/"  className="hover:underline">LinkedIn</a></li>
              <li><a href="https://github.com/alan-turing-institute"  className="hover:underline">GitHub</a></li>
            </ul>
          </div>
        </div>
        <hr className="my-6 border-gray-700" />
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} The Alan Turing Institute. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;