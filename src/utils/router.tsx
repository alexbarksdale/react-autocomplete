import React from 'react';
import { Route } from 'react-router-dom';

import { SearchDemo } from '../components/demo/SearchDemo';
import { MenuDemo } from '../components/demo/MenuDemo';

export const BaseRouter = () => {
    return (
        <>
            <Route exact path='/' component={SearchDemo} />
            <Route exact path='/demo' component={MenuDemo} />
        </>
    );
};
