import { useEffect, useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function useLoginController()
{
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const users = [
        { email: "arie@vantienhoven.nl", password: "teckelteun", name: "Arie van Tienhoven" },
        { email: "test@gebruiker.com", password: "test123", name: "Test Gebruiker" },
        { email: "teckel@teun.nl", password: "password", name: "Teckel Teun" }
    ];

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    
        const form = event.currentTarget;
        const email = form.Email.value;
        const password = form.Wachtwoord.value;

        let user = users.find(user => user.email === email && user.password === password);
    
        if (user) {
            setName(user.name);
            setSubmitted(true);
        } else {
            setError('Email of wachtwoord is onjuist');
            setSubmitted(false);
        }
    };

    useEffect(() => {
        if (submitted) {
            navigate('/Home', { state: { name } });
        }
    }, [submitted, name, navigate]);

    return{error, name, submitted, handleSubmit };
}