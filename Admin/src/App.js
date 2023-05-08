import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import SideBar from './components/Sidebar';
import sidebar_menu from './constants/sidebar-menu';
import DashboardHeader from './components/DashboardHeader';

import './App.css';
import Orders from './pages/Orders';
import Repport from './pages/Repport/Repport';
import Dashboard from './pages/Dashboard/Dashboard';
import Products from './pages/Products/Products';
import Login from './pages/Login'
import { useState } from 'react';

function App () {
  const [toggleSidebar,setToggleSidebar] = useState(false)
  const admin = true

  const handleSidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }
  return(
    <Router>
      <Routes>
        {!admin ? 
        <Route exact path="/" element={<Login/>} /> :
        <Route exact path="*" element= {
          <div>
            <DashboardHeader handleSidebar={handleSidebar} isOpen={toggleSidebar}/>
            <div>
              <SideBar menu={sidebar_menu} isOpen={toggleSidebar} handleSidebar={handleSidebar}/>
              <div className='dashboard-body'>
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route exact path="/orders" element={< Orders/>} />
                    <Route exact path="/rapport" element={<Repport />} />
                    <Route exact path="/products" element={<Products />} />
                  </Routes>
              </div>
            </div>
          </div>
        } />
        }
      </Routes>
    </Router>
  )
}

export default App;