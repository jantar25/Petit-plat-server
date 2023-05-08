import DashboardIcon from '../assets/icons/dashboard.svg';
import NotificationIcon from '../assets/icons/notification.svg';
import ClientsIcon from '../assets/icons/shipping.svg';
import PoductsIcon from '../assets/icons/product.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Dashboard',
    },
    {
        id: 2,
        icon: PoductsIcon,
        path: '/products',
        title: 'Products',
    },
    {
        id: 3,
        icon: ClientsIcon,
        path: '/orders',
        title: 'Orders',
    },
    {
        id: 4,
        icon: NotificationIcon,
        path: '/repport',
        title: 'Repport',
    }
]

export default sidebar_menu;