import React from 'react';
import { Navigate } from "react-router-dom";
import { AppContext } from '../../contexts/AppContext'
const ProtectedRoute = ({ children, redirectTo }) => {
  const loggedIn = React.useContext(AppContext);
  return loggedIn ? children : <Navigate to={redirectTo} />

}

export default ProtectedRoute;