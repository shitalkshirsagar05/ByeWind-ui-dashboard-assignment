import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCircle,
  faCheckCircle,
  faClock,
  faExclamationCircle,
  faTimes
} from '@fortawesome/free-solid-svg-icons';

interface BadgeProps {
  status: string;
}

export const Badge = ({ status }: BadgeProps) => {
  const getStatusConfig = (status: string) => {
    switch (status.toLowerCase()) {
      case 'processing':
      case 'in progress':
        return {
          textColor: '#4285F4',
          dotColor: '#4285F4',
          icon: faCircle
        };
      case 'completed':
      case 'complete':
        return {
          textColor: '#34A853',
          dotColor: '#CCF6C8',
          icon: faCircle
        };
      case 'shipped':
        return {
          textColor: '#7F669D',
          dotColor: '#BA94D1',
          icon: faCircle
        };
      case 'pending':
        return {
          textColor: '#FBBC04',
          dotColor: '#FAFCC2',
          icon: faCircle
        };
      case 'cancelled':
      case 'rejected':
        return {
          textColor: '#EA4335',
          dotColor: '#F9C0C0',
          icon: faCircle
        };
      case 'approved':
        return {
          textColor: '#FF9800',
          dotColor: '#F6D6AD',
          icon: faCircle
        };
      default:
        return {
          textColor: '#6B7280',
          dotColor: '#F3F4F6',
          icon: faCircle
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className="inline-flex items-center text-xs font-medium" style={{ color: config.textColor }}>
      <FontAwesomeIcon icon={config.icon} className="w-2 h-2 mr-2" style={{ color: config.dotColor }} />
      {status}
    </span>
  );
};