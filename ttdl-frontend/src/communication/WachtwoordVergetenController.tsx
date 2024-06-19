import { useEffect, useState, FormEvent } from 'react';

export function useForgotPasswordController() {
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [password, setPassword] = useState('');

    const users = [
        { username: "Arie", password: "TeckelTeun", name: "Arie van Tienhoven" }
    ];

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const form = event.currentTarget;
        const username = form.gebruikersnaam.value;

        let user = users.find(user => user.username === username);

        if (user)
        {
            setPassword(user.password);
            setSubmitted(true);
        }
        else 
        {
            setError('Geen account gevonden met deze gebruikersnaam');
            setSubmitted(false);
        }
    };

    useEffect(() => {
        if (submitted) {
            setError(`Uw wachtwoord is: ${password}`);
        }
    }, [submitted, password]);

    return { handleSubmit, error };
}
