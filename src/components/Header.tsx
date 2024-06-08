import { useAppSelector } from '../store/hooks';

export const Header = () => {
  const { userName } = useAppSelector((state) => state.user);
  return <h2>Добро пожаловать, {userName}!</h2>;
};
