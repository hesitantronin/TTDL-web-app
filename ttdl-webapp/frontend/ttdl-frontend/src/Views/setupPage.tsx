import { useEffect, useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

function setupPage(){
    const initChair = () => {
        // uhh initialize
    };

    return(
        <div>
             <Navbar />
        <div className={generalStyle.container}>
            <div className={generalStyle.box}>
                <h2>Rolstoel Instellen</h2>
                <input type='chairID' placeholder='Stoel ID' name='ChairID' style={{
                            marginBottom: '20px',
                            padding: '10px',
                            width: '80%',
                            boxSizing: 'border-box',
                }} />
                    <input type='sensorSensitivity' placeholder='Druksensor gevoeligheid' name='SensorSensitivity' style={{
                            marginBottom: '20px',
                            padding: '10px',
                            width: '80%',
                            boxSizing: 'border-box',
                    }} />
                        <input type='patientID' placeholder='Patiënt ID' name='PatientID' style={{
                            marginBottom: '20px',
                            padding: '10px',
                            width: '80%',
                            boxSizing: 'border-box',
                        }} />
                            <button 
                            onClick={initChair}
                                className={generalStyle.button}
                            >
                            Initialiseer
                            </button>
            </div>
        </div>
        </div>
    );
}

export default setupPage;