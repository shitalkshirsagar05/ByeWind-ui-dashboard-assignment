import { motion } from 'framer-motion';
import { OrderTable } from '../components/orders/OrderTable';
import { ordersData } from '../data/mockData';

export const Orders = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <OrderTable data={ordersData} />
      </motion.div>
    </div>
  );
};