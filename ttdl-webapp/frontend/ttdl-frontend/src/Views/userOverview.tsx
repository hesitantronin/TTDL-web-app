import { useEffect, useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import Navbar from './navbar';

function UserOverview() {
    const [users, setUsers] = useState<string[]>(["User 1", "User 2", "User 3", "User 4", "User 5"]);

    const addUser = () => {
        const newUser = `User ${users.length + 1}`;
        setUsers([...users, newUser]);
    };

    const removeUser = (index: number) => {
        const isConfirmed = window.confirm('Are you sure you want to remove this user?');
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
                        Add user
                    </button>
                    <h2 className={generalStyle.heading}>BOXX</h2>
                    <ul className={generalStyle.userList}>
                        {users.map((user, index) => (
                            <li key={index} className={generalStyle.userListItem}>
                                {user}
                                <button 
                                    onClick={() => removeUser(index)}
                                    className={generalStyle.removeButton}
                                >
                                    Remove
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
