import React from 'react'
import './sidebar.css'
import {LineStyle,Timeline,TrendingUp,PermIdentity,ShoppingCart,CurrencyRupee,Assessment,MailOutline,DynamicFeed,Message,WorkOutline,Report} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Dashboard</h3>
                <ul className='sidebarList'>
                    <Link to="/home" className='link'>
                    <li className='sidebarListItem active '>
                    <LineStyle className='sidebarIcon'/>
                    Home
                    </li>
                    </Link>
                    
                    <li className='sidebarListItem '>
                    <Timeline className='sidebarIcon'/>
                    Analytics
                    </li>
                    <li className='sidebarListItem '>
                    <TrendingUp className='sidebarIcon'/>
                    Sales
                    </li>
                </ul>
                <h3 className='sidebarTitle'>Quick Menu</h3>
                <ul className='sidebarList'>
                    <Link to='/users' className='link'>
                    <li className='sidebarListItem active '>
                    <PermIdentity className='sidebarIcon'/>
                    Users
                    </li>
                    </Link>                    
                    <li className='sidebarListItem '>
                    <ShoppingCart className='sidebarIcon'/>
                    Products
                    </li>
                    <li className='sidebarListItem '>
                    <CurrencyRupee className='sidebarIcon'/>
                    Transactions
                    </li>
                    <li className='sidebarListItem '>
                    <Assessment className='sidebarIcon'/>
                    Reports
                    </li>
                </ul>
                <h3 className='sidebarTitle'>Notification</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active '>
                    <MailOutline className='sidebarIcon'/>
                    Mail
                    </li>
                    <li className='sidebarListItem '>
                    <DynamicFeed className='sidebarIcon'/>
                    Feedback
                    </li>
                    <li className='sidebarListItem '>
                    <Message className='sidebarIcon'/>
                    Messages
                    </li>
                </ul>
                <h3 className='sidebarTitle'>Staff</h3>
                <ul className='sidebarList'>
                    <li className='sidebarListItem active '>
                    <WorkOutline className='sidebarIcon'/>
                    Manage
                    </li>
                    <li className='sidebarListItem '>
                    <Timeline className='sidebarIcon'/>
                    Analytics
                    </li>
                    <li className='sidebarListItem '>
                    <Report className='sidebarIcon'/>
                    Reports
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
