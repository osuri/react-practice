import React from 'react';
import {Route, Link, Redirect} from 'react-router-dom';

function PrivatePage({component: Component, ...rest}) {
    const isAuthenticated = false;
    return (
        <Route {...rest} render={(props)=> isAuthenticated ? <Component {...props} /> : <Redirect to="/" />}>
            
        </Route>
    )
}

export default PrivatePage
