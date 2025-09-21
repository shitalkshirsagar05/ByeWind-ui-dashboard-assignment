import React, { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Profile picture is in public folder, so we'll reference it directly
import { 
  faBars,
  faShoppingCart,
  faProjectDiagram,
  faGraduationCap,
  faUser,
  faUserCog,
  faBuilding,
  faBlog,
  faShareAlt,
  faChevronRight,
  faEye,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';

/**
 * Props interface for the Sidebar component
 */
interface SidebarProps {
  /** Currently active menu item ID */
  activeItem: string;
  /** Callback function when menu item is clicked */
  onItemClick: (item: string) => void;
}

/**
 * Sidebar Navigation Component
 * 
 * A collapsible sidebar with multi-level navigation, smooth animations,
 * and proper accessibility features. Supports dark/light themes and
 * keyboard navigation.
 * 
 * Features:
 * - Collapsible design with smooth animations
 * - Multi-level menu support with expandable sections
 * - Dark/light theme support
 * - Keyboard navigation and screen reader support
 * - Hover and focus states
 * 
 * @param activeItem - Currently active menu item
 * @param onItemClick - Callback when menu item is clicked
 */
export const Sidebar = React.memo(({ activeItem, onItemClick }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  /**
   * Memoized menu configuration to prevent unnecessary re-renders
   * Contains all navigation sections and their respective items
   */
  const menuSections = useMemo(() => [
    {
      title: 'Favorites',
      items: [
        { id: 'overview', label: 'Overview', icon: faEye, hasSubmenu: false },
        { id: 'projects', label: 'Projects', icon: faProjectDiagram, hasSubmenu: false },
      ]
    },
    {
      title: 'Dashboards',
      items: [
        { id: 'default', label: 'Default', icon: faChartPie, hasSubmenu: false },
        { id: 'ecommerce', label: 'eCommerce', icon: faShoppingCart, hasSubmenu: false },
        { id: 'projects-dash', label: 'Projects', icon: faProjectDiagram, hasSubmenu: false },
        { id: 'courses', label: 'Online Courses', icon: faGraduationCap, hasSubmenu: false },
      ]
    },
    {
      title: 'Pages',
      items: [
        { 
          id: 'profile', 
          label: 'User Profile', 
          icon: faUser, 
          hasSubmenu: true,
          submenu: ['Overview', 'Projects', 'Campaigns', 'Documents', 'Followers']
        },
        { id: 'account', label: 'Account', icon: faUserCog, hasSubmenu: false },
        { id: 'corporate', label: 'Corporate', icon: faBuilding, hasSubmenu: false },
        { id: 'blog', label: 'Blog', icon: faBlog, hasSubmenu: false },
        { id: 'social', label: 'Social', icon: faShareAlt, hasSubmenu: false },
      ]
    }
  ], []);

  /**
   * Memoized callback to toggle submenu visibility
   * Prevents unnecessary re-renders of child components
   */
  const toggleSubmenu = useCallback((itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  }, []);

  return (
    <motion.nav
      animate={{ width: isCollapsed ? 64 : 256 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="h-screen bg-white dark:bg-black border-r border-accent-200 dark:border-dark-700 flex flex-col"
      role="navigation"
      aria-label="Main navigation"
    >
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <AnimatePresence mode="wait">
          {!isCollapsed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center space-x-2"
            >
              <img src="/profile picture.jpg" alt="Profile Picture" className="w-6 h-6 object-contain rounded-full" />
              <span className="font-bold text-lg text-dark-800 dark:text-dark-text">ByeWind</span>
            </motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-accent-100 dark:hover:bg-gray-700 text-dark-600 dark:text-dark-text focus:outline-none focus:ring-2 focus:ring-[#7F669D]"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          aria-expanded={!isCollapsed}
        >
          <FontAwesomeIcon icon={faBars} className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-2">
        <div className="space-y-1">
          {menuSections.map((section, sectionIndex) => (
            <div key={section.title}>
              {/* Section Header */}
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={`px-3 py-2 ${sectionIndex > 0 ? 'mt-6' : ''}`}
                  >
                    <span className="text-xs font-medium text-dark-500 dark:text-dark-text uppercase tracking-wider">
                      {section.title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Section Items */}
              {section.items.map(item => (
                <motion.div key={item.id} whileHover={{ x: 2 }} whileTap={{ scale: 0.98 }}>
                  <button
                    onClick={() => {
                      if (item.hasSubmenu) {
                        toggleSubmenu(item.id);
                      } else {
                        onItemClick(item.id);
                      }
                    }}
                    aria-label={item.hasSubmenu ? `${item.label} menu` : item.label}
                    aria-expanded={item.hasSubmenu ? expandedItems.includes(item.id) : undefined}
                    aria-current={activeItem === item.id ? 'page' : undefined}
                    className={`
                      w-full flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors
                      ${activeItem === item.id
                        ? `bg-secondary-100 text-dark-800 ${
                            item.id === 'default' 
                              ? 'dark:bg-[#393E46] dark:text-dark-text' 
                              : 'dark:bg-secondary-800/30 dark:text-dark-text'
                          }`
                        : 'text-dark-700 dark:text-dark-text hover:bg-accent-100 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4 flex-shrink-0" />
                    <AnimatePresence>
                      {!isCollapsed && (
                        <>
                          <motion.span
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="ml-3 flex-1 text-left"
                          >
                            {item.label}
                          </motion.span>
                          {item.hasSubmenu && (
                            <motion.div
                              animate={{ rotate: expandedItems.includes(item.id) ? 90 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
                            </motion.div>
                          )}
                        </>
                      )}
                    </AnimatePresence>
                  </button>

                  {/* Submenu */}
                  <AnimatePresence>
                    {!isCollapsed && item.hasSubmenu && expandedItems.includes(item.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-4 mt-1 space-y-1"
                      >
                        {item.submenu?.map(subItem => (
                          <motion.button
                            key={subItem}
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -10, opacity: 0 }}
                            className="w-full text-left px-3 py-1.5 text-sm text-dark-600 dark:text-dark-text hover:text-dark-800 dark:hover:text-gray-300 rounded-md hover:bg-accent-50 dark:hover:bg-gray-700"
                          >
                            {subItem}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </motion.nav>
  );
});