
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-scholar-text">ScholarAI</h3>
            <p className="text-gray-600">
              Connecting students with scholarship opportunities through AI-powered matching.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-scholar-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-scholar-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-scholar-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/scholarships" className="text-gray-600 hover:text-scholar-primary">
                  Scholarships
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-scholar-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-scholar-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-700 mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-scholar-primary">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-scholar-primary">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-scholar-primary">
                Facebook
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} ScholarAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
