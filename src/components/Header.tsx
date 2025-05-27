
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-midnight-900/95 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ae014e9a-2157-420c-b4f1-12f2a08d9edd.png" 
              alt="SceneShop" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#product" className="text-gray-300 hover:text-white transition-colors">
              Product
            </a>
            <a href="#technology" className="text-gray-300 hover:text-white transition-colors">
              Technology
            </a>
            <a href="#use-cases" className="text-gray-300 hover:text-white transition-colors">
              Use Cases
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="btn-secondary">
              Request Demo
            </Button>
            <Button className="btn-primary">
              Download Brief
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-gray-300 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-midnight-800 rounded-lg mt-2">
              <a 
                href="#product" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Product
              </a>
              <a 
                href="#technology" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </a>
              <a 
                href="#use-cases" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full btn-secondary">
                  Request Demo
                </Button>
                <Button className="w-full btn-primary">
                  Download Brief
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
