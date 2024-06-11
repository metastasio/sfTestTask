import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

type ProtectedRouteProps = {
  children: () => JSX.Element;
};

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  const { signedIn } = useAppSelector((state) => state.user);
  if (!signedIn) {
    return <Navigate to='/login' replace />;
  }

  return props.children;
};
