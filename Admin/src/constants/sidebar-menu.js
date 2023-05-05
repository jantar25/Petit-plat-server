import DashboardIcon from '../assets/icons/dashboard.svg';
import NotificationIcon from '../assets/icons/notification.svg';
import ClientsIcon from '../assets/icons/shipping.svg';
import UserIcon from '../assets/icons/user.svg';

const sidebar_menu = [
    {
        id: 1,
        icon: DashboardIcon,
        path: '/',
        title: 'Accueil',
    },
    {
        id: 2,
        icon: ClientsIcon,
        path: '/clients',
        title: 'Clients',
    },
    {
        id: 3,
        icon: NotificationIcon,
        path: '/rapport',
        title: 'Rapport',
    },
    {
        id: 4,
        icon: UserIcon,
        path: '/profile',
        title: 'Mon compte',
    }
]

export default sidebar_menu;