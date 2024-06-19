import React, { useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { useSetupPageController } from '../communication/SetuppageController';
import Navbar from './navbar';

function SetupPage() {
    const { error, message, handleSubmit, chairs } = useSetupPageController();
    const [isListVisible, setIsListVisible] = useState(false);

    const toggleListVisibility = () => {
        setIsListVisible(!isListVisible);
    };

    return (
        <div>
            <Navbar />
            <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    <h2>Rolstoel Instellen</h2>
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
                            type='text'
                            placeholder='Stoel ID'
                            name='ChairID'
                            className={generalStyle.inputField2}
                            required
                        />
                        <input
                            type='text'
                            placeholder='Druk Sensor Gevoeligheid'
                            name='SensorSensitivity'
                            className={generalStyle.inputField2}
                            required
                        />
                        <input
                            type='text'
                            placeholder='Patiënt ID (laat leeg om patiënt te verwijderen van deze stoel)'
                            name='PatientID'
                            className={generalStyle.inputField2}
                        />
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
                        {message && <p style={{ color: 'black' }}>{message}</p>}
                    </form>
                    <button
                        onClick={toggleListVisibility}
                        style={{
                            marginTop: '20px',
                            padding: '10px 20px',
                            borderRadius: '5px',
                            backgroundColor: 'rgba(76,145,249,255)',
                            color: 'white',
                            border: 'none',
                        }}
                    >
                        {isListVisible ? 'Verberg Stoel Lijst' : 'Toon Stoel Lijst'}
                    </button>
                    {isListVisible && (
                        <div style={{ marginTop: '20px' }}>
                            <h3>Stoel Lijst:</h3>
                            <ul>
                                {chairs.map(chair => (
                                    <li key={chair.chairId}>
                                        Stoel ID: {chair.chairId}, Sensor gevoeligheid: {chair.weightTreshhold}, Patiënt ID: {chair.currentPatientId}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SetupPage;
