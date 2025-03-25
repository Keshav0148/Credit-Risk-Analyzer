import { Brain, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Credit Risk Analyzer</span>
            </div>
            <p className="text-gray-400">
              Empowering lenders with AI-driven credit risk analysis solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-blue-400">Features</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400">Testimonials</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">info@creditrisk.ai</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">+91 637009XXXX</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-400">National Institute of Technology,Rourkela</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Credit Risk Analyzer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;