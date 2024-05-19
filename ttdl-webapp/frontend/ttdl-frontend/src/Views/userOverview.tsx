import { useEffect, useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link } from 'react-router-dom';  
import Navbar from './navbar';

function UserOverview() {
    const [users, setUsers] = useState<string[]>(["Gebruiker 1", "Gebruiker 2", "Gebruiker 3", "Gebruiker 4", "Gebruiker 5"]);

    const addUser = () => {
        const newUser = `Gebruiker ${users.length + 1}`;
        setUsers([...users, newUser]);
    };

    const removeUser = (index: number) => {
        const isConfirmed = window.confirm('Weet uw zeker dat u deze gebruiker wilt verwijderen?');
        if (isConfirmed) {
            setUsers(users.filter((_, i) => i !== index));
        }
    };

    return (
        <div>
            <Navbar />
            <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    <button 
                        onClick={addUser}
                        className={generalStyle.button}
                    >
                        voeg gebruiker toe
                    </button>
                    <h2 className={generalStyle.heading}></h2>
                    <ul className={generalStyle.userList}>
                        {users.map((user, index) => (
                            <li key={index} className={generalStyle.userListItem}>
                                <Link to="/userDataOverview" className={generalStyle.userLink}>
                                    {user}
                                </Link>
                                <button 
                                    onClick={() => removeUser(index)}
                                    className={generalStyle.removeButton}
                                >
                                    Verwijder
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default UserOverview;
