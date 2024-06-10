import { useEffect, useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link, useLocation } from 'react-router-dom';
import Navbar from './navbar';

function Home(){
    const location = useLocation();
    const name = location.state?.name;

    return (
        <div>
             <Navbar />
             <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    <h2>Welkom, {name}</h2>
                    
                    <Link to='/UserOverview'>
                        <button
                            className={generalStyle.verticalButton}
                        >
                        Cliënteninformatie
                        </button>
                    </Link>
                    <Link to='/SetupPage'>
                        <button
                            className={generalStyle.verticalButton}
                        >
                        Rolstoel Instellen
                        </button>
                    </Link>
                    <Link to='/UserAdd'>
                        <button
                            className={generalStyle.verticalButton}
                        >
                        Gebruiker Toevoegen
                        </button>
                    </Link>
                    <Link to='/Login'>
                        <button
                            className={generalStyle.verticalButton}
                        >
                        Uitloggen
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
