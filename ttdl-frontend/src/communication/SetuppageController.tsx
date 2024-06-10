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

        let chair = chairs.find(chair => chair.chairId === chairId || chair.patientId === patientId);
    
        if (!chair) {
            setChairId(chairId);
            setSensitivity(sensitivity);
            setPatientId(patientId);
            setChairs([...chairs, { chairId, sensitivity, patientId }]);
            setError('');
            setSubmitted(true);
        } else {
            setError('chairId of patientId bestaat al');
            setMessage('');
            setSubmitted(false);
        }
    };

    useEffect(() => {
        if (submitted) {
            setMessage('Stoel succesvol geïnitialiseerd!');
            setError('');
        }
    }, [submitted]);

    return {error, message, handleSubmit, chairs};
}