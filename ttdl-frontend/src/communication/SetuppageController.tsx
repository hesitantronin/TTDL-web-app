import { useEffect, useState, FormEvent } from 'react';

export function useSetupPageController()
{
    // const addWheelChair = async (chair: any) => {
    //     try {
    //         const response = await fetch('http://localhost:28080/api/chairs/addchair', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ 
    //             chairId: chair.ChairId, 
    //             sensitivity: chair.WeightThreshold,
    //             patientId: chair.CurrentPatientId
    //         }),
    //     });

    //     if (!response.ok) {
    //         throw new Error('Network response was not OK');
    //     }

    //     const result = await response.json();
    //     return result;
    //     } catch (error) {
    //         console.error('There was a problem fetching data:', error);
    //         throw error;
    //     }
    // };

    const [chairId, setChairId] = useState('');
    const [sensitivity, setSensitivity] = useState('');
    const [patientId, setPatientId] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [chairs, setChairs] = useState([
        { chairId: "abc123", sensitivity: 53, patientId: "1" },
        { chairId: "xyz000", sensitivity: 80, patientId: "2" },
        { chairId: "klm999", sensitivity: 60, patientId: "3" }
    ]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        const chairId = form.ChairID.value;
        const sensitivity = form.SensorSensitivity.value;
        const patientId = form.PatientID.value;
    
        const existingChairById = chairs.find(chair => chair.chairId === chairId);
        const existingChairByPatient = chairs.find(chair => chair.patientId === patientId);
    
        // Check if chairId or patientId already exists
        if (existingChairById && existingChairByPatient) {
            setError('StoelID of PatiëntId bestaat al');
            setMessage('');
            setSubmitted(false);
            return;
        }
    
        // chairId exists, update patientID if it doesn't already exist in another chair
        else if (existingChairById) {
            console.log("Chair exists by ID");
            console.log({chairId})
            if (!existingChairByPatient || existingChairByPatient.chairId === chairId) {
                const updatedChairs = chairs.map(chair =>
                    chair.chairId === chairId ? { ...chair, sensitivity, patientId } : chair
                );
                setChairs(updatedChairs);
                setError('');
                setSubmitted(true);
                return;
            } else {
                setError('PatiëntId is al toegewezen aan een andere stoel');
                setMessage('');
                setSubmitted(false);
                return;
            }
        }

        // Chairid does not exist, only allow patientids that don't exist already
        else if (!existingChairById){
            console.log(`Stoel met id bestaat nog niet`);
            console.log({chairId});
            if(!existingChairByPatient || existingChairByPatient.chairId === chairId){
                console.log("ChairID of ExistingChairByPatient");
                console.log(existingChairByPatient?.chairId);

                // New chair, add it to the list
                setChairId(chairId);
                setSensitivity(sensitivity);
                setPatientId(patientId);
                setChairs([...chairs, { chairId, sensitivity, patientId }]);
                setError('');
                setSubmitted(true);
            } else {
                setError('PatiëntId is al toegewezen aan een andere stoel');
                setMessage('');
                setSubmitted(false);
                return;
            }
                
        }
    
        
    };
    
    useEffect(() => {
        if (submitted) {
            setMessage('Stoel succesvol geïnitialiseerd!');
            setError('');
            setSubmitted(false); // Reset submitted to handle multiple form submissions
        }
    }, [submitted]);

    return {error, message, handleSubmit, chairs};
}