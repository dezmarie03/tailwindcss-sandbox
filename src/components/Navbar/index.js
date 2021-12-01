import React, {
  useEffect,
  useRef,
  useState
} from "react";

const Navbar = ({ items = [] }) => {
  const menuActivatorRef = useRef(null);
  const menuWrapperRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  // Handle opening/closing menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Handle keyboard events
  const menuKeyHandler = event => {
    // Define keys to listen for
    let actions = {
      arrowDown: event.key === "ArrowDown",
      enter: event.key === "Enter",
      escape: event.key === "Escape",
      shift: event.shiftKey,
      space: event.key === " ",
      tab: event.key === "Tab",
    }

    // Anywhere: Close the menu if Escape key is pressed
    if (showMenu && actions.escape) {
      toggleMenu();
    }

    // Expand menu if down arrow key is used on menu button
    if (!showMenu && (menuActivatorRef.current.contains(event.target) && actions.arrowDown)) {
      toggleMenu();
    }
  };

  // Handle clicks outside of menu
  const handleOutsideClick = event => {
    if (!menuWrapperRef.current.contains(event.target) && !menuActivatorRef.current.contains(event.target)) {
      toggleMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      if (menuWrapperRef) {
        menuWrapperRef.current.querySelector('a:first-of-type').focus();
      }
      document.addEventListener('click', handleOutsideClick);
    } else {
      document.removeEventListener('click', handleOutsideClick);
    }
  });

  const Logo = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 text-pink-600"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
  </svg>;

  let closedClasses = `hidden `;
  let openClasses = `fixed w-full bg-gray-100 p-3 -inset-x-0 mt-16 `;
  let barsIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-700">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
  </svg>;
  let closeIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-700">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>;

  return (
    <header className="fixed w-full h-16 bg-gray-100">
      <div className="flex max-w-6xl mx-auto px-4">
        <div className="mr-4">
          <a
            href="/"
            title="Home"
            className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-800"
          >
            {Logo}
            <span className="font-bold ml-1">
              Muse
            </span>
          </a>
        </div>
        <nav
          onKeyDown={menuKeyHandler}
          className="flex flex-grow justify-end"
        >
          <button
            onClick={toggleMenu}
            ref={menuActivatorRef}
            aria-expanded={showMenu}
            aria-haspopup="true"
            type="button"
            aria-label="Toggle navigation visibility"
            className="md:hidden"
            data-testid="navbar-menu-activator"
          >
            {showMenu ? closeIcon : barsIcon}
          </button>
          <div
            ref={menuWrapperRef}
            className={
              `${showMenu ? openClasses : closedClasses}
              md:flex flex-grow justify-between md:space-x-4`
            }
            data-testid="navbar-menu-items-wrapper"
          >
            <ul className="md:flex items-center md:space-x-4">
              {
                items.map((item, index) =>
                  <li key={index}>
                    <a href={item.url}
                      className="block py-5 px-3 text-gray-700 hover:text-gray-800"
                    >
                      {item.text}
                    </a>
                  </li>
                )
              }
            </ul>
            <ul className="md:flex items-center md:space-x-4">
              <li>
                <a
                  href="/account"
                  className="block py-5 px-3 text-pink-600 hover:text-pink-700"
                >
                  Log In
                </a>
              </li>
              <li className="py-3">
                <a
                  href="/signup"
                  className="py-2 px-3 bg-pink-600 hover:bg-pink-700 text-gray-50 hover:text-gray-50 rounded transition duration-300"
                >
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
