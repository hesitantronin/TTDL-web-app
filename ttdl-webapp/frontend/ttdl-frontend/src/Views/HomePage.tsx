import { useEffect, useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

function Home(){

    return (
        <div>
             <Navbar />
             <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    <h2>Welkom, Arie</h2>
                    
                    <Link to='/UserOverview'>
                        <button
                            className={generalStyle.verticalButton}
                        >
                        Gebruikersinformatie
                        </button>
                    </Link>
                    <Link to='/SetupPage'>
                        <button
                            className={generalStyle.verticalButton}
                        >
                        Rolstoel Instellen
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
