import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; 

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [role, setRole] = useState(localStorage.getItem("role"));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateAuth = () => {
      setToken(localStorage.getItem("token"));
      setRole(localStorage.getItem("role"));
    };

    window.addEventListener("authChange", updateAuth);
    return () => window.removeEventListener("authChange", updateAuth);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-md fixed left-0 top-0 w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div
            className="flex items-center space-x-2 sm:space-x-3 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="Fraud.svg"
              alt="Fraud Logo"
              className="w-20 h-15 sm:w-20 sm:h-15 object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
              Fraud Innovations
            </h1>
          </div>



        <button
          onClick={toggleMenu}
          className="sm:hidden text-gray-700 focus:outline-none"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>


        <div className="hidden sm:flex items-center space-x-6">
          <NavLinks
            role={role}
            token={token}
            handleLogout={handleLogout}
          />
        </div>
      </div>


      {menuOpen && (
        <div className="sm:hidden bg-white shadow-inner flex flex-col items-center space-y-4 py-4">
          <NavLinks
            role={role}
            token={token}
            handleLogout={() => {
              handleLogout();
              setMenuOpen(false);
            }}
            closeMenu={() => setMenuOpen(false)}
          />
        </div>
      )}
    </nav>
  );
};


const NavLinks = ({ role, token, handleLogout, closeMenu }) => (
  <>
    <Link to="/" onClick={closeMenu} className="hover:text-blue-500">Home</Link>
    <Link to="/about" onClick={closeMenu} className="hover:text-blue-500">About</Link>
    <Link to="/Showcase" onClick={closeMenu} className="hover:text-blue-500">Showcase</Link>
    <Link to="/careers" onClick={closeMenu} className="hover:text-blue-500">Careers</Link>
    <Link to="/contact" onClick={closeMenu} className="hover:text-blue-500">Contact</Link>

    {role === "investor" && (
      <Link to="/investor-portal" onClick={closeMenu} className="hover:text-blue-500">
        Investor Portal
      </Link>
    )}

    {role === "hr" && (
      <Link to="/create-job" onClick={closeMenu} className="hover:text-blue-500">
        Add Job
      </Link>
    )}

    {!token ? (
      <div className="flex gap-3 flex-col sm:flex-row">
        <Link
          to="/login"
          onClick={closeMenu}
          className="bg-blue-600 text-white px-4 py-1 rounded-md hover:bg-blue-700 transition text-center"
        >
          Login
        </Link>
        <Link
          to="/signup"
          onClick={closeMenu}
          className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition text-center"
        >
          Sign Up
        </Link>
      </div>
    ) : (
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition"
      >
        Logout
      </button>
    )}
  </>
);

export default Navbar;
