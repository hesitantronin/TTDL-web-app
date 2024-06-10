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
                    <h2>Set Up Wheelchair</h2>
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
                            placeholder='Chair ID'
                            name='ChairID'
                            className={generalStyle.inputField2}
                        />
                        <input
                            type='text'
                            placeholder='Pressure Sensor Sensitivity'
                            name='SensorSensitivity'
                            className={generalStyle.inputField2}
                        />
                        <input
                            type='text'
                            placeholder='Patient ID'
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
                        {isListVisible ? 'Hide Chairs List' : 'Show Chairs List'}
                    </button>
                    {isListVisible && (
                        <div style={{ marginTop: '20px' }}>
                            <h3>Chairs List:</h3>
                            <ul>
                                {chairs.map(chair => (
                                    <li key={chair.chairId}>
                                        Chair ID: {chair.chairId}, Sensitivity: {chair.sensitivity}, Patient ID: {chair.patientId}
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
