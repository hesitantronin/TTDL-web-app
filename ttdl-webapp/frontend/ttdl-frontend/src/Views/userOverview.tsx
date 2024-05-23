import { useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link } from 'react-router-dom';  
import Navbar from './navbar';
import { useUserOverviewController } from '../communication/userOverviewController';

function UserOverview() {
    // Replace the useState hook with your custom controller
    const {
        users,
        name,
        setName,
        id,
        setId,
        lastName,
        setLastName,
        addUser,
        deleteUser,
        handleCancel,
        handleAddUser
    } = useUserOverviewController();

    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showUserList, setShowUserList] = useState(true); // State to control visibility of user list

    const handleConfirm = () => {
        addUser();
        setShowAddUserForm(false); // Hide the add user form after confirming
        setShowUserList(true); // Show user list after confirming
    };

    return (
        <div>
            <Navbar />
            <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    {/* Show the add user form when showAddUserForm is true */}
                    {showAddUserForm && (
                        <form onSubmit={(e) => { e.preventDefault(); handleConfirm(); }} className={generalStyle.form}>
                            <h2 className={generalStyle.heading}>Voeg gebruiker toe</h2>
                            <input
                                type="text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={generalStyle.inputField}
                            />
                            <input
                                type="text"
                                placeholder="ID"
                                value={id}
                                onChange={(e) => setId(e.target.value)}
                                className={generalStyle.inputField}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className={generalStyle.inputField}
                            />
                            <div>
                                <button 
                                    type="submit"
                                    className={generalStyle.button}
                                    onClick={() => {
                                        handleAddUser();
                                        setShowUserList(true); // Show user list after adding user
                                        setShowAddUserForm(false); // Hide the add user form after adding user
                                    }}
                                >
                                    Confirm
                                </button>
                                <button 
                                    type="button" 
                                    onClick={() => {
                                        handleCancel();
                                        setShowUserList(true); // Show user list when cancelling
                                        setShowAddUserForm(false); // Hide the add user form when cancelling
                                    }}
                                    className={generalStyle.button}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    )}
                    {/* Button to toggle the add user form */}
                    {!showAddUserForm && (
                        <button 
                            onClick={() => {
                                setShowAddUserForm(true);
                                setShowUserList(false); // Hide user list when adding user
                            }}
                            className={generalStyle.button}
                        >
                            Voeg gebruiker toe
                        </button>
                    )}
                    <h2 className={generalStyle.heading}></h2>
                    {/* Render user list */}
                    {showUserList && (
                        <ul className={generalStyle.userList}>
                            {users.map((user, index) => (
                                <li key={index} className={generalStyle.userListItem}>
                                    <Link to="/userDataOverview" className={generalStyle.userLink}>
                                        {user.name} {user.lastName}
                                    </Link>
                                    <button 
                                        onClick={() => deleteUser(index)}
                                        className={generalStyle.removeButton}
                                    >
                                        Verwijder
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserOverview;
