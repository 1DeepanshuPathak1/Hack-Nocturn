
function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <nav className="navbar glass">
        <div className="flex justify-between">
          <div className="nav-logo flex">Hack-Nocturn</div>
          <div className="nav-links hidden md:flex">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#faq">FAQ</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="md:hidden flex">
            <button
              className="bg-transparent"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="pb-3 space-y-1 text-center" onClick={() => { setIsMenuOpen(!isMenuOpen)}}>
            <a href="#land" className="block text-white">Home</a>
            <a href="#about" className="block text-white">About</a>
            <a href="#faq" className="block text-white">FAQ</a>
            <a href="#sponsors" className="block text-white">Sponsors</a>
            <a href="#contact" className="block text-white">Contact</a>
          </div>
        )}
      </nav>
    );
}

export {NavBar};