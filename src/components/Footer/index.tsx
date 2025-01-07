import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PC Builder</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Build your dream PC with our expert guidance and quality components.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="hover:text-primary-500">Shop</Link></li>
              <li><Link to="/build-pc" className="hover:text-primary-500">Build PC</Link></li>
              <li><Link to="/about" className="hover:text-primary-500">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-primary-500">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Email: info@pcbuilder.com</li>
              <li>Phone: +880 1234567890</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-500"><Facebook /></a>
              <a href="#" className="hover:text-primary-500"><Twitter /></a>
              <a href="#" className="hover:text-primary-500"><Instagram /></a>
              <a href="#" className="hover:text-primary-500"><Linkedin /></a>
              <a href="#" className="hover:text-primary-500"><Mail /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} PC Builder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;