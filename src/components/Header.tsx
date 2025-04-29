
import { ChevronDown, GraduationCap, Menu, Search, University, Calculator,Newspaper, UserRound } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

          {/* More dropdown for desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="font-medium flex items-center">
                More <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel>Educational Resources</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link to="/universities" className="flex items-center w-full">
                    <University className="mr-2 h-4 w-4" /> Universities
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/programs" className="flex items-center w-full">
                    <GraduationCap className="mr-2 h-4 w-4" /> Programs
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuGroup>
                <DropdownMenuLabel>Tools</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link to="/cost-calculator" className="flex items-center w-full">
                    <Calculator className="mr-2 h-4 w-4" /> Cost Calculator
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/revenue-calculator" className="flex items-center w-full">
                    <Calculator className="mr-2 h-4 w-4" /> Revenue Calculator
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              
              <DropdownMenuSeparator />
              
              <DropdownMenuItem>
                <Link to="/news" className="flex items-center w-full">
                  <Newspaper className="mr-2 h-4 w-4" /> Latest News
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        <div className="flex items-center space-x-3">
          {/* Search dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Search scholarships">
                <Search className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <div className="p-2">
                <input 
                  type="search" 
                  placeholder="Search universities, programs, news..." 
                  className="w-full border rounded-md p-2 text-sm"
                />
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Popular: Scholarships</DropdownMenuItem>
              <DropdownMenuItem>Popular: Universities</DropdownMenuItem>
              <DropdownMenuItem>Popular: Programs</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User login options */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Login options">
                <UserRound className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link to="/student-login" className="w-full">Login as Student</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/partner-login" className="w-full">Login as Partner</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile menu trigger */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85%]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md">
                  Home
                </Link>
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md">
                  About
                </Link>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium p-2 hover:bg-gray-100 rounded-md">
                  Contact
                </Link>
                
                <div className="border-t border-gray-200 my-2"></div>
                <p className="text-sm font-bold text-gray-500">Educational Resources</p>
                
                <Link to="/universities" onClick={() => setMobileMenuOpen(false)} className="text-base p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <University className="mr-2 h-4 w-4" /> Universities
                </Link>
                <Link to="/programs" onClick={() => setMobileMenuOpen(false)} className="text-base p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <GraduationCap className="mr-2 h-4 w-4" /> Programs
                </Link>
                
                <div className="border-t border-gray-200 my-2"></div>
                <p className="text-sm font-bold text-gray-500">Tools</p>
                
                <Link to="/cost-calculator" onClick={() => setMobileMenuOpen(false)} className="text-base p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <Calculator className="mr-2 h-4 w-4" /> Cost Calculator
                </Link>
                <Link to="/revenue-calculator" onClick={() => setMobileMenuOpen(false)} className="text-base p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <Calculator className="mr-2 h-4 w-4" /> Revenue Calculator
                </Link>
                <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="text-base p-2 hover:bg-gray-100 rounded-md flex items-center">
                  <News className="mr-2 h-4 w-4" /> Latest News
                </Link>
                
                <div className="border-t border-gray-200 my-2"></div>
                <div className="flex flex-col gap-2">
                  <Link to="/student-login" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-scholar-primary p-2 hover:bg-gray-100 rounded-md">
                    Login as Student
                  </Link>
                  <Link to="/partner-login" onClick={() => setMobileMenuOpen(false)} className="text-base font-medium text-scholar-primary p-2 hover:bg-gray-100 rounded-md">
                    Login as Partner
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Check Your Scholarship button - hidden on mobile, visible on md+ screens */}
          <Button
            size="lg"
            className="hidden md:flex bg-scholar-primary hover:bg-scholar-primary/90 text-white font-bold"
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
