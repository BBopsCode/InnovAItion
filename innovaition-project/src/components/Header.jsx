import React from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      <header className="flex justify-between items-center w-screen mr-3 p-5 relative z-50">
      <img
          src="/logos/InnovAItion.svg"
          alt="logo"
          className={`w-60 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "hidden" : ""}
          }`}
        />
        <img
          src="/logos/InnovAItion.svg"
          alt="logo"
          className={`w-60 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        />
        <div className="md:hidden">
          <button
            className="btn btn-ghost text-black text-3xl hover:bg-transparent border-none p-2 flex items-center justify-center w-12 h-12"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div className="hidden md:flex gap-4">
          <button className="btn btn-link no-underline text-black text-lg hover:bg-white border-none">
            Products
          </button>
          <button className="btn btn-link no-underline text-black text-lg hover:bg-white border-none">
            Vision
          </button>
          <button className="btn btn-link no-underline text-black text-lg hover:bg-white border-none">
            Contact
          </button>
          <button className="btn btn-primary bg-black text-white text-lg hover:bg-primary border-none">
            Follow
          </button>
        </div>
      </header>

      {/* Full-screen slide-down menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-2xl">
          <button
            className="btn btn-link no-underline text-black text-2xl hover:bg-gray-100 border-none"
            onClick={toggleMenu}
          >
            Products
          </button>
          <button
            className="btn btn-link no-underline text-black text-2xl hover:bg-gray-100 border-none"
            onClick={toggleMenu}
          >
            Vision
          </button>
          <button
            className="btn btn-link no-underline text-black text-2xl hover:bg-gray-100 border-none"
            onClick={toggleMenu}
          >
            Contact
          </button>
          <button
            className="btn btn-primary bg-black text-white text-2xl hover:bg-primary border-none px-8"
            onClick={toggleMenu}
          >
            Follow
          </button>
        </div>
      </div>

      {/* Backdrop */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
