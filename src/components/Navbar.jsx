const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="text-xl font-semibold text-gray-800">Doraemon</span>
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#home" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#characters" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Characters</a>
            <a href="#gadgets" className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Gadgets</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;