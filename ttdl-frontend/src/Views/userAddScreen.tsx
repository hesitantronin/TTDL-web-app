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
                        className={generalStyle.inputField2}
                    />
                    <input
                        type='text'
                        placeholder='Achternaam'
                        name='LastName'
                        className={generalStyle.inputField2}
                    />
                    <input
                        type='email'
                        placeholder='Email'
                        name='Email'
                        className={generalStyle.inputField2}
                    />
                    <input
                        type='password'
                        placeholder='Wachtwoord'
                        name='Password'
                        className={generalStyle.inputField2}
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

