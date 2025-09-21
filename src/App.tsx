import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from './components/layout/Sidebar';
import { Navbar } from './components/layout/Navbar';
import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { useTheme } from './hooks/useTheme';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  const [activeItem, setActiveItem] = useState('default');
  const { darkMode, toggleDarkMode } = useTheme();

  const renderContent = () => {
    switch (activeItem) {
      case 'default':
      case 'dashboard':
        return <Dashboard />;
      case 'ecommerce':
        return <Orders />;
      default:
        return <Dashboard />;
    }
  };

  const getCurrentPage = () => {
    switch (activeItem) {
      case 'default':
        return 'default';
      case 'ecommerce':
        return 'orders';
      default:
        return 'dashboard';
    }
  };

  return (
    <ErrorBoundary>
      <div className="h-screen bg-white dark:bg-black flex overflow-hidden">
        {/* Sidebar */}
        <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar 
            darkMode={darkMode} 
            toggleDarkMode={toggleDarkMode}
            currentPage={getCurrentPage()}
          />
          
          {/* Page Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex-1 flex overflow-hidden"
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </ErrorBoundary>
  );
}

export default App;