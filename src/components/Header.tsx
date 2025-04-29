
import { GraduationCap, Menu, Search, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2" aria-label="ScholarAI Homepage">
            <GraduationCap className="h-8 w-8 text-scholar-primary" aria-hidden="true" />
            <span className="text-2xl font-bold bg-gradient-to-r from-scholar-primary to-scholar-secondary bg-clip-text text-transparent">
              ScholarAI
            </span>
          </Link>
        </div>

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

        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" aria-label="Search scholarships">
            <Search className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Login options">
                <UserRound className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/login" className="w-full">Login as Student</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/partner-login" className="w-full">Login as Partner</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </Button>

          <Button
            size="lg"
            className="hidden md:flex bg-scholar-accent text-black font-bold"
            onClick={() => window.location.href="/scholarship/name"}
          >
            Check Your Scholarship
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
