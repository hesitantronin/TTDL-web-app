// userOverviewController.ts
import { useState } from 'react';

interface User {
    id: string;
    name: string;
    lastName: string;
}

export function useUserOverviewController() {
    let [users, setUsers] = useState<User[]>([
        { id: "1", name: "Gebruiker", lastName: "1" },
        { id: "2", name: "Gebruiker", lastName: "2" },
        { id: "3", name: "Gebruiker", lastName: "3" },
        { id: "4", name: "Gebruiker", lastName: "4" },
        { id: "5", name: "Gebruiker", lastName: "5" },
    ]);

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [lastName, setLastName] = useState('');

    const addUser = () => {
        const newUser = { id, name, lastName };
        setUsers([...users, newUser]);
    };

    const deleteUser = (index: number) => {
        const isConfirmed = window.confirm('Weet uw zeker dat u deze gebruiker wilt verwijderen?');
        if (isConfirmed) {
            setUsers(users.filter((_, i) => i !== index));
        }
    };

    const handleAddUser = () => {
        addUser();
        setName('');
        setId('');
        setLastName('');
    };

    const handleCancel = () => {
        setName('');
        setId('');
        setLastName('');
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
        handleAddUser,
        handleCancel,
    };
}
