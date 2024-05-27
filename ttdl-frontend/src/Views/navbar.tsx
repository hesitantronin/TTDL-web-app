import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './stylesheets/generalStyle.module.css';

const Navbar = () => {
    const location = useLocation();
    const pathname = location.pathname;
    // console.log(pathname);

    //this gets the page name and sets it to the pageName variable, so it displays the page you are currently on in the nav bar
    //so when your page is done add the pathname here so it displays the right name in the middle of the nav bar 
    let pageName = '';
    if (pathname === '/UserOverview' || pathname === '/userOverview') {
        pageName = 'cliënt overzicht';
    } else if (pathname === '/UserDataOverview' || pathname === '/userDataOverview') {
        pageName = 'gebruiker gegevens overzicht';
    } else if (pathname === '/Home' || pathname === '/home') {
        pageName = 'Home';
    } else if (pathname === '/Login' || pathname === '/login') {
        pageName = 'Inloggen';
    } else if (pathname === '/ForgotPassword' || pathname === '/forgotPassword') {
        pageName = 'Wachtwoord Vergeten';
    } else if (pathname === '/SetupPage' || pathname === '/setupPage') {
        pageName = 'Rolstoel Instellen';
    } else if (pathname === '/UserAdd' || pathname === '/userAdd') {
        pageName = 'Gebruiker Toevoegen';
    }
    
    if (pathname === '/Login' || pathname === '/login') {
        return (
            <nav className={styles.navbar}>
                <div className={styles['navbar-center']}>{pageName}</div>
            </nav>
        );
    }

    return (
        <nav className={styles.navbar}>
        <Link to="/Home" className={styles['navbar-brand']}>
            Home
        </Link>
        <div className={styles['navbar-center']}>{pageName}</div>
        </nav>
    );
};

export default Navbar;
