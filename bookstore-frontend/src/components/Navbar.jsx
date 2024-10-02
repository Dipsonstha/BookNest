import React, { useState } from "react";
import { CiGlass, CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // const handleSearchSubmit = (e) => {
  //   e.preventDefault();
  //   navigate.push(`/search?query=${searchQuery}`);
  // };

  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  console.log(user);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-3 px-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <span className="ml-3 text-2xl font-semibold">BookNest</span>
          </Link>
        </div>

        {/* <div className="flex items-center w-full lg:w-auto">
          <form
            className="relative flex-grow lg:flex-grow-0"
            onSubmit={handleSearchSubmit}
          >
            <input
              type="search"
              className="w-full lg:w-80 py-2 pl-4 pr-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="What Are You Looking For?"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-2 mr-3 text-teal-500"
            >
              <FiSearch size={20} />
            </button>
          </form>
        </div> */}

        <nav className="flex items-center space-x-4 mt-4 lg:mt-0">
          <Link to="/" className="text-gray-900 hover:text-teal-500">
            HOME
          </Link>
          <Link to="/category" className="text-gray-900 hover:text-teal-500">
            CATEGORIES
          </Link>
          <Link to="/about" className="text-gray-900 hover:text-teal-500">
            ABOUT US
          </Link>
        </nav>

        {/* <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <Link to="/messages" className="text-blue-600 hover:text-teal-500">
            <AiOutlineMail size={24} />
          </Link>
          <Link to="/profile" className="text-gray-600 hover:text-teal-500">
            <CiUser size={24} />
          </Link>
          <Link to="/add" className="text-red-600 hover:text-teal-500">
            <AiOutlineUserAdd size={24} />
          </Link>
        </div> */}
        <ul className="flex space-x-4">
          {user?.role == "USER" ? (
            <ul className="flex space-x-4">
              <li className="nav-item">
                <Link
                  to="/"
                  onClick={(e) => {
                    localStorage.removeItem("user");
                  }}
                  className="flex items-center gap-2 px-2 text-gray-900 hover:text-teal-500"
                >
                  <CiUser />
                  Log Out
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/user/profile"
                  className="px-2 text-gray-900 hover:text-teal-500"
                >
                  Profile
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="flex space-x-4">
              <li className="nav-item">
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-2 text-gray-900 hover:text-teal-500"
                >
                  <CiUser />
                  Log in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/register"
                  className="px-2 text-gray-900 hover:text-teal-500"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
