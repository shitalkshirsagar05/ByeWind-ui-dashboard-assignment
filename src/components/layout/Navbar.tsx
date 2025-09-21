import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSearch,
  faMoon,
  faSun,
  faBell,
  faCog,
  faUser,
  faChevronRight,
  faTachometerAlt,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  currentPage: string;
}

export const Navbar = ({ darkMode, toggleDarkMode, currentPage }: NavbarProps) => {
  const getBreadcrumbs = (page: string) => {
    switch (page) {
      case 'default':
        return ['Dashboard', 'default'];
      case 'orders':
        return ['Dashboard', 'eCommerce'];
      case 'dashboard':
        return ['Dashboard'];
      default:
        return ['Dashboard'];
    }
  };

  const breadcrumbs = getBreadcrumbs(currentPage);

  return (
    <div className="bg-white dark:bg-black border-b border-accent-200 dark:border-dark-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <div key={crumb} className="flex items-center">
              <div className="flex items-center">
                {crumb === 'Dashboard' && (
                  <>
                    <FontAwesomeIcon 
                      icon={faTachometerAlt} 
                      className="w-4 h-4 mr-2 text-dark-600 dark:text-dark-text" 
                    />
                    <FontAwesomeIcon 
                      icon={faStar} 
                      className="w-4 h-4 mr-2 text-dark-600 dark:text-dark-text" 
                    />
                  </>
                )}
                <span className={`${
                  index === breadcrumbs.length - 1 
                    ? 'text-dark-900 dark:text-dark-text font-medium' 
                    : 'text-dark-500 dark:text-dark-text'
                }`}>
                  {crumb}
                </span>
              </div>
              {index < breadcrumbs.length - 1 && (
                <span className="mx-2 text-dark-400 font-medium">/</span>
              )}
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-dark-400 dark:text-gray-500" 
            />
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search"
              className="pl-10 pr-4 py-2 bg-[#F7EFE5] dark:bg-[#393E46] dark:text-white dark:placeholder-gray-400 border border-accent-200 dark:border-dark-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:border-transparent w-64"
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            {/* Dark mode toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
              className="p-2 rounded-lg hover:bg-accent-100 dark:hover:bg-gray-700 text-dark-600 dark:text-dark-text"
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="w-5 h-5" />
            </motion.button>

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Notifications"
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-dark-text relative"
            >
              <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent-600 rounded-full"></span>
            </motion.button>

            {/* Settings */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Settings"
              className="p-2 rounded-lg hover:bg-accent-100 dark:hover:bg-gray-700 text-dark-600 dark:text-dark-text"
            >
              <FontAwesomeIcon icon={faCog} className="w-5 h-5" />
            </motion.button>

            {/* Profile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Profile"
              className="p-2 rounded-lg hover:bg-accent-100 dark:hover:bg-gray-700 text-dark-600 dark:text-dark-text"
            >
              <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};