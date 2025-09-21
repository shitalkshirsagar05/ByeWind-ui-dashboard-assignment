import { Card } from '../ui/Card';
import { LocationData } from '../../types';
import { useTheme } from '../../hooks/useTheme';
import WorldMapImage from '../../assets/World-Map-Transparent-Image.png';

interface LocationMapProps {
  data: LocationData[];
}

export const LocationMap = ({ data }: LocationMapProps) => {
  const { darkMode } = useTheme();
  
  // Filter to match the exact cities from the image with numeric values for progress calculation
  const cities = [
    { city: 'New York', value: '72K', numericValue: 72, position: { top: '28%', left: '22%' } },
    { city: 'San Francisco', value: '39K', numericValue: 39, position: { top: '35%', left: '12%' } },
    { city: 'Sydney', value: '25K', numericValue: 25, position: { top: '75%', right: '15%' } },
    { city: 'Singapore', value: '61K', numericValue: 61, position: { top: '55%', right: '22%' } }
  ];

  // Calculate max value for progress bar scaling
  const maxValue = Math.max(...cities.map(city => city.numericValue));

  return (
    <Card className="dark:!bg-dark-section">
      <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-dark-section dark:to-dark-section rounded-xl h-full flex flex-col">
        <h3 className="text-xl font-bold text-black dark:text-dark-text mb-4">
          Revenue by Location
        </h3>
        
        {/* World map */}
        <div className="relative rounded h-40 mb-4 overflow-hidden">
          <img 
            src={WorldMapImage} 
            alt="World Map" 
            className="w-full h-full object-contain opacity-60"
          />
          
          {/* Location dots */}
          <div className="absolute inset-0">
            {cities.map((location, index) => (
              <div 
                key={location.city}
                className="absolute transform -translate-x-1/2 -translate-y-1/2"
                style={location.position}
              >
                <div 
                  className="w-3 h-3 rounded-full shadow-lg border-2 border-white transition-all duration-300 hover:scale-125 cursor-pointer"
                  style={{ backgroundColor: darkMode ? '#ffffff' : '#7F669D' }}
                  title={`${location.city}: ${location.value}`}
                ></div>
              </div>
            ))}
          </div>
        </div>

        {/* City list with progress bars */}
        <div className="space-y-3">
          {cities.map((location, index) => {
            const progressWidth = (location.numericValue / maxValue) * 100;
            
            return (
              <div key={location.city} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="text-gray-700 dark:text-dark-text font-medium text-sm">
                    {location.city}
                  </div>
                  <div className="text-gray-700 dark:text-dark-text font-medium text-sm">
                    {location.value}
                  </div>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className="h-1 rounded-full transition-all duration-500 ease-out"
                    style={{ 
                      width: `${progressWidth}%`,
                      backgroundColor: darkMode ? '#BA94D1' : '#7F669D'
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
};