import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';


export const ProtectedRoute: React.FC<React.PropsWithChildren> = (props) => {
  const { signedIn } = useAppSelector((state) => state.user);
  if (!signedIn) {
    return <Navigate to='/login' replace />;
  }

  return props.children;
};
