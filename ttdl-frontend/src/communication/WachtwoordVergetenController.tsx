import { useEffect, useState, FormEvent } from 'react';

export function useForgotPasswordController() {
    const [error, setError] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const username = form.gebruikersnaam.value;

        try {
            const response = await fetch('http://localhost:28080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uname: username, password: "" })  // Sending an empty password field
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.match) {
                    setError('Don\'t forget your password next time!');
                } else {
                    setError('Invalid username');
                }
            } else if (response.status === 404) {
                setError('Username not found');
            } else {
                setError('An error occurred while processing your request');
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing your request');
        }
    };

    return { handleSubmit, error };
}
