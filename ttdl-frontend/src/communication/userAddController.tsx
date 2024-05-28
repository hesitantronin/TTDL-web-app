import { Console } from 'console';
import { useEffect, useState } from 'react';

export function userAddController() {
    //this has to work with the database to add a user
    // src/controllers/userController.js
    const addUser = async (user: any) => {
    // try {
    //     const response = await fetch('http://localhost:28080/api/users/register', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //             user: user.Uname,
    //             password: user.Password
    //         }),
    //     });

    //     if (!response.ok) {
    //         throw new Error('Network response was not ok');
    //     }

    //     const result = await response.json();
    //     return result;
    // } catch (error) {
    //     console.error('There was a problem with the fetch operation:', error);
    //     throw error;
    // }
};

    return { addUser };
}
    