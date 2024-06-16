import { useEffect, useState, FormEvent } from 'react';

interface Chair {
    chairId: string;
    currentPatientId?: string;
    weightTreshhold: number;
    lowBattery: boolean;
    currentPatient?: any;
    measurements: any[];
}

export function useSetupPageController() {
    const [error, setError] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [chairs, setChairs] = useState<Chair[]>([]);

    useEffect(() => {
        const fetchChair = async () => {
            try {
                const response = await fetch('http://localhost:28080/api/Chair');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                const mappedData = result.map((chair: any) => ({
                    chairId: chair.chairId,
                    currentPatientId: chair.currentPatientId,
                    weightTreshhold: chair.weightTreshhold,
                    lowBattery: chair.lowBattery,
                    currentPatient: chair.currentPatient,
                    measurements: chair.measurements,
                }));
                setChairs(mappedData);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
        fetchChair();
    }, []);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const chairId = form.ChairID.value;
        const sensitivity = form.SensorSensitivity.value;
        const patientId = form.PatientID.value;

        const existingChairById = chairs.find(chair => chair.chairId === chairId);
        const existingChairByPatient = chairs.find(chair => chair.currentPatientId === patientId);

        if (existingChairById) {
            if (!existingChairByPatient || existingChairByPatient.chairId === chairId || patientId === '') {
                const updatedChairs = chairs.map(chair =>
                    chair.chairId === chairId ? {
                        ...chair,
                        currentPatientId: patientId,
                        weightTreshhold: sensitivity,
                        currentPatient: null,
                        measurements: []
                    } : chair
                );

                const encodedChairId = encodeURIComponent(chairId);

                try {
                    const response = await fetch(`http://localhost:28080/api/Chair/${encodedChairId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(updatedChairs.find(chair => chair.chairId === chairId)),
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        throw new Error(`Network response was not ok: ${errorText}`);
                    }

                    setChairs(updatedChairs);
                    setError('');
                    setSubmitted(true);
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }
            } else {
                setError('PatiëntId is al toegewezen aan een andere stoel');
                setMessage('');
                setSubmitted(false);
                return;
            }
        } else {
            if (!existingChairByPatient || existingChairByPatient.chairId === chairId) {
                const newChair: Chair = {
                    chairId: chairId,
                    currentPatientId: patientId,
                    weightTreshhold: sensitivity,
                    lowBattery: true,
                    currentPatient: null,
                    measurements: []
                };

                try {
                    const response = await fetch('http://localhost:28080/api/Chair', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(newChair),
                    });

                    if (!response.ok) {
                        const errorText = await response.text();
                        throw new Error(`Network response was not ok: ${errorText}`);
                    }

                    const addedChair = await response.json();
                    setChairs([...chairs, {
                        chairId: addedChair.chairId,
                        currentPatientId: addedChair.currentPatientId,
                        weightTreshhold: addedChair.weightTreshhold,
                        lowBattery: addedChair.lowBattery,
                        currentPatient: addedChair.currentPatient,
                        measurements: addedChair.measurements,
                    }]);
                    setError('');
                    setSubmitted(true);
                } catch (error) {
                    console.error('There was a problem with the fetch operation:', error);
                }

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
            setSubmitted(false);
        }
    }, [submitted]);

    const deleteChair = async (chairId: string) => {
        try {
            const response = await fetch(`http://localhost:28080/api/Chair/${chairId}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            setChairs(chairs.filter(chair => chair.chairId !== chairId));
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return { error, message, handleSubmit, chairs, deleteChair };
}
