import { Link } from "wouter";
import { useEffect } from "react";
import { initDropdowns } from "flowbite";
import { useAuth } from "../auth/useAuth";
import LogoutButton from "../views/LogoutView";
import { useCart } from "../context/cart/useCart";



function Navbar() {
  const { user } = useAuth();
  const { cartItems } = useCart();
  const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


  useEffect(() => {
    initDropdowns();
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/images/logo.png" className="h-8" alt="Logo" />
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden w-full lg:flex lg:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-800 dark:border-gray-700">
            <li><Link to="/" className="nav-link hover:text-red-600">Home</Link></li>
            <li><Link to="/shop" className="nav-link hover:text-red-600">Shop</Link></li>
            <li><Link to="/aboutus" className="nav-link hover:text-red-600">About Us</Link></li>
            <li><Link to="/contactus" className="nav-link hover:text-red-600">Contact Us</Link></li>
          </ul>
        </div>

        <div className="flex space-x-4 items-center">
          <Link to="/cart" className="relative inline-flex items-center text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-blue-500">
            <svg className="w-6 h-" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            {totalCartItems > 0 && (
  <div className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
    {totalCartItems}
  </div>
)}
          </Link>

          <div className="relative ">
            <button
              id="dropDownHoverButton"
              data-dropdown-toggle="dropdownHover"
              data-dropdown-trigger="hover"
              data-dropdown-placement="bottom"
              className="flex text-sm rounded-full focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
            >
              <svg className="hover:text-red-600 w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A8.966 8.966 0 0112 15c2.485 0 4.735.994 6.379 2.621M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            <div
              id="dropdownHover"
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0"
            >
              <div className="px-4 py-3 ">
                <span className="block text-sm text-gray-900 dark:text-white">
                  {user ? user.name : "Username"}
                </span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                  {user ? user.email : "Sem sessão"}
                </span>
              </div>
              <ul className="py-2" aria-labelledby="dropdownHoverButton">
                {!user && (
                  <>
                    <li>
                      <Link to="/login" className="dropdown-link">Login</Link>
                    </li>
                    <li>
                      <Link to="/register" className="dropdown-link">Register</Link>
                    </li>
                  </>
                )}

                {user && (
                  <>
                    <li>
                      <Link to="/orders" className="dropdown-link">Orders</Link>
                    </li>
                    <li>
                      <LogoutButton className="dropdown-link cursor-pointer">Logout</LogoutButton>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
