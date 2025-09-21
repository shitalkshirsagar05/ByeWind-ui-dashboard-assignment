/**
 * TypeScript type definitions for the Juspay Dashboard application
 * 
 * This file contains all interface definitions used throughout the application
 * for type safety and better development experience.
 * 
 * @author Juspay Dashboard Team
 * @version 1.0.0
 */

// =============================================================================
// CORE DATA INTERFACES
// =============================================================================
/**
 * Interface for Key Performance Indicator card data
 * Used in dashboard KPI cards to display metrics with trends
 */
export interface KPIData {
  id: number;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
  bgColor: string;
}

/**
 * Interface for projection analytics data
 * Contains forecasting data compared with actual performance
 */
export interface ProjectionData {
  month: string;
  projections: number;
  actuals: number;
  confidence?: number;
  variance?: number;
}

/**
 * Interface for revenue trend analysis
 * Compares current period revenue with previous period
 */
export interface RevenueData {
  month: string;
  current: number;
  previous: number;
}

/**
 * Interface for sales channel performance data
 * Shows sales metrics across different channels
 */
export interface SalesData {
  name: string;
  value: number;
  color: string;
  trend?: string;
}

/**
 * Interface for geographical location sales data
 * Represents sales performance by city and country
 */
export interface LocationData {
  city: string;
  value: string;
  country: string;
}

/**
 * Interface for product sales information
 * Contains product details with pricing and sales metrics
 */
export interface ProductData {
  id: number;
  name: string;
  price: string;
  quantity: number;
  amount: string;
}

/**
 * Interface for system notifications
 * Represents different types of user alerts and messages
 */
export interface NotificationData {
  id: number;
  avatar: string;
  name: string;
  time: string;
  isActive: boolean;
}

/**
 * Interface for user activity feed
 * Tracks user actions and system events with timestamps
 */
export interface ActivityData {
  id: number;
  image: string;
  title: string;
  time: string;
}

/**
 * Interface for contact/user information
 * Represents user profiles with online status
 */
export interface ContactData {
  id: number;
  name: string;
  avatar: string;
}

/**
 * Interface for order management data
 * Contains comprehensive order information with user details and status
 */
export interface OrderData {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: string;
  active?: boolean;
  checked?: boolean;
}

/**
 * Interface for navigation menu items
 * Defines sidebar menu structure with icons and submenus
 */
export interface MenuItem {
  id: string;
  label: string;
  /** FontAwesome icon component */
  icon: any;
  /** Whether this menu item has expandable submenu */
  hasSubmenu: boolean;
  /** Optional array of submenu item labels */
  submenu?: string[];
}
