import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import SideBarItem from './sidebar-item';

import './styles.css';
import LogoutIcon from '../../assets/icons/logout.svg';

function SideBar ({ menu,isOpen,handleSidebar }) {
    const location = useLocation();

    const [active, setActive] = useState(1);

    useEffect(() => {
        menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [menu,location.pathname])

    const __navigate = (id) => {
        setActive(id);
        handleSidebar()
    }

    return(
        <nav className={`sidebar ${isOpen? 'active' : ''}`}>
            <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>

                    <div className='sidebar-footer'>
                        <span className='sidebar-item-label'>Logout</span>
                        <img 
                            src={LogoutIcon}
                            alt='icon-logout'
                            className='sidebar-item-icon' />
                    </div>
                </div>
        </nav>
    )
}

export default SideBar;