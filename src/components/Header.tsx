import * as React from "react";
import { Link } from "gatsby";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed z-10 w-full bg-slate-100">
      <nav className="max-w-screen-sm md:max-w-screen-md mx-auto sm:flex sm:justify-between sm:items-center">
        <div className="flex items-center justify-between px-4 py-4">
          <h1 className="font-bold text-2xl">
            <Link to="/">Sahel Iqbal</Link>
          </h1>
          <div className="sm:hidden">
            <button
              onClick={toggle}
              type="button"
              className="block text-gray-600 hover:text-black md:hidden"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        <div
          className={
            "px-2 pb-4 " +
            (isOpen ? "block" : "hidden") +
            " sm:flex sm:px-4 sm:py-4"
          }
        >
          {NavbarLinks.map((navitem) => (
            <a
              key={navitem.title}
              href={navitem.address}
              className="block px-2 py-2 font-semibold rounded hover:bg-gray-200"
            >
              {navitem.title}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

const NavbarLinks = [
  {
    title: "About",
    address: "#about",
  },
  {
    title: "Preprints",
    address: "#preprints",
  },
  {
    title: "Publications",
    address: "#publications",
  },
];

export default Header;
