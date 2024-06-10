import { useEffect, useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { useSetupPageController } from '../communication/SetuppageController';
import { Link } from 'react-router-dom';
import Navbar from './navbar';

function SetupPage(){
    // const {addWheelChair} = setupPageController();
    const {error, message, handleSubmit} = useSetupPageController();
    // const [chairId, setChairId] = useState('');
    // const [sensitivity, setSensitivity] = useState('');
    // const [patientId, setPatientId] = useState('');
    
    // const initChair = async () => {
    //     // uhh initialize
    //     const chair = {
    //         ChairId: chairId,
    //         WeightThreshold: sensitivity,
    //         CurrentPatientId: patientId
    //     }

    //     try {
    //         await addWheelChair(chair)
    //         console.log("Successfully added wheelchair");
    //     } catch (error) {
    //         console.log("Failed to add wheelchair");
    //     }
    // };

    
    return(
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
                    type='chairID' 
                    placeholder='Stoel ID' 
                    name='ChairID' 
                    className={generalStyle.inputField2} 
                    // value={chairId} 
                    // onChange={(e) => setChairId(e.target.value)}
                />
                <input 
                    type='sensorSensitivity' 
                    placeholder='Druksensor gevoeligheid' 
                    name='SensorSensitivity' 
                    className={generalStyle.inputField2} 
                    // value={sensitivity} 
                    // onChange={(e) => setSensitivity(e.target.value)}
                />
                <input 
                    type='patientID' 
                    placeholder='Patiënt ID' 
                    name='PatientID' 
                    className={generalStyle.inputField2} 
                    // value={patientId} 
                    // onChange={(e) => setPatientId(e.target.value)}
                />
                            {/* <button 
                            onClick={handleSubmit}
                                className={generalStyle.verticalButton}
                            >
                            Initialiseer
                            </button> */}
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
            </div>
        </div>
        </div>
    );
}

export default SetupPage;