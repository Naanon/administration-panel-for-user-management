import React, { useState, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

function Landing() {
    const [users, setUsers] = useState([]);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');

    async function searchUsers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('data', {
            params: {
                id,
                name,
                username,
                email,
                adress: {
                    city,
                }
            }
        })

        setUsers(response.data);
    }
    return (

        <div id="page-landing">
            <h1>Dashboard</h1>
            <div id="page-landing-content" className="container">

                <div className="add-new-user">
                    <span>User List</span>
                    <Link to="/create-user" className='create-user'>
                        Add New
                    </Link>
                </div>

                <div className="user-list">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>E-Mail</th>
                                <th>City</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Aaron Alves</td>
                                <td>nanon</td>
                                <td>aaronalvesvs@gmail.com</td>
                                <td>São Paulo</td>
                                <td>
                                    <Link to="/edit-user" className="edit-user">
                                        Edit
                                    </Link>
                                </td>
                                <td>
                                    <Link to="/" className='delete-user'>
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Landing;