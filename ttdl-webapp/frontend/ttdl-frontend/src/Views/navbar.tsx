import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './stylesheets/generalStyle.module.css';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    console.log(pathname);

    //this gets the page name and sets it to the pageName variable, so it displays the page you are currently on in the nav bar
    //so when your page is done add the pathname here so it displays the right name in the middle of the nav bar 
    let pageName = '';
    if (pathname === '/UserOverview') {
        pageName = 'User Overview';
    } else if (pathname === '/UserDataOverview') {
        pageName = 'User Data Overview';
    } 

    return (
        <nav className={styles.navbar}>
        <Link to="/" className={styles['navbar-brand']}>
            Home
        </Link>
        <div className={styles['navbar-center']}>{pageName}</div>
        </nav>
    );
};

export default Navbar;
