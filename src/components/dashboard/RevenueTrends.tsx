import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import WorldMapImage from '../../assets/World-Map-Transparent-Image.png';

interface RevenueTrendsProps {
  className?: string;
}

export const RevenueTrends = ({ className = '' }: RevenueTrendsProps) => {
  const trendData = [
    { region: 'North America', jan: 125, feb: 132, mar: 140, growth: '+12.0%', color: '#FFDFD6' },
    { region: 'Europe', jan: 78, feb: 82, mar: 86, growth: '+10.3%', color: '#E3A5C7' },
    { region: 'Asia Pacific', jan: 105, feb: 118, mar: 124, growth: '+18.1%', color: '#B692C2' },
    { region: 'South America', jan: 22, feb: 25, mar: 28, growth: '+27.3%', color: '#694F8E' },
  ];

  const emergingMarkets = [
    { city: 'Bangkok', country: 'Thailand', revenue: '22k', growth: '+34.5%', trend: 'up' },
    { city: 'Dubai', country: 'UAE', revenue: '19k', growth: '+28.7%', trend: 'up' },
    { city: 'Mexico City', country: 'Mexico', revenue: '16k', growth: '+22.1%', trend: 'up' },
    { city: 'Cape Town', country: 'South Africa', revenue: '14k', growth: '+19.8%', trend: 'up' },
  ];

  return (
    <Card className={className}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
              <i className="fas fa-trending-up mr-2 text-green-500"></i>
              Revenue 
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Quarterly performance across regions with emerging market insights
            </p>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-600 dark:text-gray-400">Overall Growth</div>
            <div className="text-xl font-bold text-green-600 dark:text-green-400">+16.9%</div>
          </div>
        </div>

        {/* Mini World Map with Trend Indicators */}
        <div className="relative bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-800 dark:via-gray-750 dark:to-gray-700 rounded-lg h-48 mb-6 overflow-hidden">
          <img 
            src={WorldMapImage} 
            alt="Revenue Trends Map" 
            className="w-full h-full object-contain opacity-60 dark:opacity-40"
          />
          
          {/* Trend Growth Indicators */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-8">
              {/* North America */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ backgroundColor: '#FFDFD6' }}>
                  <span className="text-gray-800 font-bold text-sm">+12%</span>
                </div>
                <div className="text-xs font-medium text-gray-800 dark:text-gray-200">N. America</div>
              </div>
              
              {/* Asia Pacific */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ backgroundColor: '#B692C2' }}>
                  <span className="text-white font-bold text-sm">+18%</span>
                </div>
                <div className="text-xs font-medium text-gray-800 dark:text-gray-200">Asia Pacific</div>
              </div>
              
              {/* Europe */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ backgroundColor: '#E3A5C7' }}>
                  <span className="text-gray-800 font-bold text-sm">+10%</span>
                </div>
                <div className="text-xs font-medium text-gray-800 dark:text-gray-200">Europe</div>
              </div>
              
              {/* South America */}
              <div className="text-center">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 animate-pulse" style={{ backgroundColor: '#694F8E' }}>
                  <span className="text-white font-bold text-sm">+27%</span>
                </div>
                <div className="text-xs font-medium text-gray-800 dark:text-gray-200">S. America</div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Trend Charts */}
        <div className="mb-6">
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <i className="fas fa-chart-area mr-2 text-indigo-500"></i>
            Quarterly Trends (Q1 2024)
          </h4>
          <div className="space-y-4">
            {trendData.map((region, index) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: region.color }}></div>
                    <span className="font-medium text-gray-900 dark:text-white">{region.region}</span>
                  </div>
                  <div className="text-sm font-semibold text-green-600 dark:text-green-400">
                    {region.growth}
                  </div>
                </div>
                
                {/* Mini trend line */}
                <div className="flex items-end space-x-2 h-8">
                  <div 
                    className="rounded-t" 
                    style={{ 
                      width: '25%', 
                      height: `${(region.jan / 140) * 100}%`,
                      backgroundColor: region.color
                    }}
                  ></div>
                  <div 
                    className="rounded-t" 
                    style={{ 
                      width: '25%', 
                      height: `${(region.feb / 140) * 100}%`,
                      backgroundColor: region.color
                    }}
                  ></div>
                  <div 
                    className="rounded-t" 
                    style={{ 
                      width: '25%', 
                      height: `${(region.mar / 140) * 100}%`,
                      backgroundColor: region.color
                    }}
                  ></div>
                  <div className="flex-1 text-right text-xs text-gray-600 dark:text-gray-400">
                    ${region.mar}k
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Emerging Markets */}
        <div>
          <h4 className="text-md font-medium text-gray-900 dark:text-white mb-4 flex items-center">
            <i className="fas fa-seedling mr-2 text-emerald-500"></i>
            Emerging Markets
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {emergingMarkets.map((market, index) => (
              <motion.div
                key={market.city}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-700"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium text-emerald-900 dark:text-emerald-300">
                      {market.city}
                    </div>
                    <div className="text-xs text-emerald-700 dark:text-emerald-400">
                      {market.country}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-emerald-800 dark:text-emerald-200">
                      ${market.revenue}
                    </div>
                    <div className="flex items-center text-xs text-green-600 dark:text-green-400">
                      <i className="fas fa-arrow-up mr-1"></i>
                      {market.growth}
                    </div>
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
