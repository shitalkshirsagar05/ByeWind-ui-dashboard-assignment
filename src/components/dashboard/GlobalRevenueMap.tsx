import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { LocationData } from '../../types';
import WorldMapImage from '../../assets/World-Map-Transparent-Image.png';

interface GlobalRevenueMapProps {
  data: LocationData[];
}

export const GlobalRevenueMap = ({ data }: GlobalRevenueMapProps) => {
  // Calculate total revenue
  const totalRevenue = data.reduce((sum, location) => {
    const value = parseInt(location.value.replace('k', ''));
    return sum + value;
  }, 0);

  // Get top 5 cities by revenue
  const topCities = data.slice(0, 5);

  return (
    <Card>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Global Revenue Distribution
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Real-time revenue tracking across {data.length} major cities
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
              ${totalRevenue}k
            </div>
            <div className="text-sm text-green-600 dark:text-green-400 flex items-center">
              <i className="fas fa-arrow-up mr-1"></i>
              +18.2% vs last month
            </div>
          </div>
        </div>
        
        {/* Enhanced World Map */}
        <div className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 rounded-xl h-72 mb-6 overflow-hidden shadow-inner">
          <img 
            src={WorldMapImage} 
            alt="Global Revenue Map" 
            className="w-full h-full object-contain opacity-70 dark:opacity-50"
          />
          
          {/* Interactive Revenue Hotspots */}
          <div className="absolute inset-0">
            {/* Tokyo */}
            <div className="absolute top-16 right-12 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative group cursor-pointer">
                <div className="w-5 h-5 rounded-full animate-pulse shadow-lg group-hover:scale-125 transition-transform" style={{ backgroundColor: '#FFDFD6' }}></div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Tokyo: $45k<br/>
                  <span className="text-green-400 dark:text-green-600">+8.3%</span>
                </div>
              </div>
            </div>
            
            {/* Mumbai */}
            <div className="absolute top-24 right-20 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative group cursor-pointer">
                <div className="w-3 h-3 rounded-full animate-pulse shadow-lg group-hover:scale-125 transition-transform" style={{ backgroundColor: '#E3A5C7' }}></div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Mumbai: $18k<br/>
                  <span className="text-green-400 dark:text-green-600">+12.1%</span>
                </div>
              </div>
            </div>
            
            {/* Berlin */}
            <div className="absolute top-10 left-1/2 transform -translate-x-8 -translate-y-1/2">
              <div className="relative group cursor-pointer">
                <div className="w-4 h-4 rounded-full animate-pulse shadow-lg group-hover:scale-125 transition-transform" style={{ backgroundColor: '#B692C2' }}></div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Berlin: $32k<br/>
                  <span className="text-green-400 dark:text-green-600">+6.7%</span>
                </div>
              </div>
            </div>
            
            {/* Toronto */}
            <div className="absolute top-12 left-24 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative group cursor-pointer">
                <div className="w-4 h-4 rounded-full animate-pulse shadow-lg group-hover:scale-125 transition-transform" style={{ backgroundColor: '#694F8E' }}></div>
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-3 py-1 rounded-lg text-xs font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  Toronto: $29k<br/>
                  <span className="text-green-400 dark:text-green-600">+4.9%</span>
                </div>
              </div>
            </div>

            {/* Connecting lines between major hubs */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3"/>
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.5"/>
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.3"/>
                </linearGradient>
              </defs>
              <path 
                d="M 96 48 Q 200 60 288 64" 
                stroke="url(#connectionGradient)" 
                strokeWidth="2" 
                fill="none"
                className="animate-pulse"
              />
              <path 
                d="M 200 40 Q 250 80 320 96" 
                stroke="url(#connectionGradient)" 
                strokeWidth="1.5" 
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: '0.5s' }}
              />
            </svg>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#FFDFD6' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Act. Market</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{data.length}</p>
              </div>
              <i className="fas fa-globe text-gray-700 text-xl"></i>
            </div>
          </div>
          
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#E3A5C7' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">Avg. Growth</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">9%</p>
              </div>
              <i className="fas fa-chart-line text-gray-700 text-xl"></i>
            </div>
          </div>
          
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#B692C2' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white dark:text-gray-200">Top Market</p>
                <p className="text-xl font-bold text-white dark:text-gray-100">US</p>
              </div>
              <i className="fas fa-crown text-white text-xl"></i>
            </div>
          </div>
          
          <div className="p-4 rounded-lg" style={{ backgroundColor: '#694F8E' }}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white dark:text-gray-200">Fastest Growth</p>
                <p className="text-xl font-bold text-white dark:text-gray-100">EU</p>
              </div>
              <i className="fas fa-rocket text-white text-xl"></i>
            </div>
          </div>
        </div>

        {/* Top Markets List */}
        <div>
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <i className="fas fa-trophy mr-2 text-yellow-500"></i>
            Top Performing Markets
          </h4>
          <div className="space-y-3">
            {topCities.map((location, index) => (
              <motion.div
                key={`global-${location.city}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm" style={{ 
                    backgroundColor: index === 0 ? '#FFDFD6' : index === 1 ? '#E3A5C7' : index === 2 ? '#B692C2' : '#694F8E',
                    color: index <= 1 ? '#374151' : '#ffffff'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {location.city}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {location.country}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg text-gray-900 dark:text-white">
                    ${location.value}
                  </div>
                  <div className="text-sm text-green-600 dark:text-green-400">
                    +{Math.floor(Math.random() * 10) + 5}.{Math.floor(Math.random() * 9)}%
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
