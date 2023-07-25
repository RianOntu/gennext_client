import React from 'react';
import './DashboardLayout.css';
import Sidenav from '../Sidenav/Sidenav';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
        <div className="row">
            <div className="w-25 h-100">
                <Sidenav></Sidenav>
            </div>
            <div className="w-75 h-100">
                <Outlet></Outlet>
            </div>
        </div>
        
    </div>
    );
};

export default DashboardLayout;