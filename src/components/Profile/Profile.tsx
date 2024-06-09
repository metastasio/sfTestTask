import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { logOut, toggleProfile } from '../../store/userSlice';
import './profile.css';

export const Profile = () => {
  const { userName, isProfileClosed } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const profileClassNames = cn('profile_wrapper', {
    hidden: isProfileClosed,
  });

  const handleClick = () => {
    dispatch(logOut());
  };

  const handleToggle = () => {
    dispatch(toggleProfile());
  };

  return (
    <div className={profileClassNames}>
      <img className='profile_arrow' src='/img/arrow 2.svg' alt='' />
      <p className='profile_change_user'>Смена пользователя</p>
      <button className='profile_close' onClick={handleToggle}></button>
      <div className='profile_user_list'>
        <div className='profile_user current'>
          <img src='/img/avatar.jpg' alt='Ваше фото' />
          <div className='profile_user_details'>
            <p className='profile_user_name'>{userName}</p>
            <p className='profile_current'>Это вы</p>
          </div>
        </div>
        <div className='profile_user'>
          <img src='' alt='Ваше фото' />
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
