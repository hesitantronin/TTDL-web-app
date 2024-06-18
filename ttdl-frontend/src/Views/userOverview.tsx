import { useState } from 'react';
import generalStyle from './stylesheets/generalStyle.module.css';
import { Link } from 'react-router-dom';  
import Navbar from './navbar';
import { useUserOverviewController } from '../communication/userOverviewController';

function UserOverview() {
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
        nameError,
        idError,
        lastNameError,
        setIdError,
        setLastNameError,
        setNameError
    } = useUserOverviewController();

    const [showAddUserForm, setShowAddUserForm] = useState(false);
    const [showUserList, setShowUserList] = useState(true); // State to control visibility of user list

    const handleConfirm = () => {
        if (!name || !id || !lastName) {
            // If any input is empty, set error messages and prevent form submission
            setNameError(name ? '' : 'Name is required');
            setIdError(id ? '' : 'ID is required');
            setLastNameError(lastName ? '' : 'Last Name is required');
            return;
        }

        addUser();
        setShowAddUserForm(false); // Hide the add user form after confirming
        setShowUserList(true); // Show user list after confirming
    };

    return (
        <div>
            <Navbar />
            <div className={generalStyle.container}>
                <div className={generalStyle.box}>
                    {showAddUserForm && (
                        <form onSubmit={(e) => { e.preventDefault(); handleConfirm(); }} className={generalStyle.form}>
                            <h2 className={generalStyle.heading}>Voeg patiënt toe</h2>
                            <input
                                type="text"
                                placeholder="First Name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                    setNameError('');
                                }}
                                className={generalStyle.inputField}
                            />
                            { nameError && <span style={{ color: 'red' }}>{nameError}</span> }

                            <input
                                type="text"
                                placeholder="Last Name"
                                value={lastName}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                    setLastNameError('');
                                }}
                                className={generalStyle.inputField}
                            />
                            { lastNameError && <span style={{ color: 'red'}}>{lastNameError}</span> }
                            <input
                                type="text"
                                placeholder="ID"
                                value={id}
                                onChange={(e) => {
                                    setId(e.target.value);
                                    setIdError('');
                                }}
                                className={generalStyle.inputField}
                            />
                            { idError && <span style={{ color: 'red'}}>{idError}</span> }

                            <div>
                                <button 
                                    type="submit"
                                    className={generalStyle.button}
                                >
                                    Bevestig
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
                    {!showAddUserForm && (
                        <button 
                            onClick={() => {
                                setShowAddUserForm(true);
                                setShowUserList(false); // Hide user list when adding user
                            }}
                            className={generalStyle.button}
                        >
                            Voeg patiënt toe
                        </button>
                    )}
                    {showUserList && (
                        <ul className={generalStyle.userList}>
                            {users.map((user, index) => (
                                <li key={index} className={generalStyle.userListItem}>
                                    <Link to={`/userDataOverview/${user.id}/${user.name}/${user.lastName}`} className={generalStyle.userLink}>
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
