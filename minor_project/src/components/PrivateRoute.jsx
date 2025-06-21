import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();

  // if user is logged in, show the page
  // if not, redirect to /login
  return isLoggedIn ? children : <Navigate to="/login" />;
}
