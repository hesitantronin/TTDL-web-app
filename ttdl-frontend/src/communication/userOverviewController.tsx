// userOverviewController.ts
import { useState } from 'react';

interface User {
    id: string;
    name: string;
    lastName: string;
}

export function useUserOverviewController() {
    let [users, setUsers] = useState<User[]>([
        { id: "1", name: "cliënt", lastName: "1" },
        { id: "2", name: "cliënt", lastName: "2" },
        { id: "3", name: "cliënt", lastName: "3" },
        { id: "4", name: "cliënt", lastName: "4" },
        { id: "5", name: "cliënt", lastName: "5" },
    ]);

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [lastName, setLastName] = useState('');
    const [nameError, setNameError] = useState('');
    const [idError, setIdError] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const addUser = () => {
        // Check if all fields are filled, otherwise set error messages
        if (!name || !id || !lastName) {
            if (!name) setNameError('Name is required');
            if (!id) setIdError('ID is required');
            if (!lastName) setLastNameError('Last Name is required');
            return; // Exit function if any field is empty
        }
        // If any error exists, return without adding the user
        if (nameError || idError || lastNameError) return;

        const newUser = { id, name, lastName };
        setUsers([...users, newUser]);
        // Clear input fields after successful addition
        setName('');
        setId('');
        setLastName('');
        // Clear error messages after successful addition
        setNameError('');
        setIdError('');
        setLastNameError('');
    };

    const deleteUser = (index: number) => {
        const isConfirmed = window.confirm('Weet uw zeker dat u deze gebruiker wilt verwijderen?');
        if (isConfirmed) {
            setUsers(users.filter((_, i) => i !== index));
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
