import { GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" aria-label="ScholarAI Homepage">
          <GraduationCap className="h-8 w-8 text-scholar-primary" aria-hidden="true" />
          <span className="text-2xl font-bold bg-gradient-to-r from-scholar-primary to-scholar-secondary bg-clip-text text-transparent">
            ScholarAI
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-scholar-primary font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-scholar-primary font-medium">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-scholar-primary font-medium">
            Contact
          </Link>
        </nav>
        <div>
          <button className="bg-scholar-primary text-white px-4 py-2 rounded-md hover:bg-scholar-primary/90 transition-colors" aria-label="Get started with ScholarAI">Login</button>
        </div>
      </div>
    </header>;
};
export default Header;