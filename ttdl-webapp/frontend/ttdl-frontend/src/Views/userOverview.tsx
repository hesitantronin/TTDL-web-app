import { useEffect, useState } from 'react';

function userOverview() {
    const [users, setUsers] = useState<string[]>(["User 1", "User 2", "User 3", "User 4", "User 5"]);

    const addUser = () => {
        const newUser = `User ${users.length + 1}`;
        setUsers([...users, newUser]);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: 'rgba(184,210,235,255)'
        }}>
            <div style={{
                backgroundColor: 'white',
                width: '800px',
                padding: '50px',
                margin: '20px',
                boxSizing: 'border-box',
                position: 'relative',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
            }}>
                <button 
                    onClick={addUser}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        padding: '10px',
                        backgroundColor: 'rgba(76,145,249,255)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                    }}>
                    Add user
                </button>
                <h2 style={{ paddingTop: '50px' }}>BOXX</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {users.map((user, index) => (
                        <li key={index} style={{
                            padding: '10px',
                            borderBottom: '1px solid #ddd'
                        }}>
                            {user}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default userOverview;
