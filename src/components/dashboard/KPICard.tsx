import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faArrowTrendUp,
  faArrowTrendDown
} from '@fortawesome/free-solid-svg-icons';
import { KPIData } from '../../types';
import { useTheme } from '../../hooks/useTheme';

/**
 * Props interface for KPICard component
 * Extends the base KPIData interface
 */
interface KPICardProps extends KPIData {}

/**
 * KPICard Component
 * 
 * Displays key performance indicators with animated hover effects and theme support.
 * Shows metric value, change percentage, and visual trend indicators.
 * 
 * @param label - The metric label (e.g., 'Customers', 'Revenue')
 * @param value - The current metric value
 * @param change - The percentage change from previous period
 * @param isPositive - Whether the change is positive or negative
 * @param bgColor - Background color for the card
 * @returns JSX.Element
 */
export const KPICard = React.memo(({ label, value, change, isPositive, bgColor }: KPICardProps) => {
  const { darkMode } = useTheme();
  
  /**
   * Get background color based on theme and card type
   * In dark mode, Orders and Revenue cards use #52575D
   */
  const getBackgroundColor = (bgColor: string, darkMode: boolean) => {
    if (darkMode && bgColor === '#DEBACE') {
      // Orders and Revenue cards in dark mode
      return '#52575D';
    }
    return bgColor;
  };

  const backgroundColor = getBackgroundColor(bgColor, darkMode);

  /**
   * Determine text colors based on background color for optimal readability
   */
  const getTextColors = (bgColor: string) => {
    switch (bgColor) {
      case '#FBFACD': // Light cream - needs dark text
        return {
          value: 'text-gray-900',
          title: 'text-gray-700',
          change: isPositive ? 'text-green-700' : 'text-red-700'
        };
      case '#DEBACE': // Light mauve - Orders and Revenue cards with white text
        return {
          value: 'text-white',
          title: 'text-white',
          change: isPositive ? 'text-green-300' : 'text-red-300'
        };
      case '#52575D': // Dark mode Orders and Revenue cards - white text
        return {
          value: 'text-white',
          title: 'text-white',
          change: isPositive ? 'text-green-300' : 'text-red-300'
        };
      case '#BA94D1': // Medium purple - Revenue card with white text (legacy)
        return {
          value: 'text-white',
          title: 'text-white',
          change: isPositive ? 'text-green-300' : 'text-red-300'
        };
      case '#7F669D': // Dark purple - Growth card with white text
        return {
          value: 'text-white',
          title: 'text-gray-200',
          change: isPositive ? 'text-green-300' : 'text-red-300'
        };
      default: // Fallback for any other colors
        return {
          value: 'text-gray-900 dark:text-white',
          title: 'text-gray-600 dark:text-gray-300',
          change: isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
        };
    }
  };

  const textColors = getTextColors(backgroundColor);

  return (
    <div 
      className="h-full group cursor-pointer"
      role="article"
      aria-label={`${label}: ${value}, ${change} change`}
      tabIndex={0}
    >
        <div 
          className="p-6 h-full flex flex-col justify-between transition-all duration-300 ease-in-out rounded-xl shadow-sm border border-gray-200 group-hover:shadow-xl group-hover:scale-105 group-hover:border-gray-300 group-hover:shadow-purple-200/50 transform focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          style={{ background: backgroundColor }}
        >
        <div className="flex items-center justify-between mb-4">
          {/* Trending Arrow Icon */}
          <div className={`${textColors.value} opacity-60`}>
            <FontAwesomeIcon 
              icon={isPositive ? faArrowTrendUp : faArrowTrendDown} 
              className="w-6 h-6" 
            />
          </div>
          
          {/* Change Percentage */}
          <div 
            className={`flex items-center text-sm font-medium ${textColors.change}`}
            aria-label={`Change: ${change} ${isPositive ? 'increase' : 'decrease'}`}
          >
            {change}
          </div>
        </div>
        
        <div>
            <div className={`text-2xl font-bold mb-1 ${textColors.value}`}>
            {value}
          </div>
          <div className={`text-sm ${textColors.title}`}>
            {label}
          </div>
        </div>
      </div>
    </div>
  );
});