// import { useEffect, useState, FormEvent } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export function useLoginController()
// {
//     // const [email, setEmail] = useState('');
//     // const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const [name, setName] = useState('');
//     const [submitted, setSubmitted] = useState(false);
//     const navigate = useNavigate();

//     const users = [
//         { email: "arie@vantienhoven.nl", password: "teckelteun", name: "Arie van Tienhoven" },
//         { email: "test@gebruiker.com", password: "test123", name: "Test Gebruiker" },
//         { email: "teckel@teun.nl", password: "password", name: "Teckel Teun" }
//     ];

//     const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
    
//         const form = event.currentTarget;
//         const email = form.Email.value;
//         const password = form.Wachtwoord.value;

//         let user = users.find(user => user.email === email && user.password === password);
    
//         if (user) {
//             setName(user.name);
//             setSubmitted(true);
//         } else {
//             setError('Email of wachtwoord is onjuist');
//             setSubmitted(false);
//         }
//     };

//     useEffect(() => {
//         if (submitted) {
//             navigate('/Home', { state: { name } });
//         }
//     }, [submitted, name, navigate]);

//     return{error, name, submitted, handleSubmit };
// }


import { useEffect, useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function useLoginController() {
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        console.log('handleSubmit');
        event.preventDefault();

        const form = event.currentTarget;
        const username = form.Username.value;
        const password = form.Wachtwoord.value;

        try {
            const response = await fetch('http://localhost:28080/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ uname: username, password: password })
            });

            if (response.ok) {
                const responseData = await response.json();
                if (responseData.match) {
                    console.log('match');
                    setName(username);
                    setSubmitted(true);
                } else {
                    setError('Invalid username or password');
                    setSubmitted(false);
                }
            } else if (response.status === 401) {
                setError('Invalid username or password');
                setSubmitted(false);
            } else {
                setError('An error occurred while processing your request');
                setSubmitted(false);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('An error occurred while processing your request');
            setSubmitted(false);
        }
    };

    useEffect(() => {
        if (submitted) {
            navigate('/Home', { state: { name } });
        }
    }, [submitted, name, navigate]);

    return { error, name, submitted, handleSubmit };
}



