import React from 'react';
import SidebarLogo from './sidebar-logo';
import NavItem from './sidebar-nav-item';

import ListGroup from 'react-bootstrap/ListGroup';

function Sidebar() {
    return (<>
       <SidebarLogo />
        <div className='nav-list-wrapper'>
        <ul class="list-group">
         <NavItem>Dashboard</NavItem>
         <NavItem>Products</NavItem>
        </ul>
        </div>
        </>
      );
}

export default Sidebar;