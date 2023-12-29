import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

function RequireAuth({ children }) {
    const { isLoggedIn } = useSelector((state) => state.auth);

    return isLoggedIn
        ?
        (
            <>
                {children}
            </>
        )
        :
        (
            <Navigate to="/login" replace={true} />
        )
}

export default RequireAuth;
