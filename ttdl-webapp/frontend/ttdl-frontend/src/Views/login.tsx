import React, { useState, useEffect } from 'react';
import Navbar from './navbar';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (submitted) {
            console.log(name);
            navigate('/Home');
        }
    }, [submitted, name, navigate]);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (email === 'arie@vantienhoven.nl' && password === 'teckelteun') {
            setName("Arie van Tienhoven");
            setSubmitted(true);
        } else {
            setError('Email of wachtwoord is onjuist');
            setSubmitted(false);
        }
    };

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
                            type='email'
                            placeholder='Email'
                            name='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
