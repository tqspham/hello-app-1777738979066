export default function Navigation() {
  return (
    <nav className="w-full bg-white shadow-sm border-b border-gray-200" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:outline-none"
          >
            Skip to main content
          </a>
          <div className="flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-900 font-semibold text-lg outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-all duration-200"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-all duration-200"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-all duration-200"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded transition-all duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
