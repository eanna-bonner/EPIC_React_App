import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export function AdminDash() {

    interface User {
        username: string;
        password: string;
        role: string;
        // include other properties as needed
      }

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Make a GET request to your API to retrieve the user data
        fetch('https://i5xzaxat8e.execute-api.us-east-1.amazonaws.com/EPIC_Login_Auth/listusers', {
            method: 'GET'})
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error(error));
    }, []);

    const [searchTerm, setSearchTerm] = useState('');

    const handleDelete = (username: string) => {
        // Make a DELETE request to your API to delete the user
        fetch('https://i5xzaxat8e.execute-api.us-east-1.amazonaws.com/EPIC_Login_Auth/deleteuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            window.location.reload();
        })
        .catch(error => console.error(error));
    };

    return (
        <>
            <Header />
            <div>
                <h1>Admin Dashboard</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    onChange={(event) => {
                        setSearchTerm(event.target.value);
                    }}
                />
                <table>
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(users) && users.filter((user) => {
                            if (searchTerm === "") {
                                return user;
                            } else if (user.username.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return user;
                            }
                            return null;
                        }).map(user => (
                            <tr key={user.username}>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button onClick={() => handleDelete(user.username)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Footer />
        </>
    );
};