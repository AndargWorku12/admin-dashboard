import React, { useState } from 'react';
import ReactNode from "react";
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaTags,
    FaClipboardList,
    FaShoppingCart,
} from 'react-icons/fa';
import { NavLink, NavLinkProps } from 'react-router-dom';



interface MenuItem {
    path: string;
    name: string;
    icon: JSX.Element;
}

// interface SidebarProps {
//   children: React.ReactNode;
// }
    const Sidebar: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const menuItems: MenuItem[] = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <FaTh />,
        },
        {
            path: '/login',
            name: 'Login',
            icon: <FaUserAlt />,
        },
        {
          path: '/signup',
          name: 'Register form',
          icon: <FaUserAlt />,
      },
        {
            path: '/analytics',
            name: 'Analytics',
            icon: <FaRegChartBar />,
        },
        {
            path: '/review',
            name: 'CustemerReview',
            icon: <FaCommentAlt />,
        },
        {
            path: '/product',
            name: 'Product',
            icon: <FaShoppingBag />,
        },
        {
            path: '/category',
            name: 'Category List',
            icon: <FaTags />,
        },
        {
          path: '/orders',
          name: 'Orders',
          icon: <FaClipboardList />,
      },
      {
        path: '/shop',
        name: 'Sample product',
        icon: <FaShoppingCart />,
    },
    ];

    return (
        <div className="container">
            <div style={{ width: isOpen ? '200px' : '50px' }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
                        Logo
                    </h1>
                    <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {menuItems.map((item, index) => (
                    <NavLink to={item.path} key={index} className="link"
                     activeClassName="active"
                     >
                        <div className="icon">{item.icon}</div>
                        <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text text-sm">
                            {item.name}
                        </div>
                    </NavLink>
                ))}
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;
