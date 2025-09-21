import { motion } from 'framer-motion';
import { KPICard } from '../components/dashboard/KPICard';
import { ProjectionsChart, RevenueChart, SalesChart } from '../components/dashboard/Charts';
import { LocationMap } from '../components/dashboard/LocationMap';
import { ProductTable } from '../components/dashboard/ProductTable';
import { RightSidebar } from '../components/dashboard/RightSidebar';
import { 
  kpiData, 
  projectionsData, 
  revenueData, 
  salesData, 
  locationData,
  topProducts,
  notifications,
  activities,
  contacts
} from '../data/mockData';

export const Dashboard = () => {
  return (
    <div className="flex-1 flex overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* eCommerce and Projections Row */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-black dark:text-dark-text mb-6">eCommerce</h2>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">
              {/* KPI Cards - Left Side */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
                  {kpiData.map((kpi, index) => (
                    <motion.div
                      key={kpi.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="h-full"
                    >
                      <KPICard {...kpi} />
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Projections Chart - Right Side */}
              <div className="lg:col-span-3">
                <div className="h-full">
                  <ProjectionsChart data={projectionsData} />
                </div>
              </div>
            </div>
          </div>

          {/* Revenue and Location Maps Row - Horizontally Inline */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <RevenueChart data={revenueData} />
            <LocationMap data={locationData} />
          </div>

          {/* Products Table and Sales Chart Row - Horizontally Inline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <ProductTable data={topProducts} />
            </div>
            <div className="lg:col-span-1">
              <SalesChart data={salesData} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Sidebar */}
      <RightSidebar 
        notifications={notifications}
        activities={activities}
        contacts={contacts}
      />
    </div>
  );
};