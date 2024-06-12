// userOverviewController.ts
import { useState, useEffect } from 'react';

interface User {
    id: any;
    name: string;
    lastName: string;
}

export function useUserOverviewController() {
    let [users, setUsers] = useState<User[]>([]); // Initialize users state with an empty array
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameError, setNameError] = useState('');
    const [idError, setIdError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    useEffect(() => {
        // Fetch the patient data from the backend when the component mounts
        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:28080/api/patient');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                const mappedData = data.map((patient: any) => ({
                    id: patient.patientId,
                    name: patient.firstName,
                    lastName: patient.lastName
                }));
                setUsers(mappedData);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };
        fetchUsers();
    }, []);

    const addUser = async () => {
        // Check if all fields are filled, otherwise set error messages
        if (!name || !id || !lastName) {
            if (!name) setNameError('Name is required');
            // if (!id) setIdError('ID is required');
            if (!lastName) setLastNameError('Last Name is required');
            return; // Exit function if any field is empty
        }
        // If any error exists, return without adding the user
        if (nameError || idError || lastNameError) return;

        const newUser = {name, lastName };
        try {
            const response = await fetch('http://localhost:28080/api/patient', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newUser),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const addedUser = await response.json();
            setUsers([...users, {
                id: addedUser.id,
                name: addedUser.firstName,
                lastName: addedUser.lastName,
            }]);
            // Clear input fields after successful addition
            setName('');
            setId('');
            setLastName('');
            // Clear error messages after successful addition
            setNameError('');
            setIdError('');
            setLastNameError('');
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    const deleteUser = async (index: number) => {
        const isConfirmed = window.confirm('Weet u zeker dat u deze gebruiker wilt verwijderen?');
        if (isConfirmed) {
            try {
                const userId = users[index].id;
                const response = await fetch(`http://localhost:28080/api/patient/${userId}`, {
                    method: 'DELETE',
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                setUsers(users.filter((_, i) => i !== index));
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }
    };


    const handleCancel = () => {
        // Clear input fields and error messages after cancelling
        setName('');
        setId('');
        setLastName('');
        setNameError('');
        setIdError('');
        setLastNameError('');
    };

    return {
        users,
        name,
        setName,
        id,
        setId,
        lastName,
        setLastName,
        addUser,
        deleteUser,
        handleCancel,
        nameError,
        idError,
        lastNameError,
        setIdError,
        setLastNameError,
        setNameError
    };
}
