import { Link } from "react-router-dom";
import Button from "../Button.jsx";
import { IoClose, IoMenu } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { FaBlog } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider.jsx";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // To show the navbar shadow after scroll
  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handelScroll);
    return () => {
      window.addEventListener("scroll", handelScroll);
    };
  }, []);

  const navItems = [
    { link: "Home", path: "/" },
    { link: "Media", path: "/media" },
    { link: "Message", path: "/details" },
    { link: "About", path: "/about" },
    { link: "Blog", path: "/blog" },
  ];

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 z-50">
      <nav className="text-white bg-black">
        <div className="flex items-center font-medium justify-around">
          <div className="flex items-center justify-between z-50 md:w-auto w-full p-5 md:p-0">
            <div className="flex items-center">
              <Link
                to="/"
                className={`text-3xl font-bold flex items-center gap-2  ${
                  sticky ? "text-orange-500" : "text-orange-500"
                }`}
              >
                <FaBlog className="inline-block" />
                Blog Media
              </Link>
            </div>
            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
              {open ? <IoClose className="text-black" /> : <IoMenu />}
            </div>
          </div>
          <ul className="md:flex hidden uppercase items-center gap-8 font-mono">
            {/* <li>
                        <Link to='/' className='py-7 px-3 inline-block'>
                            <h1>Home</h1>
                        </Link>
                    </li> */}
            {navItems.map(({ link, path }) => (
              <li key={path} className={`py-5 px-3 inline-block`}>
                <Link to={path}>{link}</Link>
              </li>
            ))}
            {/* <NavLinks /> */}
          </ul>
          <div className="md:block hidden">
            {/* Dropdown menu */}
            <div className="relative inline-block text-left">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500  bg-orange-500"
                onClick={toggleDropdown}
              >
                {user ? (
                  <>
                    <div className="flex items-center justify-between">
                      <p>Account</p>
                      <img
                        className="h-7 w-7 rounded-full ml-4"
                        src={user?.photoURL}
                        alt=""
                      />
                    </div>
                  </>
                ) : (
                  "Account"
                )}
              </button>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-2xl  bg-white ring-2 ring-black ring-opacity-5">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    {user ? (
                      <>
                        <Link
                          to="/about"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          onClick={() => setIsOpen(false)}
                        >
                          Profile
                        </Link>
                        <button
                          onClick={() => {
                            handleLogout(), setIsOpen(false);
                          }}
                          className="text-left w-40 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          to="/login"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          onClick={() => setIsOpen(false)}
                        >
                          Login
                        </Link>
                        <Link
                          to="/signup"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                          onClick={() => setIsOpen(false)}
                        >
                          Registration
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Nav */}
          <ul
            className={`
        md:hidden bg-white text-black fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%] -z-10"}
        `}
          >
            <div className="py-5">
              {/* Dropdown menu */}
              <div className="relative inline-block text-left">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500  bg-orange-500"
                  onClick={toggleDropdown}
                >
                  {user ? (
                    <>
                      <div className="flex items-center justify-between">
                        <p>Account</p>
                        <img
                          className="h-7 w-7 rounded-full ml-4"
                          src={user?.photoURL}
                          alt=""
                        />
                      </div>
                    </>
                  ) : (
                    "Account"
                  )}
                </button>

                {isOpen && (
                  <div className="origin-top-right absolute -right-10 mt-2 w-40 rounded-md shadow-2xl  bg-white ring-2 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {user ? (
                        <>
                          <Link
                            to="/about"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                          >
                            Profile
                          </Link>
                          <button
                            onClick={() => {
                              handleLogout(), setIsOpen(false);
                            }}
                            className="text-left w-40 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          >
                            Logout
                          </button>
                        </>
                      ) : (
                        <>
                          <Link
                            to="/login"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                          >
                            Login
                          </Link>
                          <Link
                            to="/signup"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => setIsOpen(false)}
                          >
                            Registration
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Links */}
            {navItems.map(({ link, path }) => (
              <li
                onClick={() => setOpen(!open)}
                className="py-7 px-3"
                key={path}
              >
                <Link to={path}>{link}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
