/**
 * Footer Component - Lightweight, professional footer
 */
export const Footer = () => {
  return (
    <footer className="bg-darkTeal text-white py-6 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* About */}
          <div>
            <h4 className="font-bold mb-2">Body Like Tea</h4>
            <p className="text-xs text-white text-opacity-70">
              Your personalized fitness and nutrition calculator
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold mb-2 text-sm">Product</h4>
            <ul className="text-xs text-white text-opacity-70 space-y-1">
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  Calculator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  Features
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold mb-2 text-sm">Resources</h4>
            <ul className="text-xs text-white text-opacity-70 space-y-1">
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold mb-2 text-sm">Legal</h4>
            <ul className="text-xs text-white text-opacity-70 space-y-1">
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white border-opacity-20 pt-4">
          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs text-white text-opacity-60">
            <p>&copy; 2024 Body Like Tea. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-pink-300 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-pink-300 transition">
                Instagram
              </a>
              <a href="#" className="hover:text-pink-300 transition">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
