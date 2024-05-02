import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import PropTypes from 'prop-types';


const PrivateRoute = ({ element: Component, ...rest }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated } = authContext;

    return (
        <Route { ...rest } element={props => 
            !isAuthenticated  ? (
            <Navigate to='/login' />
        ) : (
            <Component {...props} />
        )} />
    )
};

PrivateRoute.propTypes = {
  component: PropTypes.elementType, // Ensure component prop is a valid React component
  rest: PropTypes.object, // Rest props can be of any type
};

export default PrivateRoute;