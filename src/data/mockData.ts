// Mock data for the dashboard components

export const kpiData = [
  {
    id: 1,
    label: 'Customers',
    value: '3,781',
    change: '+11.01%',
    isPositive: true,
    icon: 'fas fa-users',
    bgColor: '#FBFACD'
  },
  {
    id: 2,
    label: 'Orders',
    value: '1,219',
    change: '-0.03%',
    isPositive: false,
    icon: 'fas fa-shopping-cart',
    bgColor: '#DEBACE'
  },
  {
    id: 3,
    label: 'Revenue',
    value: '$695',
    change: '+15.03%',
    isPositive: true,
    icon: 'fas fa-dollar-sign',
    bgColor: '#DEBACE'
  },
  {
    id: 4,
    label: 'Growth',
    value: '30.1%',
    change: '+6.08%',
    isPositive: true,
    icon: 'fas fa-chart-line',
    bgColor: '#7F669D'
  }
];

export const projectionsData = [
  { month: 'Jan', projections: 12, actuals: 18 },
  { month: 'Feb', projections: 19, actuals: 16 },
  { month: 'Mar', projections: 3, actuals: 21 },
  { month: 'Apr', projections: 5, actuals: 19 },
  { month: 'May', projections: 2, actuals: 25 },
  { month: 'Jun', projections: 3, actuals: 22 }
];

export const revenueData = [
  { month: 'Jan', current: 4000, previous: 2400 },
  { month: 'Feb', current: 3000, previous: 1398 },
  { month: 'Mar', current: 2000, previous: 9800 },
  { month: 'Apr', current: 2780, previous: 3908 },
  { month: 'May', current: 1890, previous: 4800 },
  { month: 'Jun', current: 2390, previous: 3800 },
  { month: 'Jul', current: 3490, previous: 4300 }
];

export const salesData = [
  { name: 'Direct', value: 300.56, color: '#52057B', trend: '+15.2%' },
  { name: 'Affiliate', value: 135.18, color: '#DEBACE', trend: '-2.3%' },
  { name: 'Sponsored', value: 154.02, color: '#BA94D1', trend: '+22.1%' },
  { name: 'E-mail', value: 48.96, color: '#7F669D', trend: '-0.8%' }
];

export const locationData = [
  { city: 'New York', value: '72k', country: 'United States' },
  { city: 'London', value: '54k', country: 'United Kingdom' },
  { city: 'Singapore', value: '61k', country: 'Singapore' },
  { city: 'Sydney', value: '25k', country: 'Australia' },
  { city: 'Tokyo', value: '78k', country: 'Japan' }
];

export const topProducts = [
  {
    id: 1,
    name: 'Abstract 3D',
    price: 45.99,
    quantity: 54,
    amount: 2483.46
  },
  {
    id: 2,
    name: 'Sarphens Illustration',
    price: 45.99,
    quantity: 54,
    amount: 2483.46
  },
  {
    id: 3,
    name: 'Product 3',
    price: 35.99,
    quantity: 32,
    amount: 1151.68
  },
  {
    id: 4,
    name: 'Product 4',
    price: 55.99,
    quantity: 18,
    amount: 1007.82
  },
  {
    id: 5,
    name: 'Product 5',
    price: 25.99,
    quantity: 67,
    amount: 1741.33
  }
];

export const notifications = [
  {
    id: 1,
    avatar: 'fas fa-bug',
    name: 'You have a bug that needs...',
    time: 'Just now',
    isActive: true
  },
  {
    id: 2,
    avatar: 'fas fa-user-plus',
    name: 'New user registered',
    time: '59 minutes ago',
    isActive: false
  },
  {
    id: 3,
    avatar: 'fas fa-bug',
    name: 'You have a bug that needs...',
    time: '12 hours ago',
    isActive: false
  },
  {
    id: 4,
    avatar: 'fas fa-rss',
    name: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
    isActive: false
  }
];

export const activities = [
  {
    id: 1,
    image: '/Contact1.jpg',
    title: 'You have a bug that needs...',
    time: 'Just now'
  },
  {
    id: 2,
    image: '/Contact2.jpg',
    title: 'Released a new version',
    time: '59 minutes ago'
  },
  {
    id: 3,
    image: '/Contact3.jpg',
    title: 'Submitted a bug',
    time: '12 hours ago'
  },
  {
    id: 4,
    image: '/Contact4.jpg',
    title: 'Modified A data in Page X',
    time: 'Today, 11:59 AM'
  },
  {
    id: 5,
    image: '/Contact5.jpg',
    title: 'Deleted a page in Project X',
    time: 'Feb 2, 2023'
  }
];

export const contacts = [
  {
    id: 1,
    name: 'Natali Craig',
    avatar: '/Contact1.jpg'
  },
  {
    id: 2,
    name: 'Drew Cano',
    avatar: '/Contact2.jpg'
  },
  {
    id: 3,
    name: 'Orlando Diggs',
    avatar: '/Contact3.jpg'
  },
  {
    id: 4,
    name: 'Andi Lane',
    avatar: '/Contact4.jpg'
  },
  {
    id: 5,
    name: 'Kate Morrison',
    avatar: '/Contact5.jpg'
  },
  {
    id: 6,
    name: 'Koray Okumus',
    avatar: '/Contact6.jpg'
  }
];

export const orderData = [
  {
    id: 'ORD-001',
    user: {
      name: 'John Doe',
      avatar: '/Contact1.jpg'
    },
    project: 'Abstract 3D Design',
    address: 'New York, USA',
    date: '2024-01-15',
    status: 'Completed',
    active: false,
    checked: false
  },
  {
    id: 'ORD-002',
    user: {
      name: 'Sarah Johnson',
      avatar: '/Contact2.jpg'
    },
    project: 'Sarphens Illustration Pack',
    address: 'Los Angeles, USA',
    date: '2024-01-14',
    status: 'Processing',
    active: false,
    checked: false
  },
  {
    id: 'ORD-003',
    user: {
      name: 'Michael Chen',
      avatar: '/Contact3.jpg'
    },
    project: 'Digital Art Collection',
    address: 'San Francisco, USA',
    date: '2024-01-13',
    status: 'Shipped',
    active: false,
    checked: false
  },
  {
    id: 'ORD-004',
    user: {
      name: 'Emily Rodriguez',
      avatar: '/Contact4.jpg'
    },
    project: 'Creative Templates Bundle',
    address: 'Chicago, USA',
    date: '2024-01-12',
    status: 'Pending',
    active: false,
    checked: true
  },
  {
    id: 'ORD-005',
    user: {
      name: 'David Wilson',
      avatar: '/Contact5.jpg'
    },
    project: 'UI/UX Design Kit',
    address: 'Miami, USA',
    date: '2024-01-11',
    status: 'Completed',
    active: true,
    checked: false
  },
  {
    id: 'ORD-006',
    user: {
      name: 'Lisa Thompson',
      avatar: '/Contact6.jpg'
    },
    project: 'Photography Presets',
    address: 'Seattle, USA',
    date: '2024-01-10',
    status: 'Cancelled',
    active: false,
    checked: false
  },
  {
    id: 'ORD-007',
    user: {
      name: 'Alex Kumar',
      avatar: '/Contact1.jpg'
    },
    project: 'Logo Design Package',
    address: 'Austin, USA',
    date: '2024-01-09',
    status: 'Processing',
    active: false,
    checked: false
  },
  {
    id: 'ORD-008',
    user: {
      name: 'Maria Garcia',
      avatar: '/Contact2.jpg'
    },
    project: 'Social Media Templates',
    address: 'Boston, USA',
    date: '2024-01-08',
    status: 'Shipped',
    active: false,
    checked: false
  }
];

// Alias for orders data to match the import in Orders.tsx
export const ordersData = orderData;