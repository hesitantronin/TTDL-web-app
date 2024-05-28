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
                <input type='chairID' placeholder='Stoel ID' name='ChairID' className={generalStyle.inputField2}/>
                    <input type='sensorSensitivity' placeholder='Druksensor gevoeligheid' name='SensorSensitivity' className={generalStyle.inputField2} />
                        <input type='patientID' placeholder='Patiënt ID' name='PatientID' className={generalStyle.inputField2} />
                            <button 
                            onClick={initChair}
                                className={generalStyle.verticalButton}
                            >
                            Initialiseer
                            </button>
                    </div>
                </div>
        </div>
    );
}

export default setupPage;