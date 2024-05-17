import { useEffect, useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

function Home(){

    return (
        <div>
             <Navbar />
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'rgba(184,210,235,255)'
        }}>
            <div style={{
                backgroundColor: 'white',
                width: '1800px',
                padding: '350px',
                margin: '20px',
                boxSizing: 'border-box',
                position: 'relative',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}>
                <h2>Welkom, Arie</h2>
                <Link to='/UserOverview'>
                    <button
                        style={{
                            position: 'absolute',
                            textAlign: "center",
                            top: '250px',
                            left: '800px',
                            width: '300px',
                            padding: '15px',
                            backgroundColor: 'rgba(76,145,249,255)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        }}>
                        Gebruikersinformatie
                    </button>
                </Link>
                <Link to='/SetupPage'>
                    <button
                        style={{
                            position: 'absolute',
                            textAlign: "center",
                            top: '350px',
                            left: '800px',
                            width: '300px',
                            padding: '15px',
                            backgroundColor: 'rgba(76,145,249,255)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        }}>
                        Rolstoel instellen
                    </button>
                </Link>
                <Link to='/Login'>
                    <button
                        style={{
                            position: 'absolute',
                            textAlign: "center",
                            top: '450px',
                            left: '800px',
                            width: '300px',
                            padding: '15px',
                            backgroundColor: 'rgba(76,145,249,255)',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                        }}>
                        Uitloggen
                    </button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Home;
