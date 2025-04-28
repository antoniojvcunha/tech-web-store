import { Link } from "wouter";


function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="../public/images/logo.png"
            className="h-8"
            alt="Flowbite Logo"
          />
        </Link>

        {/* Botão mobile */}
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu de navegação */}
        <div className="hidden w-full lg:flex lg:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 lg:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 rtl:space-x-reverse lg:mt-0 lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link to="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-blue-700 lg:p-0 dark:text-white dark:hover:text-blue-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Carrinho + Utilizador */}
        <div className="flex space-x-4 items-center">
          {/* Carrinho */}
          <Link to="/cart" className="relative inline-flex items-center text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">
            {/* Ícone do carrinho */}
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
            </svg>
            <span className="sr-only">Cart</span>
            {/* Badge */}
            <div className="absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
              3
            </div>
          </Link>

          {/* Utilizador dropdown */}
          <div className="relative">
            <button
              id="user-menu-button"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              className="flex text-sm rounded-full focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
              type="button"
            >
              {/* Ícone de utilizador */}
              <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A8.966 8.966 0 0112 15c2.485 0 4.735.994 6.379 2.621M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>

            {/* Dropdown menu */}
            <div
              id="user-dropdown"
              className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 absolute right-0"
            >
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 dark:text-white">Utilizador</span>
                <span className="block text-sm text-gray-500 truncate dark:text-gray-400">user@email.com</span>
              </div>
              <ul className="py-2" aria-labelledby="user-menu-button">
                <li>
                  <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link to="/logout" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
