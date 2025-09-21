import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Card } from '../ui/Card';
import WorldMapImage from '../../assets/World-Map-Transparent-Image.png';

interface RealTimeRevenueMapProps {
  className?: string;
}

export const RealTimeRevenueMap = ({ className = '' }: RealTimeRevenueMapProps) => {
  const [liveRevenue, setLiveRevenue] = useState(378952);
  const [activeConnections, setActiveConnections] = useState(1247);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveRevenue(prev => prev + Math.floor(Math.random() * 500) + 100);
      setActiveConnections(prev => prev + Math.floor(Math.random() * 10) - 5);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const realtimeData = [
    { 
      city: 'New York', 
      lat: 20, 
      lng: 25, 
      revenue: 72840, 
      status: 'high', 
      transactions: 234,
      avgOrder: 312
    },
    { 
      city: 'London', 
      lat: 15, 
      lng: 50, 
      revenue: 54230, 
      status: 'medium', 
      transactions: 189,
      avgOrder: 287
    },
    { 
      city: 'Singapore', 
      lat: 35, 
      lng: 75, 
      revenue: 61450, 
      status: 'high', 
      transactions: 198,
      avgOrder: 310
    },
    { 
      city: 'Tokyo', 
      lat: 18, 
      lng: 80, 
      revenue: 45780, 
      status: 'medium', 
      transactions: 156,
      avgOrder: 293
    },
    { 
      city: 'Sydney', 
      lat: 70, 
      lng: 85, 
      revenue: 25340, 
      status: 'low', 
      transactions: 87,
      avgOrder: 291
    }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              Live Revenue Tracking
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Real-time revenue stream from global markets
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400 font-mono">
              {formatCurrency(liveRevenue)}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {activeConnections} active sessions
            </div>
          </div>
        </div>

        {/* Real-time World Map */}
        <div className="relative bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50 dark:from-indigo-900/30 dark:via-blue-900/20 dark:to-cyan-900/20 rounded-xl h-80 mb-6 overflow-hidden border border-blue-200 dark:border-blue-700">
          <img 
            src={WorldMapImage} 
            alt="Live Revenue Map" 
            className="w-full h-full object-contain opacity-70 dark:opacity-50"
          />
          
          {/* Live Transaction Points */}
          <div className="absolute inset-0">
            {realtimeData.map((location, index) => (
              <div
                key={location.city}
                className="absolute"
                style={{
                  top: `${location.lat}%`,
                  left: `${location.lng}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative group cursor-pointer">
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 rounded-full animate-ping" style={{
                    backgroundColor: location.status === 'high' ? '#B692C2' :
                    location.status === 'medium' ? '#E3A5C7' : '#FFDFD6'
                  }}></div>
                  
                  {/* Main Dot */}
                  <div className="relative w-6 h-6 rounded-full shadow-lg flex items-center justify-center" style={{
                    backgroundColor: location.status === 'high' ? '#694F8E' :
                    location.status === 'medium' ? '#B692C2' : '#E3A5C7'
                  }}>
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Hover Info Card */}
                  <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-3 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                    <div className="font-semibold">{location.city}</div>
                    <div className="text-sm">{formatCurrency(location.revenue)}</div>
                    <div className="text-xs opacity-80">{location.transactions} transactions</div>
                    <div className="text-xs opacity-80">Avg: {formatCurrency(location.avgOrder)}</div>
                    {/* Arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-white"></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Animated Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="liveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.6"/>
                  <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.4"/>
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.6"/>
                </linearGradient>
              </defs>
              
              {/* Data flow lines */}
              <motion.path 
                d="M 100 64 Q 200 40 300 56" 
                stroke="url(#liveGradient)" 
                strokeWidth="2" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <motion.path 
                d="M 200 48 Q 280 30 340 64" 
                stroke="url(#liveGradient)" 
                strokeWidth="1.5" 
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />
            </svg>
          </div>
        </div>

        {/* Live Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg border" style={{ backgroundColor: '#FFDFD6', borderColor: '#E5E7EB' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Active Markets</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">5</p>
              </div>
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#FFDFD6' }}></div>
            </div>
          </div>
          
          <div className="p-4 rounded-lg border" style={{ backgroundColor: '#E3A5C7', borderColor: '#E5E7EB' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Transactions/Min</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">47</p>
              </div>
              <i className="fas fa-credit-card text-gray-700"></i>
            </div>
          </div>
          
          <div className="p-4 rounded-lg border" style={{ backgroundColor: '#B692C2', borderColor: '#E5E7EB' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white dark:text-gray-200">Avg Order</p>
                <p className="text-2xl font-bold text-white dark:text-gray-100">$298</p>
              </div>
              <i className="fas fa-shopping-bag text-white"></i>
            </div>
          </div>
          
          <div className="p-4 rounded-lg border" style={{ backgroundColor: '#694F8E', borderColor: '#E5E7EB' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white dark:text-gray-200">Peak Hour</p>
                <p className="text-xl font-bold text-white dark:text-gray-100">14:00 UTC</p>
              </div>
              <i className="fas fa-clock text-white"></i>
            </div>
          </div>
        </div>

        {/* Live Revenue Feed */}
        <div>
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <i className="fas fa-stream mr-2 text-indigo-500"></i>
            Live Market Performance
          </h4>
          <div className="space-y-3 max-h-40 overflow-y-auto">
            {realtimeData.map((location, index) => (
              <motion.div
                key={`live-${location.city}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{
                    backgroundColor: location.status === 'high' ? '#694F8E' :
                    location.status === 'medium' ? '#B692C2' : '#E3A5C7'
                  }}></div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {location.city}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {location.transactions} transactions • Avg: {formatCurrency(location.avgOrder)}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-gray-900 dark:text-white font-mono">
                    {formatCurrency(location.revenue)}
                  </div>
                  <div className="text-sm flex items-center" style={{
                    color: location.status === 'high' ? '#694F8E' :
                    location.status === 'medium' ? '#B692C2' : '#E3A5C7'
                  }}>
                    <i className={`fas ${
                      location.status === 'high' ? 'fa-arrow-up' :
                      location.status === 'medium' ? 'fa-minus' : 'fa-arrow-down'
                    } mr-1 text-xs`}></i>
                    {location.status.toUpperCase()}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};
