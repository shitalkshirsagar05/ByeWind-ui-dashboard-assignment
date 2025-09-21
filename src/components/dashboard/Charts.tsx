import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../ui/Card';
import { ProjectionData, RevenueData, SalesData } from '../../types';

interface ProjectionsChartProps {
  data: ProjectionData[];
}

export const ProjectionsChart = ({ data }: ProjectionsChartProps) => {

  // Enhanced tooltip with more details
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const projections = payload.find((p: any) => p.dataKey === 'projections')?.value || 0;
      const actuals = payload.find((p: any) => p.dataKey === 'actuals')?.value || 0;
      const total = projections + actuals;
      
      return (
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-lg">
          <p className="text-gray-900 dark:text-gray-100 font-medium mb-2">{label}</p>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="flex items-center text-gray-600 dark:text-gray-300">
                Projections:
              </span>
              <span className="font-bold text-gray-900 dark:text-white">{projections}M</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center text-gray-600 dark:text-gray-300">
                Actuals:
              </span>
              <span className="font-bold text-gray-900 dark:text-white">{actuals}M</span>
            </div>
            <div className="border-t border-gray-200 dark:border-gray-600 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400 text-sm">Total:</span>
                <span className="font-bold text-sm text-gray-900 dark:text-white">{total}M</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="dark:!bg-dark-section">
      <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-dark-section dark:to-dark-section rounded-xl h-full flex flex-col">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-black dark:text-dark-text">
            Projections vs Actuals
          </h3>
        </div>


        {/* Chart */}
        <ResponsiveContainer width="100%" height={200}>
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="none" stroke="#E5E7EB" opacity={0.5} horizontal={true} vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="#9CA3AF" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis 
              stroke="#9CA3AF" 
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 30]}
              ticks={[0, 10, 20, 30]}
              tickFormatter={(value) => `${value}M`}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            
            {/* Stacked Bars */}
            <Bar 
              dataKey="projections" 
              stackId="stack"
              fill="#7F669D" 
              name="Projections" 
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="actuals" 
              stackId="stack"
              fill="#DEBACE" 
              name="Actuals" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>

      </div>
    </Card>
  );
};

interface RevenueChartProps {
  data: RevenueData[];
}

export const RevenueChart = ({ data }: RevenueChartProps) => {
  // Calculate trend for current vs previous period
  const currentWeek = 58211;
  const previousWeek = 68768;


  return (
    <Card className="dark:!bg-dark-section">
      <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-dark-section dark:to-dark-section rounded-xl h-full">
        {/* Enhanced Header with Animation */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-4"
        >
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="text-xl font-bold text-black dark:text-dark-text">
                Revenue
              </h3>
            </div>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#7F669D' }}></div>
                <span className="text-xs font-medium text-gray-700 dark:text-dark-text">Current Week</span>
                <span className="text-sm font-bold text-gray-900 dark:text-dark-text">${(currentWeek/1000).toFixed(0)}K</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 rounded-full border border-dashed" style={{ backgroundColor: '#DEBACE', borderColor: '#DEBACE' }}></div>
                <span className="text-xs font-medium text-gray-700 dark:text-dark-text">Previous Week</span>
                <span className="text-sm font-bold text-gray-900 dark:text-dark-text">${(previousWeek/1000).toFixed(0)}K</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Chart with Gradients */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#7F669D" opacity={0.2} />
              <XAxis 
                dataKey="month" 
                stroke="#6B7280" 
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#6B7280' }}
              />
              <YAxis 
                stroke="#6B7280" 
                tick={{ fontSize: 12 }}
                tickLine={{ stroke: '#6B7280' }}
                tickFormatter={(value) => `$${(value/1000).toFixed(0)}k`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: '1px solid #374151', 
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px rgba(0,0,0,0.25)'
                }}
                formatter={(value: number, name: string) => [
                  `$${(value/1000).toFixed(1)}k`, 
                  name === 'current' ? 'Current Period' : 'Previous Period'
                ]}
                labelStyle={{ color: '#F9FAFB', fontWeight: 'bold' }}
              />
              <Line 
                type="monotone" 
                dataKey="current" 
                stroke="#7F669D"
                strokeWidth={3}
                dot={{ fill: '#7F669D', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, fill: '#7F669D', stroke: '#FFFFFF', strokeWidth: 2 }}
              />
              <Line 
                type="monotone" 
                dataKey="previous" 
                stroke="#DEBACE"
                strokeWidth={2}
                strokeDasharray="8 4"
                dot={{ fill: '#DEBACE', strokeWidth: 2, r: 3 }}
                activeDot={{ r: 5, fill: '#DEBACE', stroke: '#FFFFFF', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

      </div>
    </Card>
  );
};

interface SalesChartProps {
  data: SalesData[];
}

export const SalesChart = ({ data }: SalesChartProps) => {
  const totalSales = data.reduce((sum, item) => sum + item.value, 0);
  
  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'Direct': return 'fas fa-store';
      case 'Affiliates': return 'fas fa-handshake';
      case 'Sponsored': return 'fas fa-bullhorn';
      case 'E-mail': return 'fas fa-envelope';
      default: return 'fas fa-chart-pie';
    }
  };

  const getChannelPercentage = (value: number) => {
    return ((value / totalSales) * 100).toFixed(1);
  };

  return (
    <Card className="dark:!bg-dark-section">
      <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-dark-section dark:to-dark-section rounded-xl h-full">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-black dark:text-dark-text">
            Total Sales
          </h3>
        </div>

        <div className="flex flex-col items-center max-w-sm mx-auto">
          {/* Donut Chart */}
          <div className="relative w-[200px] h-[200px] mb-6">
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx={100}
                cy={100}
                innerRadius={65}
                outerRadius={95}
                paddingAngle={8}
                dataKey="value"
                animationBegin={0}
                animationDuration={1000}
                startAngle={90}
                endAngle={450}
                cornerRadius={15}
              >
                {data.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color}
                  />
                ))}
              </Pie>
            </PieChart>
            {/* Center Percentage */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-3xl font-bold text-gray-700 dark:text-dark-text">
                38.6%
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="w-full space-y-4">
            {data.map((item, index) => (
              <div
                key={item.name}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-900 dark:text-dark-text font-medium">
                    {item.name}
                  </span>
                </div>
                <div className="text-gray-900 dark:text-dark-text font-semibold">
                  ${item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};