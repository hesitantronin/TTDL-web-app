import React from 'react';
import Navbar from './navbar';
import { useForgotPasswordController } from '../communication/WachtwoordVergetenController';

function ForgotPassword() {
    const { handleSubmit, error } = useForgotPasswordController();

    return (
        <div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundColor: 'rgba(184, 210, 235, 1)',
                position: 'relative',
                overflow: 'hidden',
            }}>
                <div style={{
                    backgroundColor: 'white',
                    width: '800px',
                    padding: '50px',
                    margin: '20px',
                    boxSizing: 'border-box',
                    borderRadius: '10px',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div className="marquee">
                        <p>Momenteel wordt er hard gewerkt aan deze functie!
                                    Excuses voor het ongemak!
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            width: '100%',
                        }}>
                        <input type='text' placeholder='Gebruikersnaam' name='gebruikersnaam' style={{
                            marginBottom: '20px',
                            padding: '10px',
                            width: '80%',
                            boxSizing: 'border-box',
                        }} />
                        <input type="submit" style={{
                            padding: '10px 20px',
                            width: '80%',
                            boxSizing: 'border-box',
                            borderRadius: '5px',
                            backgroundColor: 'rgba(76, 145, 249, 1)',
                            color: 'white',
                            border: 'none',
                        }} />
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
