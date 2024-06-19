import { Console } from 'console';
import { useEffect, useState } from 'react';

export function userAddController() {

    
    const validateFirstName = (name: any) => {
        const namePattern = /^[A-Za-z]{2,}$/;
        if (!namePattern.test(name)) {
            return 'Voornaam moet minstens 2 karakters lang zijn en alleen letters bevatten';
        }
        return '';
    };

    const validateLastName = (name: any) => {
        const namePattern = /^[A-Za-z]{2,}$/;
        if (!namePattern.test(name)) {
            return 'Achternaam moet minstens 2 karakters lang zijn en alleen letters bevatten';
        }
        return '';
    };

    const validatePassword = (password: any) => {
        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordPattern.test(password)) {
            return 'Wachtwoord moet minstens 8 karakters lang zijn, één hoofdletter, één kleine letter, één cijfer en één speciaal teken bevatten';
        }
        return '';
    };
    const addUser = async (user: any) => {
    try {
        const response = await fetch('http://localhost:28080/api/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                uname: user.Uname, 
                password: user.Password
            }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};

    return { addUser, validateFirstName, validateLastName, validatePassword};
}
    