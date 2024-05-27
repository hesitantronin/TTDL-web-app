import React from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

function AddUserScreen() {
    const addUser = () => {
        // Add user logic
    };

    return (
        <div>
            <Navbar />
            <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    <h2>Gebruiker Toevoegen</h2>
                    <input
                        type='text'
                        placeholder='Voornaam'
                        name='FirstName'
                        style={{
                            marginBottom: '20px',
                            marginLeft: '100px',
                            marginRight: '100px',
                            padding: '10px',
                            width: '80%',
                            boxSizing: 'border-box',
                        }}
                    />
                    <input
                        type='text'
                        placeholder='Achternaam'
                        name='LastName'
                        style={{
                            marginBottom: '20px',
                            marginLeft: '100px',
                            marginRight: '100px',
                            padding: '10px',
                            width: '80%',
                            boxSizing: 'border-box',
                        }}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        name='Email'
                        style={{
                            marginBottom: '20px',
                            marginLeft: '100px',
                            marginRight: '100px',
                            padding: '10px',
                            width: '80%',
                            boxSizing: 'border-box',
                        }}
                    />
                    <input
                        type='password'
                        placeholder='Wachtwoord'
                        name='Password'
                        style={{
                            marginBottom: '20px',
                            marginLeft: '100px',
                            marginRight: '100px',
                            padding: '10px',
                            width: '80%',
                            boxSizing: 'border-box',
                        }}
                    />
                    <button
                        onClick={addUser}
                        className={generalStyle.verticalButton}
                    >
                        Gebruiker Toevoegen
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddUserScreen;

