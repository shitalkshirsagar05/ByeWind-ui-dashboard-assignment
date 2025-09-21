import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const Card = ({ children, className = '', hoverable = false }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`
        bg-white dark:bg-black rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 
        ${hoverable ? 'hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};