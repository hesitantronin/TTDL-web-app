import React, { useState, useEffect, useRef } from 'react';
import Navbar from './navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginController } from '../communication/LoginController';
import generalStyle from './stylesheets/generalStyle.module.css';

function Login() {
    const{ error, submitted, handleSubmit } = useLoginController(); //name
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (submitted) {
    //         navigate('/Home', { state: {name} });
    //     }
    // }, [submitted, name, navigate]);
    const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log('Audio playback failed:', error);
      });
    }
    };

    return (
        <div>
            <div style={{
                display: 'flex',
                flexDirection: 'column', // this is so that the teckelteun image appears above the box
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'rgba(184,210,235,255)'
            }}>
                <img id="teckelteun" src="/teckelteun.png" alt="Login Image"/>
                <audio ref={audioRef} src="/sans.mp3" />
                    <button onClick={handlePlay} style={{
                        color: 'transparent',
                        backgroundColor: 'transparent',
                        border: 'transparent'
                    }}>don't click!!!</button>
                <div id="test" style={{
                    backgroundColor: 'white',
                    width: '800px',
                    padding: '50px',
                    margin: '20px',
                    boxSizing: 'border-box',
                    position: 'relative',
                    borderRadius: '10px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <input
                            type='Username'
                            placeholder='Username'
                            name='Username'
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            style={{
                                marginBottom: '20px',
                                padding: '10px',
                                width: '80%',
                                boxSizing: 'border-box',
                            }}
                        />
                        <input
                            type='password'
                            placeholder='Wachtwoord'
                            name='Wachtwoord'
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            style={{
                                marginBottom: '20px',
                                padding: '10px',
                                width: '80%',
                                boxSizing: 'border-box',
                            }}
                        />

                        <Link to='/forgotPassword'>
                            <p>Wachtwoord vergeten?</p>
                        </Link>
                        <input
                            type="submit"
                            style={{
                                padding: '10px 20px',
                                width: '80%',
                                boxSizing: 'border-box',
                                borderRadius: '5px',
                                backgroundColor: 'rgba(76,145,249,255)',
                                color: 'white',
                                border: 'none',
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
