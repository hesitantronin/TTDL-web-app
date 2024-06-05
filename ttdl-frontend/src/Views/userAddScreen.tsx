import React, { useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { userAddController } from '../communication/userAddController';
import Navbar from './navbar';

function AddUserScreen() {
    const { addUser } = userAddController();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleAddUser = async () => {
        const user = {
            Uname: firstName,
            Password: password,
            
        };

        try {
            await addUser(user);
            setMessage('Gebruiker succesvol toegevoegd');
        } catch (error: any) {
            setMessage('Failed to add user: ' + error.message);
        }
    };

    return (
        <div>
            <Navbar />
            <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    <h2>Gebruiker Toevoegen</h2>
                    <input
                        type='text'
                        placeholder='Voornaam (gebruikersnaam)'
                        name='FirstName'
                        className={generalStyle.inputField2}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        type='text'
                        placeholder='Achternaam'
                        name='LastName'
                        className={generalStyle.inputField2}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {/*  if in the future there is an email server that informs the user an account has been made
                    <input
                        type='email'
                        placeholder='Email'
                        name='Email'
                        className={generalStyle.inputField2}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> */}
                    <input
                        type='password'
                        placeholder='Wachtwoord'
                        name='Password'
                        className={generalStyle.inputField2}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        onClick={handleAddUser}
                        className={generalStyle.verticalButton}
                    >
                        Gebruiker Toevoegen
                    </button>
                    {message && <p className={generalStyle.message}>{message}</p>}
                </div>
            </div>
        </div>
    );
}

export default AddUserScreen;
