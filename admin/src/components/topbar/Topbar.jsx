import React from 'react';
import './topbar.css';
import {NotificationsNone,Language,Settings} from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings/>
          </div>
          <img src="https://thebasketballdoctors.com/wp-content/uploads/2018/10/url.jpeg" alt="" className='topAvatar' />
        </div>
      </div>
    </div>
  );
}
