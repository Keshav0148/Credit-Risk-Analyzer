import { Brain } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">Credit Risk Analyzer</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
            <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600">Testimonials</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;