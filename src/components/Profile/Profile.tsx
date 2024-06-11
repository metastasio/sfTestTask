import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logOut } from '../../store/userSlice';
import './profile.css';
import { useEffect } from 'react';

type ProfileProps = {
  openProfileRef: React.MutableRefObject<HTMLDivElement | null>;
  toggleProfile: () => void;
  closeProfile: () => void;
};

export const Profile = (props: ProfileProps) => {
  const { toggleProfile, closeProfile, openProfileRef } = props;
  const { userName } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleClose = () => {
    toggleProfile();
  };

  useEffect(() => {
    const listener = (e: MouseEvent) => {
      if (!openProfileRef?.current?.contains(e.target as Node)) {
        closeProfile();
      }
    };
    window.addEventListener('click', listener);

    return () => {
      window.removeEventListener('click', listener);
    };
  }, []);

  return (
    <div className='profile_wrapper'>
      <img className='profile_arrow' src='/img/arrow 2.svg' alt='' />
      <p className='profile_change_user'>Смена пользователя</p>
      <button className='profile_close' onClick={handleClose}></button>
      <div className='profile_user_list'>
        <div className='profile_user current'>
          <img src='/img/avatar.jpg' alt='Ваше фото' />
          <div className='profile_user_details'>
            <p className='profile_user_name'>{userName}</p>
            <p className='profile_current'>Это вы</p>
          </div>
        </div>
        <div className='profile_user'>
          <img src='/img/2nd user avatar.jpg' alt='Ваше фото' />
          <div className='profile_user_details'>
            <p className='profile_user_name'>Анна</p>
          </div>
        </div>
      </div>
      <button className='profile_logout' onClick={handleClick}>
        Выход
      </button>
    </div>
  );
};
