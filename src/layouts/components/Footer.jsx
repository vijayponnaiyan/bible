import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo or Brand */}
            <div className="mb-4 md:mb-0">
              <h1 className="text-lg font-semibold text-white">YourCompany</h1>
              <p className="text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Footer Links */}
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">
                About
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
            </div>
          </div>

          {/* Bottom Social Links or Disclaimer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Built with ❤️ using React & Tailwind CSS.
          </div>
        </div>
      </footer>
    </>
  );
}
