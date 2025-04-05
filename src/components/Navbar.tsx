
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-campus-700">CNIAS</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
            <Link to="/chatbot" className={`nav-link ${isActive('/chatbot')}`}>Chatbot</Link>
            <Link to="/navigation" className={`nav-link ${isActive('/navigation')}`}>Campus Navigation</Link>
            <Button 
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                window.location.href = '/login';
              }}
              variant="ghost" 
              className="ml-2"
            >
              Logout
            </Button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button 
              onClick={() => setIsOpen(!isOpen)} 
              variant="ghost" 
              size="icon"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col px-4 pt-2 pb-3 space-y-1 bg-white">
            <Link 
              to="/" 
              className={`px-3 py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/chatbot" 
              className={`px-3 py-2 rounded-md text-base font-medium ${isActive('/chatbot') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Chatbot
            </Link>
            <Link 
              to="/navigation" 
              className={`px-3 py-2 rounded-md text-base font-medium ${isActive('/navigation') ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}
              onClick={() => setIsOpen(false)}
            >
              Campus Navigation
            </Link>
            <Button 
              onClick={() => {
                localStorage.removeItem('isLoggedIn');
                window.location.href = '/login';
                setIsOpen(false);
              }} 
              variant="ghost" 
              className="justify-start px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
            >
              Logout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
