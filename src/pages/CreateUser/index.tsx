import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/Input';

import './styles.css';

function CreateUser() {
    return (
        <div id="page-landing">
            <h1>Dashboard</h1>
            <div id="page-landing-content" className="container">

                <div className="create-user">
                    <span>Create a new user:</span>
                </div>

                <form action="">
                    <fieldset>
                        <Input
                            name="name"
                            label="Name"
                            required
                        />
                        <Input
                            name="email"
                            label="E-mail"
                            required
                        />
                    </fieldset>

                    <footer>
                        <Link to="/" className="cancel">
                            Cancel
                        </Link>
                        <button type="submit">Submit</button>
                    </footer>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;