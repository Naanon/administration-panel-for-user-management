import React from 'react';

import { BrowserRouter, Routes as Rts, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

function Routes() {
    return (
        <BrowserRouter>
            <Rts>
                <Route path="/" element={<Landing />} />
                <Route path="/create-user" element={<CreateUser />} />
                <Route path="/edit-user" element={<EditUser />} />
            </Rts>
        </BrowserRouter>
    )
}

export default Routes;