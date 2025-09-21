import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBug, 
  faUser, 
  faUserPlus,
  faRss,
  faHeart,
  faEllipsisH
} from '@fortawesome/free-solid-svg-icons';
import { Card } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { NotificationData, ActivityData, ContactData } from '../../types';

interface RightSidebarProps {
  notifications: NotificationData[];
  activities: ActivityData[];
  contacts: ContactData[];
}

export const RightSidebar = ({ notifications, activities, contacts }: RightSidebarProps) => {

  return (
    <div className="w-80 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-700 p-6 space-y-6 overflow-y-auto">
      {/* Notifications */}
      <Card>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-text">Notifications</h3>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-dark-text">
              <FontAwesomeIcon icon={faEllipsisH} className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                  notification.isActive ? 'bg-blue-50 dark:bg-blue-900/20' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <div className="p-2 rounded-lg" style={{
                  backgroundColor: notification.avatar === 'fas fa-bug' ? '#E3A5C7' :
                  notification.avatar === 'fas fa-user-plus' ? '#B692C2' : 
                  notification.avatar === 'fas fa-rss' ? '#694F8E' : '#B692C2',
                  color: notification.avatar === 'fas fa-bug' ? '#374151' : '#FFFFFF'
                }}>
                  <FontAwesomeIcon 
                    icon={notification.avatar === 'fas fa-bug' ? faBug : 
                          notification.avatar === 'fas fa-user-plus' ? faUserPlus :
                          notification.avatar === 'fas fa-rss' ? faRss : faUser} 
                    className="w-4 h-4" 
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-dark-text">
                    {notification.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {notification.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>

      {/* Activities */}
      <Card>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-text">Activities</h3>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-dark-text">
              <FontAwesomeIcon icon={faEllipsisH} className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-3 p-3 rounded-lg transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFDFD6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Avatar 
                  src={activity.image} 
                  alt={activity.title}
                  size="md"
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-900 dark:text-dark-text">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-300 mt-1">
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>

      {/* Contacts */}
      <Card>
        <div className="p-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-gray-900 dark:text-dark-text">Contacts</h3>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-dark-text">
              <FontAwesomeIcon icon={faEllipsisH} className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-3">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 p-2 rounded-lg transition-colors"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFDFD6';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <Avatar 
                  src={contact.avatar} 
                  alt={contact.name}
                  status={contact.status}
                  size="md"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-dark-text">
                    {contact.name}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};