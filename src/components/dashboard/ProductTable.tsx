import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { ProductData } from '../../types';

interface ProductTableProps {
  data: ProductData[];
}

export const ProductTable = ({ data }: ProductTableProps) => (
  <Card className="dark:!bg-dark-section">
    <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-dark-section dark:to-dark-section rounded-xl h-full">
      <h3 className="text-xl font-bold text-black dark:text-dark-text mb-4">
        Top Selling Products
      </h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:border-gray-700">
              <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-dark-text text-sm">
                Name
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-dark-text text-sm">
                Price
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-dark-text text-sm">
                Quantity
              </th>
              <th className="text-left py-3 px-4 font-medium text-gray-500 dark:text-dark-text text-sm">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="py-4 px-4">
                  <div className="font-medium text-gray-900 dark:text-dark-text">
                    {product.name}
                  </div>
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-dark-text">
                  {product.price}
                </td>
                <td className="py-4 px-4 text-gray-700 dark:text-dark-text">
                  {product.quantity}
                </td>
                <td className="py-4 px-4 font-medium text-gray-900 dark:text-dark-text">
                  {product.amount}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </Card>
);