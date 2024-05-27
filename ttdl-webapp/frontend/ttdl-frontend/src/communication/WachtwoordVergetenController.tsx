import { useEffect, useState, FormEvent } from 'react';

export function useForgotPasswordController()
{
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [password, setPassword] = useState('');

    const users = [
        { email: "arie@vantienhoven.nl", password: "teckelteun", name: "Arie van Tienhoven" },
        { email: "test@gebruiker.com", password: "test123", name: "Test Gebruiker" },
        { email: "teckel@teun.nl", password: "password", name: "Teckel Teun" }
    ];

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        const email = form.Email.value;

        let user = users.find(user => user.email === email);

        if (user)
        {
            setPassword(user.password);
            setSubmitted(true);
        }
        else 
        {
            setError('Geen account gevonden met dit mailadres');
            setSubmitted(false);
        }
    }

    useEffect(() => {
        if (submitted) {
            setError(`Uw wachtwoord is: ${password}`);
        }
    }, [submitted, password]);

    return {handleSubmit, password, error}

}