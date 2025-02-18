import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const { user } = useSelector((state: RootState) => state.auth);
  
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;