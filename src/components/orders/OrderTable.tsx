import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faFilter, 
  faSort, 
  faSearch,
  faChevronLeft,
  faChevronRight,
  faEllipsisV
} from '@fortawesome/free-solid-svg-icons';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { OrderData } from '../../types';

interface OrderTableProps {
  data: OrderData[];
}

export const OrderTable = ({ data }: OrderTableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 10;

  const filteredData = data.filter(order =>
    order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Card className="dark:!bg-[#393E46]">
      <div className="p-6">
        {/* Header */}
        <div className="mb-6">
          {/* Title at the top */}
          <h2 className="text-xl font-semibold text-gray-900 dark:text-dark-text mb-4">
            Order List
          </h2>
          
          {/* Action buttons and search bar in a row below */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <FontAwesomeIcon icon={faPlus} className="w-4 h-4" />
              </button>
              
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <FontAwesomeIcon icon={faFilter} className="w-4 h-4" />
              </button>
              
              <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
                <FontAwesomeIcon icon={faSort} className="w-4 h-4" />
              </button>
            </div>
            
            <div className="relative">
              <FontAwesomeIcon 
                icon={faSearch} 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" 
              />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pr-10 pl-4 py-2 bg-gray-100 dark:bg-gray-700 dark:text-dark-text dark:placeholder-gray-400 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-80"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 dark:border-gray-700">
                <th className="text-left py-3 px-4 font-normal text-gray-400 dark:text-gray-500 text-sm">
                  <input type="checkbox" className="rounded border-gray-300 w-4 h-4" />
                </th>
                <th className="text-left py-3 px-4 font-normal text-gray-400 dark:text-gray-500 text-sm">
                  Order ID
                </th>
                <th className="text-left py-3 px-4 font-normal text-gray-400 dark:text-gray-500 text-sm">
                  User
                </th>
                <th className="text-left py-3 px-4 font-normal text-gray-400 dark:text-gray-500 text-sm">
                  Project
                </th>
                <th className="text-left py-3 px-4 font-normal text-gray-400 dark:text-gray-500 text-sm">
                  Address
                </th>
                <th className="text-left py-3 px-4 font-normal text-gray-400 dark:text-gray-500 text-sm">
                  Date
                </th>
                <th className="text-left py-3 px-4 font-normal text-gray-400 dark:text-gray-500 text-sm">
                  Status
                </th>
                <th className="w-10"></th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((order, index) => (
                <motion.tr
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`border-b border-gray-50 dark:border-gray-700 transition-colors ${
                    order.active 
                      ? 'bg-gray-100 dark:bg-gray-700/70' 
                      : 'hover:bg-gray-50 dark:hover:bg-gray-700/50'
                  }`}
                >
                  <td className="py-4 px-4">
                    <input 
                      type="checkbox" 
                      className="rounded border-gray-300 w-4 h-4" 
                      checked={order.checked || false}
                      readOnly
                    />
                  </td>
                  <td className="py-4 px-4">
                    <span className="font-medium text-gray-900 dark:text-dark-text text-sm">
                      {order.id}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <Avatar 
                        src={order.user.avatar} 
                        alt={order.user.name}
                        size="sm"
                      />
                      <span className="text-gray-900 dark:text-dark-text text-sm">
                        {order.user.name}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600 dark:text-dark-text text-sm">
                    {order.project}
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-dark-text text-sm">
                      <span>{order.address}</span>
                      <FontAwesomeIcon icon={faEllipsisV} className="w-3 h-3 text-gray-400 rotate-90" />
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-dark-text text-sm">
                      <FontAwesomeIcon icon={faEllipsisV} className="w-3 h-3 text-gray-400 rotate-90" />
                      <span>{order.date}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Badge status={order.status} />
                  </td>
                  <td className="py-4 px-4">
                    {order.active && (
                      <button className="p-1 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 transition-colors">
                        <FontAwesomeIcon icon={faEllipsisV} className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end mt-6 pt-4">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 text-gray-400 dark:text-dark-text hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
            </button>
            
            {[1, 2, 3, 4, 5].map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPage === pageNum
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-dark-text hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {pageNum}
              </button>
            ))}
            
            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-400 dark:text-dark-text hover:text-gray-600 dark:hover:text-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
};